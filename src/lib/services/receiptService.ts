import type { ReceiptPreference, SaleRecord } from "@/lib/owner/types";

export function validateReceiptPreference(preference: ReceiptPreference): string | null {
  if (preference.type === "none") {
    return null;
  }

  if (preference.type === "email") {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(preference.value.trim())
      ? null
      : "Enter a valid email address.";
  }

  const digits = preference.value.replace(/\D/g, "");
  return digits.length >= 10 ? null : "Enter a valid phone number.";
}

export async function sendReceipt(_sale: SaleRecord, preference: ReceiptPreference) {
  const error = validateReceiptPreference(preference);
  if (error) {
    return { ok: false, error };
  }

  return { ok: true, error: null };
}
