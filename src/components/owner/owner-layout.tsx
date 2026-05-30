import Link from "next/link";
import { ArrowLeft, ClipboardList, Package, Settings, Store } from "lucide-react";
import { OwnerBrandMark } from "@/components/owner/owner-brand-mark";
import { cn } from "@/lib/utils";

const ownerNav = [
  { href: "/owner/dashboard", label: "Dashboard", icon: Store },
  { href: "/owner/stand", label: "Stand", icon: ClipboardList },
  { href: "/owner/inventory", label: "Inventory", icon: Package },
  { href: "/owner/settings", label: "Settings", icon: Settings },
];

export function OwnerLayout({
  children,
  active,
  backHref,
}: {
  children: React.ReactNode;
  active?: string;
  backHref?: string;
}) {
  return (
    <div className="min-h-dvh bg-[#FFF9F1] text-[#3A3038]">
      <header className="sticky top-0 z-40 border-b border-[#F2D7A6] bg-[#FFF9F1]/92 backdrop-blur-xl">
        <div className="mx-auto flex min-h-20 max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            {backHref ? (
              <Link
                href={backHref}
                className="grid size-10 place-items-center rounded-full border border-[#F2D7A6] bg-white text-[#5A354E] shadow-sm"
                aria-label="Go back"
              >
                <ArrowLeft className="size-5" />
              </Link>
            ) : null}
            <OwnerBrandMark compact />
          </div>
          <nav className="flex flex-wrap gap-2" aria-label="Owner navigation">
            {ownerNav.map((item) => {
              const Icon = item.icon;
              const selected = active === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "inline-flex min-h-10 items-center gap-2 rounded-full border px-4 text-sm font-bold transition",
                    selected
                      ? "border-[#FFD65A] bg-[#FFD65A] text-[#5A354E]"
                      : "border-[#F2D7A6] bg-white/80 text-[#5A354E] hover:bg-[#FFF3D0]"
                  )}
                >
                  <Icon className="size-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
