"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Heart, Menu, Search, ShoppingCart, UserRound, X } from "lucide-react";
import { useState } from "react";
import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#F3D9A7] bg-[#FFF9F1]/92 backdrop-blur-xl">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <BrandLogo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative text-sm font-bold uppercase tracking-[0.12em] text-[#2F2930] transition-colors hover:text-[#F2A700]",
                pathname === item.href && "text-[#F2A700]"
              )}
            >
              {item.label}
              {pathname === item.href ? (
                <span className="absolute -bottom-3 left-0 h-0.5 w-full rounded-full bg-[#F2A700]" />
              ) : null}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button variant="ghost" size="icon-lg" aria-label="Search">
            <Search />
          </Button>
          <Button variant="ghost" size="icon-lg" aria-label="Account">
            <UserRound />
          </Button>
          <Button
            variant="ghost"
            size="icon-lg"
            className="relative"
            aria-label="Cart"
          >
            <ShoppingCart />
            <span className="absolute -right-1 -top-1 grid size-5 place-items-center rounded-full bg-[#F2A700] text-[11px] font-bold text-white">
              0
            </span>
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon-lg"
          className="lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      {open ? (
        <div className="border-t border-[#F3D9A7] bg-[#FFF9F1] px-4 py-5 shadow-[0_20px_50px_rgba(255,198,165,0.28)] lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-3" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-full px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-[#5A354E]",
                  pathname === item.href
                    ? "bg-[#FFD65A] text-[#5A354E]"
                    : "bg-white/70"
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-2">
              <Button className="flex-1 rounded-full bg-[#FFD65A] text-[#5A354E] hover:bg-[#F2C647]">
                <Heart data-icon="inline-start" />
                Join the sunny list
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
