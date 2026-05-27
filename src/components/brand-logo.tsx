import { Heart, Rainbow, Sparkle } from "lucide-react";
import Link from "next/link";

export function BrandLogo() {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-3"
      aria-label="Sunshine Sips home"
    >
      <span className="relative grid size-14 place-items-center rounded-full bg-[linear-gradient(135deg,#FFD65A,#FFDCE5_48%,#B18BD9)] shadow-[0_12px_30px_rgba(255,198,165,0.45)]">
        <span className="absolute inset-1 rounded-full bg-[#FFF9F1]" />
        <Rainbow className="relative text-[#B18BD9]" />
        <Sparkle className="absolute -right-1 top-1 text-[#F7A900]" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-script text-3xl text-[#8E478A] transition-colors group-hover:text-[#B18BD9]">
          Sunshine
        </span>
        <span className="-mt-1 inline-flex items-center gap-1 font-script text-3xl text-[#8E478A] transition-colors group-hover:text-[#B18BD9]">
          Sips <Heart className="fill-[#FFC6A5] text-[#FFC6A5]" />
        </span>
      </span>
    </Link>
  );
}
