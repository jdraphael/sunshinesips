"use client";

import { useMemo, useSyncExternalStore } from "react";
import {
  getDefaultInventoryMap,
  getInventoryMap,
  INVENTORY_KEY,
  mapProductsWithInventory,
} from "@/lib/services/inventoryService";
import { getTodaysSales, getTodaysSalesTotalCents, SALES_KEY } from "@/lib/services/salesService";
import { subscribeStorageKey } from "@/lib/services/storage";

function getInventorySnapshot() {
  return JSON.stringify(getInventoryMap());
}

function getServerInventorySnapshot() {
  return JSON.stringify(getDefaultInventoryMap());
}

function getSalesSnapshot() {
  return JSON.stringify({
    totalCents: getTodaysSalesTotalCents(),
    customers: getTodaysSales().length,
  });
}

function getServerSalesSnapshot() {
  return JSON.stringify({ totalCents: 0, customers: 0 });
}

export function useProductsWithInventory() {
  const snapshot = useSyncExternalStore(
    (callback) => subscribeStorageKey(INVENTORY_KEY, callback),
    getInventorySnapshot,
    getServerInventorySnapshot
  );

  return useMemo(() => {
    return mapProductsWithInventory(JSON.parse(snapshot) as Record<string, number>);
  }, [snapshot]);
}

export function useOwnerDashboardMetrics() {
  const inventorySnapshot = useSyncExternalStore(
    (callback) => subscribeStorageKey(INVENTORY_KEY, callback),
    getInventorySnapshot,
    getServerInventorySnapshot
  );
  const salesSnapshot = useSyncExternalStore(
    (callback) => subscribeStorageKey(SALES_KEY, callback),
    getSalesSnapshot,
    getServerSalesSnapshot
  );

  return useMemo(() => {
    const products = mapProductsWithInventory(
      JSON.parse(inventorySnapshot) as Record<string, number>
    );
    const sales = JSON.parse(salesSnapshot) as { totalCents: number; customers: number };

    return {
      salesTotalCents: sales.totalCents,
      customers: sales.customers,
      productsRemaining: products.reduce((total, product) => total + product.inventory, 0),
    };
  }, [inventorySnapshot, salesSnapshot]);
}
