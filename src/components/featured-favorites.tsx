import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { favoriteProducts } from "@/lib/data";

export function FeaturedFavorites() {
  return (
    <section className="bg-[#FFF9F1] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Featured Favorites"
          description="Bright little things for happy rituals, cozy tables, and lemon-sweet afternoons."
        />
        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {favoriteProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
