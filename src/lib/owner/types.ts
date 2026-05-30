export type PaymentMethod =
  | "cash"
  | "card"
  | "venmo"
  | "cashapp"
  | "paypal"
  | "applepay"
  | "googlepay";

export type PaymentStatus = "idle" | "initializing" | "waiting" | "success" | "failure";

export type ReceiptPreference =
  | { type: "email"; value: string }
  | { type: "text"; value: string }
  | { type: "none" };

export type OwnerProduct = {
  id: string;
  name: string;
  category: "drink" | "treat" | "water";
  description: string;
  priceCents: number;
  inventory: number;
  image: string;
  imagePosition?: string;
};

export type CartItem = {
  productId: string;
  quantity: number;
};

export type SaleLineItem = {
  productId: string;
  name: string;
  quantity: number;
  unitPriceCents: number;
};

export type SaleRecord = {
  id: string;
  items: SaleLineItem[];
  subtotalCents: number;
  taxCents: number;
  totalCents: number;
  paymentMethod: PaymentMethod;
  receipt: ReceiptPreference;
  createdAt: string;
};

export type PaymentInput = {
  amountCents: number;
  items: SaleLineItem[];
};

export type PaymentSession = {
  id: string;
  method: PaymentMethod;
  status: PaymentStatus;
  amountCents: number;
  createdAt: string;
};

export type PaymentResult = {
  sessionId: string;
  status: Extract<PaymentStatus, "success" | "failure">;
};

export type PaymentProvider = {
  id: PaymentMethod;
  label: string;
  initialize: (input: PaymentInput) => Promise<PaymentSession>;
  confirm?: (sessionId: string) => Promise<PaymentResult>;
  cancel: (sessionId: string) => Promise<void>;
};
