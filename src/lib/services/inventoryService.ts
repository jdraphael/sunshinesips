import { ownerProducts } from "@/lib/owner/catalog";
import type { OwnerProduct, SaleLineItem } from "@/lib/owner/types";
import { OWNER_STORAGE_PREFIX, readJson, writeJson } from "@/lib/services/storage";

export const INVENTORY_KEY = `${OWNER_STORAGE_PREFIX}-inventory`;

type InventoryMap = Record<string, number>;

export function getDefaultInventoryMap(): InventoryMap {
  return Object.fromEntries(ownerProducts.map((product) => [product.id, product.inventory]));
}

export function getInventoryMap(): InventoryMap {
  return readJson(INVENTORY_KEY, getDefaultInventoryMap());
}

export function saveInventoryMap(inventory: InventoryMap) {
  writeJson(INVENTORY_KEY, inventory);
}

export function getProductsWithInventory(): OwnerProduct[] {
  const inventory = getInventoryMap();
  return mapProductsWithInventory(inventory);
}

export function mapProductsWithInventory(inventory: InventoryMap): OwnerProduct[] {
  return ownerProducts.map((product) => ({
    ...product,
    inventory: inventory[product.id] ?? product.inventory,
  }));
}

export function setInventory(productId: string, quantity: number) {
  const inventory = getInventoryMap();
  inventory[productId] = Math.max(0, quantity);
  saveInventoryMap(inventory);
  return inventory[productId];
}

export function adjustInventory(productId: string, delta: number) {
  const inventory = getInventoryMap();
  const current = inventory[productId] ?? ownerProducts.find((product) => product.id === productId)?.inventory ?? 0;
  inventory[productId] = Math.max(0, current + delta);
  saveInventoryMap(inventory);
  return inventory[productId];
}

export function applySaleToInventory(items: SaleLineItem[]) {
  const inventory = getInventoryMap();

  for (const item of items) {
    const current = inventory[item.productId] ?? 0;
    inventory[item.productId] = Math.max(0, current - item.quantity);
  }

  saveInventoryMap(inventory);
  return inventory;
}
