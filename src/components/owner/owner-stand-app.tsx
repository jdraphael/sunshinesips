"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OwnerProductCard } from "@/components/owner/owner-product-card";
import { OrderSummaryCard } from "@/components/owner/order-summary-card";
import { PaymentCard } from "@/components/owner/payment-card";
import { ReceiptOptionCard } from "@/components/owner/receipt-option-card";
import { ReviewOrderList } from "@/components/owner/review-order-list";
import { SuccessScreen } from "@/components/owner/success-screen";
import { WizardLayout } from "@/components/owner/wizard-layout";
import { ProgressHeader } from "@/components/owner/progress-header";
import { formatMoney } from "@/lib/owner/catalog";
import type {
  CartItem,
  OwnerProduct,
  PaymentMethod,
  PaymentSession,
  PaymentStatus,
  ReceiptPreference,
  SaleRecord,
  SaleLineItem,
} from "@/lib/owner/types";
import { paymentProviderList, paymentProviders } from "@/lib/payments";
import { useProductsWithInventory } from "@/lib/owner/use-owner-store";
import { applySaleToInventory } from "@/lib/services/inventoryService";
import { recordSale } from "@/lib/services/salesService";
import { sendReceipt, validateReceiptPreference } from "@/lib/services/receiptService";

const paymentLabels: Record<PaymentMethod, string> = {
  cash: "Cash",
  card: "Card",
  venmo: "Venmo",
  cashapp: "Cash App",
  paypal: "PayPal",
  applepay: "Apple Pay",
  googlepay: "Google Pay",
};

function getLineItems(rows: Array<{ product: OwnerProduct; quantity: number }>): SaleLineItem[] {
  return rows.map(({ product, quantity }) => ({
    productId: product.id,
    name: product.name,
    quantity,
    unitPriceCents: product.priceCents,
  }));
}

function createSaleRecord({
  rows,
  subtotalCents,
  taxCents,
  totalCents,
  paymentMethod,
  receipt,
}: {
  rows: Array<{ product: OwnerProduct; quantity: number }>;
  subtotalCents: number;
  taxCents: number;
  totalCents: number;
  paymentMethod: PaymentMethod;
  receipt: ReceiptPreference;
}): SaleRecord {
  const createdAt = new Date().toISOString();

  return {
    id: `sale-${createdAt}-${Math.random().toString(36).slice(2)}`,
    items: getLineItems(rows),
    subtotalCents,
    taxCents,
    totalCents,
    paymentMethod,
    receipt,
    createdAt,
  };
}

