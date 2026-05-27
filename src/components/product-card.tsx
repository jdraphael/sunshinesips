"use client";

import Image from "next/image";
import { Heart, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import type { Product } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ProductCard({
  product,
  onAdd,
}: {
  product: Product;
  onAdd?: (product: Product) => void;
}) {
  const [liked, setLiked] = useState(false);

  return (
    <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.25 }}>
      <Card className="h-full rounded-[1.35rem] border border-[#F2D7A6] bg-white/88 p-0 shadow-[0_18px_50px_rgba(255,198,165,0.22)]">
        <div className="relative aspect-[4/3] overflow-hidden rounded-t-[1.35rem] bg-[#FFF3D0]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover/card:scale-105"
            style={{ objectPosition: product.imagePosition ?? "center" }}
          />
          <Button
            type="button"
            variant="secondary"
            size="icon-lg"
            className="absolute right-3 top-3 rounded-full bg-white/90 text-[#8E478A] shadow-md hover:bg-white"
            onClick={() => setLiked((value) => !value)}
            aria-label={`Wishlist ${product.name}`}
          >
            <Heart className={liked ? "fill-[#FF8EA8] text-[#FF8EA8]" : ""} />
          </Button>
          {product.badge ? (
            <Badge className="absolute left-3 top-3 bg-[#FFD65A] text-[#5A354E]">
              {product.badge}
            </Badge>
          ) : null}
        </div>
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <CardTitle className="font-serif text-xl text-[#3A3038]">
              {product.name}
            </CardTitle>
            <span className="rounded-full bg-[#FFF3D0] px-3 py-1 text-sm font-bold text-[#8D6500]">
              {product.price}
            </span>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-6 text-[#6F5D67]">{product.description}</p>
        </CardContent>
        <CardFooter className="border-[#F3D9A7] bg-[#FFF9F1]/80">
          <Button
            type="button"
            className="w-full rounded-full bg-[#FFD65A] text-[#5A354E] hover:bg-[#F2C647]"
            onClick={() => onAdd?.(product)}
          >
            <ShoppingBag data-icon="inline-start" />
            {product.price === "Free recipe" ? "View Recipe" : "Add to Cart"}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
