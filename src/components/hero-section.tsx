"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { BrandLogo } from "@/components/brand-logo";
import { FloatingDecorations } from "@/components/floating-decorations";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#FFF9F1]">
      <FloatingDecorations />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-10 sm:px-6 md:grid-cols-[0.9fr_1.1fr] lg:min-h-[560px] lg:px-8">
        <motion.div
          className="relative z-10 flex flex-col items-center text-center md:items-start md:text-left"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-8 scale-110">
            <BrandLogo />
          </div>
          <h1 className="max-w-xl font-serif text-5xl font-semibold leading-[1.04] text-[#5A354E] sm:text-6xl lg:text-7xl">
            Brighten Your Day.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-[#5F515C]">
            Simple sips, sweet moments, and little reminders to find the sunshine
            every day.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/recipes"
              className={cn(
                buttonVariants(),
                "h-13 rounded-full bg-[#F7B500] px-8 text-base font-extrabold uppercase tracking-[0.08em] text-white shadow-[0_14px_30px_rgba(247,181,0,0.28)] hover:bg-[#E8A600]"
              )}
            >
              Explore Recipes <Heart data-icon="inline-end" className="fill-white" />
            </Link>
            <Link
              href="/shop"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "h-13 rounded-full border-[#FFD65A] bg-white/80 px-8 text-base font-extrabold uppercase tracking-[0.08em] text-[#5A354E] hover:bg-[#FFF3D0]"
              )}
            >
              Shop Favorites <Sparkles data-icon="inline-end" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="relative min-h-[360px] md:min-h-[430px]"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="absolute inset-0 rounded-[2rem] bg-[#FFD65A]/20 blur-3xl" />
          <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] shadow-[0_28px_80px_rgba(255,198,165,0.42)] ring-1 ring-white/70 md:min-h-[430px]">
            <Image
              src="/images/generated/hero-lemonade.png"
              alt="Sparkling lemonade with lemons and yellow flowers in warm sunlight"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 56vw"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
