import { ownerProducts } from "@/lib/owner/catalog";
import type { OwnerProduct } from "@/lib/owner/types";

export function listProducts(): OwnerProduct[] {
  return ownerProducts;
}

export function findProduct(productId: string, products: OwnerProduct[] = ownerProducts) {
  return products.find((product) => product.id === productId);
}
