"use client";

import { Package, ReceiptText, UsersRound } from "lucide-react";
import { OwnerLayout } from "@/components/owner/owner-layout";
import { HeroBanner } from "@/components/owner/hero-banner";
import { formatMoney } from "@/lib/owner/catalog";
import { useOwnerDashboardMetrics } from "@/lib/owner/use-owner-store";

export default function OwnerDashboardPage() {
  const { salesTotalCents, customers, productsRemaining } = useOwnerDashboardMetrics();

  return (
    <OwnerLayout active="/owner/dashboard">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-7">
          <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#8E478A]">
            Owner Portal
          </p>
          <h1 className="mt-2 font-serif text-4xl font-bold text-[#5A354E]">
            Good Morning, Lila
          </h1>
        </div>
        <HeroBanner
          title="Ready for today's customers?"
          description="Open the stand and guide each order like a cozy Sunshine Sips ritual."
          href="/owner/stand"
          action="Open Stand"
        />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            {
              label: "Today's Sales",
              value: formatMoney(salesTotalCents),
              icon: ReceiptText,
            },
            {
              label: "Customers Served",
              value: String(customers),
              icon: UsersRound,
            },
            {
              label: "Products Remaining",
              value: String(productsRemaining),
              icon: Package,
            },
          ].map((metric) => {
            const Icon = metric.icon;
            return (
              <article
                key={metric.label}
                className="rounded-[1.25rem] border border-[#F2D7A6] bg-white p-6 shadow-[0_16px_44px_rgba(90,53,78,0.07)]"
              >
                <div className="grid size-12 place-items-center rounded-full bg-[#FFF3D0] text-[#8E478A]">
                  <Icon className="size-6" />
                </div>
                <p className="mt-5 text-sm font-extrabold uppercase tracking-[0.12em] text-[#6F5D67]">
                  {metric.label}
                </p>
                <p className="mt-2 text-4xl font-extrabold text-[#3A3038]">{metric.value}</p>
              </article>
            );
          })}
        </div>
      </div>
    </OwnerLayout>
  );
}
