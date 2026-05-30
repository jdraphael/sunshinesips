import type { Metadata } from "next";
import { RecipesExplorer } from "@/components/recipes-explorer";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Recipes",
  description:
    "Browse Sunshine Sips lemonade recipes, smoothies, cozy seasonal drinks, and bright citrus inspiration.",
};

export default function RecipesPage() {
  return (
    <section className="bg-[#FFF9F1] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Recipes"
          title="Pinterest-worthy sips for every mood."
          description="Search bright lemonades, creamy smoothies, cozy citrus drinks, and sunny bakery pairings."
        />
        <div className="mt-12">
          <RecipesExplorer />
        </div>
      </div>
    </section>
  );
}
