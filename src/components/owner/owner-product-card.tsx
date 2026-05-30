"use client";

import Image from "next/image";
import type { OwnerProduct } from "@/lib/owner/types";
import { formatMoney } from "@/lib/owner/catalog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function OwnerProductCard({
  product,
  onAdd,
}: {
  product: OwnerProduct;
  onAdd: (product: OwnerProduct) => void;
}) {
  const soldOut = product.inventory <= 0;

  return (
    <article className="group flex min-h-full flex-col overflow-hidden rounded-xl border border-[#F2D7A6] bg-white shadow-[0_14px_34px_rgba(255,198,165,0.18)] transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(255,198,165,0.3)]">
      <div className="relative aspect-[1.7/1] bg-[#FFF3D0]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover transition duration-500 group-hover:scale-105"
          style={{ objectPosition: product.imagePosition ?? "center" }}
          loading="eager"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-sm font-extrabold text-[#3A3038]">{product.name}</h3>
        <p className="mt-1 min-h-10 text-xs font-medium leading-5 text-[#6F5D67]">
          {product.description}
        </p>
        <p className="mt-3 text-lg font-extrabold text-[#3A3038]">
          {formatMoney(product.priceCents)}
        </p>
        <p
          className={cn(
            "mt-1 text-xs font-bold",
            soldOut ? "text-[#C85252]" : "text-[#6F5D67]"
          )}
        >
          {soldOut ? "Sold out" : `${product.inventory} left`}
        </p>
        <Button
          type="button"
          className="mt-4 min-h-11 w-full rounded-lg bg-[#FFD65A] font-extrabold text-[#5A354E] hover:bg-[#F2C647]"
          disabled={soldOut}
          onClick={() => onAdd(product)}
        >
          Add To Order
        </Button>
      </div>
    </article>
  );
}
