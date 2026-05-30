"use client";

import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatMoney } from "@/lib/owner/catalog";
import type { OwnerProduct } from "@/lib/owner/types";

export function ReviewOrderList({
  rows,
  onIncrease,
  onDecrease,
  onRemove,
}: {
  rows: Array<{ product: OwnerProduct; quantity: number }>;
  onIncrease: (productId: string) => void;
  onDecrease: (productId: string) => void;
  onRemove: (productId: string) => void;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#F2D7A6] bg-white shadow-[0_18px_50px_rgba(90,53,78,0.08)]">
      {rows.map(({ product, quantity }) => (
        <div
          key={product.id}
          className="grid gap-4 border-b border-[#F2D7A6]/70 p-4 last:border-b-0 sm:grid-cols-[auto_1fr_auto_auto_auto] sm:items-center sm:p-6"
        >
          <div className="relative size-20 overflow-hidden rounded-lg bg-[#FFF3D0]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="80px"
              className="object-cover"
              style={{ objectPosition: product.imagePosition ?? "center" }}
            />
          </div>
          <div>
            <p className="font-extrabold text-[#3A3038]">{product.name}</p>
            <p className="mt-1 text-sm font-bold text-[#3A3038]">
              {formatMoney(product.priceCents)}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              type="button"
              variant="outline"
              size="icon-sm"
              className="rounded-full border-[#DFA7CF] bg-white text-[#8E478A]"
              onClick={() => onDecrease(product.id)}
              aria-label={`Decrease ${product.name}`}
            >
              <Minus />
            </Button>
            <span className="min-w-8 text-center text-lg font-extrabold">{quantity}</span>
            <Button
              type="button"
              variant="outline"
              size="icon-sm"
              className="rounded-full border-[#DFA7CF] bg-white text-[#8E478A]"
              onClick={() => onIncrease(product.id)}
              disabled={quantity >= product.inventory}
              aria-label={`Increase ${product.name}`}
            >
              <Plus />
            </Button>
          </div>
          <p className="text-right text-lg font-extrabold text-[#3A3038]">
            {formatMoney(product.priceCents * quantity)}
          </p>
          <Button
            type="button"
            variant="ghost"
            size="icon-lg"
            className="rounded-full text-[#5A354E]"
            onClick={() => onRemove(product.id)}
            aria-label={`Remove ${product.name}`}
          >
            <Trash2 />
          </Button>
        </div>
      ))}
    </div>
  );
}
