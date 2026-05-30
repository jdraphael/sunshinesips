import type { PaymentMethod, PaymentProvider } from "@/lib/owner/types";
import { applePayProvider } from "@/lib/payments/applepay";
import { cashProvider } from "@/lib/payments/cash";
import { cashAppProvider } from "@/lib/payments/cashapp";
import { googlePayProvider } from "@/lib/payments/googlepay";
import { paypalProvider } from "@/lib/payments/paypal";
import { stripeProvider } from "@/lib/payments/stripe";
import { venmoProvider } from "@/lib/payments/venmo";

export const paymentProviders: Record<PaymentMethod, PaymentProvider> = {
  cash: cashProvider,
  card: stripeProvider,
  venmo: venmoProvider,
  cashapp: cashAppProvider,
  paypal: paypalProvider,
  applepay: applePayProvider,
  googlepay: googlePayProvider,
};

export const paymentProviderList = [
  cashProvider,
  stripeProvider,
  venmoProvider,
  cashAppProvider,
  paypalProvider,
  applePayProvider,
  googlePayProvider,
];
