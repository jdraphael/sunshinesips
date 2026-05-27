"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, ShoppingBag } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/data";
import type { Product } from "@/lib/types";

const categories = ["All", "Drinkware", "Apparel", "Stationery", "Home", "Digital"];

export function ShopStorefront() {
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState<Product[]>([]);

  const filtered = useMemo(
    () =>
      products.filter((product) => category === "All" || product.category === category),
    [category]
  );

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-5 rounded-[1.5rem] bg-white/82 p-5 shadow-[0_18px_50px_rgba(255,198,165,0.18)] ring-1 ring-[#F2D7A6] lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[#A16D00]">
            <ShoppingBag /> Mock Cart
          </p>
          <p className="mt-2 text-[#6F5D67]">
            {cart.length
              ? `${cart.length} sunny item${cart.length > 1 ? "s" : ""} added.`
              : "Add favorites to preview the lightweight cart state."}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((item) => (
            <Button
              key={item}
              type="button"
              variant={category === item ? "default" : "outline"}
              className={
                category === item
                  ? "rounded-full bg-[#FFD65A] text-[#5A354E] hover:bg-[#F2C647]"
                  : "rounded-full border-[#F2D7A6] bg-white text-[#5A354E]"
              }
              onClick={() => setCategory(item)}
            >
              {item}
            </Button>
          ))}
        </div>
      </div>

      {cart.length ? (
        <div className="flex items-center gap-3 rounded-full bg-[#EFFFF3] px-5 py-3 text-sm font-bold text-[#427A4C]">
          <CheckCircle2 /> Added {cart[cart.length - 1].name} to the mock cart.
        </div>
      ) : null}

      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAdd={(item) => setCart((current) => [...current, item])}
          />
        ))}
      </div>
    </div>
  );
}
