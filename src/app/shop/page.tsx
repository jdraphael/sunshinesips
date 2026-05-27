import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { ShopStorefront } from "@/components/shop-storefront";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Explore Sunshine Sips mock storefront products including mugs, hoodies, journals, stickers, candles, and recipe ebooks.",
};

export default function ShopPage() {
  return (
    <section className="bg-[#FFF9F1] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Shop"
          title="Sweet finds for your sunny rituals."
          description="A lightweight ecommerce-ready storefront with mock cart and wishlist interactions for future checkout."
        />
        <div className="mt-12">
          <ShopStorefront />
        </div>
      </div>
    </section>
  );
}
