import Link from "next/link";
import { Camera, Heart, Music2, Sparkles } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { navItems } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#F5D9A6] bg-[#FFD65A]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div className="flex flex-col gap-5">
          <BrandLogo />
          <p className="max-w-sm text-base leading-7 text-[#5A354E]">
            Cozy drinks, sweet recipes, and little reminders to find the
            sunshine in every day.
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#865E00]">
            Explore
          </h3>
          <div className="grid gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-[#5A354E] transition-colors hover:text-[#8E478A]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#865E00]">
            Social
          </h3>
          <div className="flex gap-3">
            {[Camera, Heart, Music2].map((Icon, index) => (
              <Button
                key={index}
                variant="secondary"
                size="icon-lg"
                className="rounded-full bg-white/80 text-[#8E478A] hover:bg-white"
                aria-label="Social profile"
              >
                <Icon />
              </Button>
            ))}
          </div>
          <p className="mt-6 flex items-center gap-2 font-script text-2xl text-[#7A4A32]">
            <Sparkles /> Good sips. Bright days. Happy hearts.
          </p>
        </div>
      </div>
    </footer>
  );
}
