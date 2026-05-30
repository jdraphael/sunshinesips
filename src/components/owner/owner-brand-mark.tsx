import { Heart, Sparkles, Sun } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function OwnerBrandMark({
  compact = false,
  href = "/owner/dashboard",
}: {
  compact?: boolean;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className={cn("inline-flex items-center gap-3", compact && "gap-2")}
      aria-label="Sunshine Sips owner dashboard"
    >
      <span
        className={cn(
          "relative grid place-items-center rounded-full bg-[#FFF3D0] text-[#F7B500] shadow-[0_12px_30px_rgba(255,198,165,0.34)]",
          compact ? "size-9" : "size-12"
        )}
      >
        <Sun className={compact ? "size-5" : "size-7"} />
        <Sparkles className="absolute -right-1 -top-1 size-4 text-[#FFD65A]" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-script text-[#8E478A]",
            compact ? "text-2xl" : "text-4xl"
          )}
        >
          Sunshine
        </span>
        <span
          className={cn(
            "-mt-1 inline-flex items-center gap-1 font-script text-[#8E478A]",
            compact ? "text-2xl" : "text-4xl"
          )}
        >
          Sips <Heart className="size-4 fill-[#FFC6A5] text-[#FFC6A5]" />
        </span>
      </span>
    </Link>
  );
}
