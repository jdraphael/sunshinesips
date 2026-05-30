"use client";

import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { OwnerProduct } from "@/lib/owner/types";
import { formatMoney } from "@/lib/owner/catalog";
import { Badge } from "@/components/ui/badge";

export function InventoryCard({
  product,
  onIncrease,
  onDecrease,
}: {
  product: OwnerProduct;
  onIncrease: (productId: string) => void;
  onDecrease: (productId: string) => void;
}) {
  const status =
    product.inventory === 0 ? "Sold Out" : product.inventory <= 5 ? "Low Inventory" : "In Stock";

  return (
    <article className="overflow-hidden rounded-[1.25rem] border border-[#F2D7A6] bg-white shadow-[0_16px_44px_rgba(90,53,78,0.07)]">
      <div className="relative aspect-[1.7/1] bg-[#FFF3D0]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
          style={{ objectPosition: product.imagePosition ?? "center" }}
        />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-serif text-2xl font-bold text-[#5A354E]">{product.name}</h3>
            <p className="mt-1 text-sm font-bold text-[#6F5D67]">{formatMoney(product.priceCents)}</p>
          </div>
          <Badge className="bg-[#FFF3D0] text-[#5A354E]">{status}</Badge>
        </div>
        <p className="mt-5 text-4xl font-extrabold text-[#3A3038]">{product.inventory}</p>
        <p className="text-sm font-bold text-[#6F5D67]">Inventory Remaining</p>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <Button
            type="button"
            variant="outline"
            className="min-h-12 rounded-lg border-[#F2D7A6] bg-white font-extrabold text-[#5A354E]"
            onClick={() => onDecrease(product.id)}
            disabled={product.inventory <= 0}
          >
            <Minus data-icon="inline-start" />
            Decrease
          </Button>
          <Button
            type="button"
            className="min-h-12 rounded-lg bg-[#FFD65A] font-extrabold text-[#5A354E] hover:bg-[#F2C647]"
            onClick={() => onIncrease(product.id)}
          >
            <Plus data-icon="inline-start" />
            Increase
          </Button>
        </div>
      </div>
    </article>
  );
}
