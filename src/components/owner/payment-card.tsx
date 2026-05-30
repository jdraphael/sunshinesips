import type { PaymentMethod } from "@/lib/owner/types";
import { cn } from "@/lib/utils";

const paymentStyles: Record<PaymentMethod, string> = {
  cash: "text-[#2F7C3D]",
  card: "text-[#1D4ED8]",
  venmo: "text-[#0074DE]",
  cashapp: "text-[#00C244]",
  paypal: "text-[#003087]",
  applepay: "text-black",
  googlepay: "text-[#5F6368]",
};

const paymentLogos: Record<PaymentMethod, React.ReactNode> = {
  cash: <span className="text-4xl">Cash</span>,
  card: (
    <span className="flex flex-col items-center gap-1">
      <span className="text-2xl font-black tracking-tight">VISA</span>
      <span className="text-sm font-black text-[#EB001B]">mastercard</span>
    </span>
  ),
  venmo: <span className="text-4xl font-black italic">venmo</span>,
  cashapp: <span className="text-4xl font-black">$</span>,
  paypal: <span className="text-3xl font-black italic">PayPal</span>,
  applepay: <span className="text-4xl font-black">Apple Pay</span>,
  googlepay: <span className="text-3xl font-black">G Pay</span>,
};

export function PaymentCard({
  method,
  label,
  onSelect,
}: {
  method: PaymentMethod;
  label: string;
  onSelect: (method: PaymentMethod) => void;
}) {
  return (
    <button
      type="button"
      className="flex min-h-40 flex-col items-center justify-center rounded-xl border border-[#F2D7A6] bg-white p-5 text-center shadow-[0_12px_34px_rgba(90,53,78,0.06)] transition hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(255,198,165,0.28)]"
      onClick={() => onSelect(method)}
    >
      <span className={cn("grid min-h-16 place-items-center font-sans", paymentStyles[method])}>
        {paymentLogos[method]}
      </span>
      <span className="mt-5 text-lg font-extrabold text-[#3A3038]">{label}</span>
    </button>
  );
}
