import type {
  PaymentInput,
  PaymentMethod,
  PaymentProvider,
  PaymentResult,
  PaymentSession,
} from "@/lib/owner/types";

function createSession(method: PaymentMethod, input: PaymentInput): PaymentSession {
  return {
    id: `${method}-${Date.now()}-${Math.random().toString(36).slice(2)}`,
    method,
    status: "waiting",
    amountCents: input.amountCents,
    createdAt: new Date().toISOString(),
  };
}

export function createMockProvider(method: PaymentMethod, label: string): PaymentProvider {
  return {
    id: method,
    label,
    async initialize(input) {
      return createSession(method, input);
    },
    async confirm(sessionId): Promise<PaymentResult> {
      return { sessionId, status: "success" };
    },
    async cancel() {
      return;
    },
  };
}

export function createCashProvider(): PaymentProvider {
  return {
    id: "cash",
    label: "Cash",
    async initialize(input) {
      return createSession("cash", input);
    },
    async confirm(sessionId) {
      return { sessionId, status: "success" };
    },
    async cancel() {
      return;
    },
  };
}