export function OwnerStandApp() {
  const products = useProductsWithInventory();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(null);
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>("idle");
  const [paymentSession, setPaymentSession] = useState<PaymentSession | null>(null);
  const [customerGave, setCustomerGave] = useState("");
  const [receiptEmail, setReceiptEmail] = useState("");
  const [receiptPhone, setReceiptPhone] = useState("");
  const [receiptError, setReceiptError] = useState<string | null>(null);

  const rows = useMemo(() => {
    return cart
      .map((item) => {
        const product = products.find((candidate) => candidate.id === item.productId);
        return product ? { product, quantity: item.quantity } : null;
      })
      .filter(Boolean) as Array<{ product: OwnerProduct; quantity: number }>;
  }, [cart, products]);

  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const subtotalCents = rows.reduce(
    (total, row) => total + row.product.priceCents * row.quantity,
    0
  );
  const taxCents = 0;
  const totalCents = subtotalCents + taxCents;
  const customerGaveCents = Math.round(Number(customerGave || 0) * 100);
  const changeDueCents = Math.max(0, customerGaveCents - totalCents);

  useEffect(() => {
    if (step !== 4 || !paymentMethod) {
      return;
    }

    let timeout: ReturnType<typeof setTimeout> | null = null;
    const provider = paymentProviders[paymentMethod];

    async function initializePayment() {
      setPaymentStatus("initializing");
      const session = await provider.initialize({
        amountCents: totalCents,
        items: getLineItems(rows),
      });
      setPaymentSession(session);
      setPaymentStatus("waiting");

      if (paymentMethod !== "cash") {
        timeout = setTimeout(async () => {
          if (!provider.confirm) {
            setPaymentStatus("failure");
            return;
          }

          const result = await provider.confirm(session.id);
          setPaymentStatus(result.status);
          if (result.status === "success") {
            setStep(5);
          }
        }, 1600);
      }
    }

    initializePayment();

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [paymentMethod, rows, step, totalCents]);

  function addToCart(product: OwnerProduct) {
    setCart((current) => {
      const existing = current.find((item) => item.productId === product.id);
      const existingQuantity = existing?.quantity ?? 0;
      if (existingQuantity >= product.inventory) {
        return current;
      }

      if (!existing) {
        return [...current, { productId: product.id, quantity: 1 }];
      }

      return current.map((item) =>
        item.productId === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    });
  }

  function decrease(productId: string) {
    setCart((current) =>
      current
        .map((item) =>
          item.productId === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function increase(productId: string) {
    const product = products.find((candidate) => candidate.id === productId);
    if (!product) {
      return;
    }
    addToCart(product);
  }

  function remove(productId: string) {
    setCart((current) => current.filter((item) => item.productId !== productId));
  }

  async function cancelPayment() {
    if (paymentMethod && paymentSession) {
      await paymentProviders[paymentMethod].cancel(paymentSession.id);
    }
    setPaymentSession(null);
    setPaymentStatus("idle");
    setPaymentMethod(null);
    setStep(3);
  }

  async function confirmCash() {
    if (!paymentSession || !paymentMethod) {
      return;
    }

    const result = await paymentProviders[paymentMethod].confirm?.(paymentSession.id);
    if (result?.status === "success") {
      setPaymentStatus("success");
      setStep(5);
    }
  }

  async function completeOrder(receipt: ReceiptPreference) {
    const validationError = validateReceiptPreference(receipt);
    if (validationError) {
      setReceiptError(validationError);
      return;
    }

    if (!paymentMethod) {
      setReceiptError("Choose a payment method first.");
      return;
    }

    const sale = createSaleRecord({
      rows,
      subtotalCents,
      taxCents,
      totalCents,
      paymentMethod,
      receipt,
    });

    const receiptResult = await sendReceipt(sale, receipt);
    if (!receiptResult.ok) {
      setReceiptError(receiptResult.error);
      return;
    }

    recordSale(sale);
    applySaleToInventory(sale.items);
    setCart([]);
    setReceiptError(null);
    setStep(6);
  }

  function startNewOrder() {
    setCart([]);
    setPaymentMethod(null);
    setPaymentStatus("idle");
    setPaymentSession(null);
    setCustomerGave("");
    setReceiptEmail("");
    setReceiptPhone("");
    setReceiptError(null);
    setStep(1);
  }

  function goBack() {
    if (step <= 1) {
      return;
    }

    if (step === 4) {
      void cancelPayment();
      return;
    }

    setStep((current) => current - 1);
  }

  if (step === 6) {
    return (
      <section className="min-h-dvh bg-[#FFF9F1] p-3 sm:p-5">
        <SuccessScreen onStartNewOrder={startNewOrder} />
      </section>
    );
  }

  if (step === 1) {
    return (
      <WizardLayout
        step={1}
        title="What is the customer buying?"
        subtitle="Choose drinks and treats for this order."
        canGoBack={false}
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <OwnerProductCard key={product.id} product={product} onAdd={addToCart} />
            ))}
          </div>
          <OrderSummaryCard
            itemCount={itemCount}
            totalCents={totalCents}
            onReview={() => {
              if (itemCount > 0) {
                setStep(2);
              }
            }}
          />
        </div>
      </WizardLayout>
    );
  }

  if (step === 2) {
    return (
      <WizardLayout
        step={2}
        title="Review Customer Order"
        subtitle="Check your items and quantities."
        onBack={goBack}
      >
        <ReviewOrderList
          rows={rows}
          onIncrease={increase}
          onDecrease={decrease}
          onRemove={remove}
        />
        <div className="ml-auto mt-7 max-w-md space-y-3 text-[#3A3038]">
          <div className="flex justify-between text-base font-bold">
            <span>Subtotal</span>
            <span>{formatMoney(subtotalCents)}</span>
          </div>
          <div className="flex justify-between border-b border-[#DFA7CF] pb-4 text-base font-bold">
            <span>Tax</span>
            <span>{formatMoney(taxCents)}</span>
          </div>
          <div className="flex justify-between text-2xl font-extrabold text-[#8E478A]">
            <span>Total</span>
            <span>{formatMoney(totalCents)}</span>
          </div>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-[220px_1fr]">
          <Button
            type="button"
            variant="outline"
            className="min-h-13 rounded-lg border-[#DFA7CF] bg-white font-extrabold text-[#8E478A]"
            onClick={goBack}
          >
            <ArrowLeft data-icon="inline-start" />
            Back
          </Button>
          <Button
            type="button"
            className="min-h-13 rounded-lg bg-[#FFD65A] text-base font-extrabold text-[#5A354E] hover:bg-[#F2C647]"
            disabled={itemCount === 0}
            onClick={() => setStep(3)}
          >
            Continue To Payment
            <ArrowRight data-icon="inline-end" />
          </Button>
        </div>
      </WizardLayout>
    );
  }

  if (step === 3) {
    return (
      <WizardLayout
        step={3}
        title="How would the customer like to pay?"
        subtitle="Select a payment method."
        onBack={goBack}
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {paymentProviderList.map((provider) => (
            <PaymentCard
              key={provider.id}
              method={provider.id}
              label={provider.label}
              onSelect={(method) => {
                setPaymentMethod(method);
                setStep(4);
              }}
            />
          ))}
        </div>
      </WizardLayout>
    );
  }

  if (step === 4) {
    return (
      <WizardLayout
        step={4}
        title="Payment"
        subtitle="Complete the customer payment."
        fullBleed
      >
        <div className="relative min-h-[calc(100dvh-2rem)] overflow-hidden rounded-[1.25rem]">
          <Image
            src="/images/generated/hero-lemonade.png"
            alt="Sunlit lemonade glasses"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#FFF9F1]/40 backdrop-blur-[1px]" />
          <div className="relative z-10 p-5 sm:p-7">
            <ProgressHeader step={4} onBack={cancelPayment} />
            <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-[#F2D7A6] bg-white/94 p-7 text-center shadow-[0_24px_80px_rgba(90,53,78,0.18)] backdrop-blur">
              {paymentMethod === "cash" ? (
                <>
                  <h1 className="font-serif text-3xl font-bold text-[#5A354E]">
                    Cash Payment
                  </h1>
                  <p className="mt-2 text-sm font-bold text-[#6F5D67]">
                    Collect the total and confirm the payment.
                  </p>
                  <div className="mt-7 rounded-xl bg-[#FFF9F1] p-5">
                    <p className="text-sm font-bold text-[#6F5D67]">Customer Total</p>
                    <p className="text-5xl font-extrabold text-[#3A3038]">
                      {formatMoney(totalCents)}
                    </p>
                  </div>
                  <label className="mt-5 block text-left text-sm font-extrabold text-[#5A354E]">
                    Customer Gave
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={customerGave}
                      onChange={(event) => setCustomerGave(event.target.value)}
                      className="mt-2 min-h-13 w-full rounded-lg border border-[#F2D7A6] bg-[#FFF9F1] px-4 text-lg font-extrabold outline-none focus:border-[#FFD65A] focus:ring-3 focus:ring-[#FFD65A]/40"
                    />
                  </label>
                  <div className="mt-5 flex items-center justify-between rounded-xl border border-[#F2D7A6] bg-white p-4">
                    <span className="font-extrabold text-[#5A354E]">Change Due</span>
                    <span className="text-2xl font-extrabold text-[#8E478A]">
                      {formatMoney(changeDueCents)}
                    </span>
                  </div>
                  <Button
                    type="button"
                    className="mt-6 min-h-13 w-full rounded-lg bg-[#FFD65A] text-base font-extrabold text-[#5A354E] hover:bg-[#F2C647]"
                    disabled={paymentStatus === "initializing"}
                    onClick={confirmCash}
                  >
                    Payment Received
                  </Button>
                </>
              ) : (
                <>
                  <h1 className="font-serif text-3xl font-bold text-[#5A354E]">
                    Waiting For {paymentMethod ? paymentLabels[paymentMethod] : "Payment"} Payment
                  </h1>
                  <p className="mt-2 text-sm font-bold text-[#6F5D67]">
                    Ask your customer to scan the QR code.
                  </p>
                  <div className="mx-auto mt-6 grid size-44 grid-cols-8 gap-1 rounded-lg bg-white p-3 shadow-inner">
                    {Array.from({ length: 64 }).map((_, index) => (
                      <span
                        key={index}
                        className={
                          (index * 7 + index) % 5 === 0 || index % 11 === 0
                            ? "bg-[#1F1720]"
                            : "bg-[#F8F0E6]"
                        }
                      />
                    ))}
                  </div>
                  <div className="mt-5 flex items-center justify-center gap-3 text-sm font-extrabold text-[#3A3038]">
                    <Loader2 className="size-5 animate-spin text-[#8E478A]" />
                    {paymentStatus === "failure" ? "Payment failed." : "Waiting for payment..."}
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    className="mt-7 min-h-12 w-full rounded-lg border-[#F2D7A6] bg-[#FFF9F1] font-extrabold text-[#8E478A]"
                    onClick={cancelPayment}
                  >
                    Cancel Payment
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </WizardLayout>
    );
  }

  return (
    <WizardLayout
      step={5}
      title="Would the customer like a receipt?"
      subtitle="Choose how they'd like to receive it."
      onBack={goBack}
    >
      {receiptError ? (
        <p className="mb-4 rounded-lg border border-[#C85252]/30 bg-[#C85252]/10 px-4 py-3 text-sm font-bold text-[#C85252]">
          {receiptError}
        </p>
      ) : null}
      <div className="grid gap-5 md:grid-cols-3">
        <ReceiptOptionCard
          type="email"
          title="Email Receipt"
          description="Send to their email."
          image="/images/generated/blog-contact-flatlay.png"
          action="Send By Email"
          value={receiptEmail}
          onValueChange={setReceiptEmail}
          onChoose={() => completeOrder({ type: "email", value: receiptEmail })}
        />
        <ReceiptOptionCard
          type="text"
          title="Text Receipt"
          description="Send to their phone."
          image="/images/generated/about-lifestyle.png"
          action="Send By Text"
          value={receiptPhone}
          onValueChange={setReceiptPhone}
          onChoose={() => completeOrder({ type: "text", value: receiptPhone })}
        />
        <ReceiptOptionCard
          type="none"
          title="No Receipt"
          description="No receipt needed."
          image="/images/generated/sunshine-journal.png"
          action="No Receipt"
          onChoose={() => completeOrder({ type: "none" })}
        />
      </div>
    </WizardLayout>
  );
}
