"use client";

import { OwnerLayout } from "@/components/owner/owner-layout";
import { InventoryCard } from "@/components/owner/inventory-card";
import { useProductsWithInventory } from "@/lib/owner/use-owner-store";
import { adjustInventory } from "@/lib/services/inventoryService";

export default function OwnerInventoryPage() {
  const products = useProductsWithInventory();

  function adjust(productId: string, delta: number) {
    adjustInventory(productId, delta);
  }

  return (
    <OwnerLayout active="/owner/inventory">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-7">
          <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#8E478A]">
            Boutique Catalog
          </p>
          <h1 className="font-serif text-4xl font-bold text-[#5A354E]">
            Inventory
          </h1>
          <p className="mt-2 max-w-2xl text-base font-medium text-[#6F5D67]">
            Keep drinks and treats stocked with large controls made for a busy stand.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <InventoryCard
              key={product.id}
              product={product}
              onIncrease={(productId) => adjust(productId, 1)}
              onDecrease={(productId) => adjust(productId, -1)}
            />
          ))}
        </div>
      </div>
    </OwnerLayout>
  );
}
