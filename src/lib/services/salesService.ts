import type { SaleRecord } from "@/lib/owner/types";
import { OWNER_STORAGE_PREFIX, readJson, writeJson } from "@/lib/services/storage";

export const SALES_KEY = `${OWNER_STORAGE_PREFIX}-sales`;

export function listSales(): SaleRecord[] {
  return readJson<SaleRecord[]>(SALES_KEY, []);
}

export function recordSale(sale: SaleRecord) {
  const sales = listSales();
  writeJson(SALES_KEY, [sale, ...sales]);
  return sale;
}

export function getTodaysSales(now = new Date()) {
  const today = now.toISOString().slice(0, 10);
  return listSales().filter((sale) => sale.createdAt.slice(0, 10) === today);
}

export function getTodaysSalesTotalCents() {
  return getTodaysSales().reduce((total, sale) => total + sale.totalCents, 0);
}
