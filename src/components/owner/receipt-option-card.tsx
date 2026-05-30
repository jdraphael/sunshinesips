"use client";

import Image from "next/image";
import type { ReceiptPreference } from "@/lib/owner/types";
import { Button } from "@/components/ui/button";

export function ReceiptOptionCard({
  type,
  title,
  description,
  image,
  action,
  value,
  onValueChange,
  onChoose,
}: {
  type: ReceiptPreference["type"];
  title: string;
  description: string;
  image: string;
  action: string;
  value?: string;
  onValueChange?: (value: string) => void;
  onChoose: () => void;
}) {
  const inputType = type === "email" ? "email" : "tel";
  const placeholder = type === "email" ? "customer@email.com" : "(555) 123-4567";

  return (
    <article className="overflow-hidden rounded-xl border border-[#F2D7A6] bg-white shadow-[0_14px_38px_rgba(90,53,78,0.07)]">
      <div className="relative aspect-[1.25/1] bg-[#FFF3D0]">
        <Image src={image} alt={title} fill sizes="(max-width: 768px) 100vw, 30vw" className="object-cover" />
      </div>
      <div className="p-5 text-center">
        <h3 className="text-lg font-extrabold text-[#3A3038]">{title}</h3>
        <p className="mt-2 min-h-10 text-sm font-medium leading-5 text-[#6F5D67]">
          {description}
        </p>
        {type !== "none" ? (
          <input
            type={inputType}
            value={value ?? ""}
            onChange={(event) => onValueChange?.(event.target.value)}
            placeholder={placeholder}
            className="mt-4 min-h-11 w-full rounded-lg border border-[#F2D7A6] bg-[#FFF9F1] px-4 text-sm font-bold text-[#3A3038] outline-none focus:border-[#FFD65A] focus:ring-3 focus:ring-[#FFD65A]/40"
          />
        ) : null}
        <Button
          type="button"
          className="mt-4 min-h-11 w-full rounded-lg bg-[#FFD65A] font-extrabold text-[#5A354E] hover:bg-[#F2C647]"
          onClick={onChoose}
        >
          {action}
        </Button>
      </div>
    </article>
  );
}
