"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { RecipeCard } from "@/components/recipe-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { recipes } from "@/lib/data";

const categories = ["All", "Lemonade", "Smoothies", "Cozy", "Seasonal", "Bakery"];

export function RecipesExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    return recipes.filter((recipe) => {
      const matchesCategory = category === "All" || recipe.category === category;
      const matchesQuery =
        recipe.title.toLowerCase().includes(query.toLowerCase()) ||
        recipe.description.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <div className="flex flex-col gap-10">
      <div className="rounded-[1.5rem] bg-white/82 p-4 shadow-[0_18px_50px_rgba(255,198,165,0.18)] ring-1 ring-[#F2D7A6]">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <label className="relative block flex-1" htmlFor="recipe-search">
            <span className="sr-only">Search recipes</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#8E478A]" />
            <Input
              id="recipe-search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search lemonade, smoothies, cozy drinks..."
              className="h-14 rounded-full border-[#F2D7A6] bg-[#FFF9F1] pl-12 text-base"
            />
          </label>
          <div className="flex flex-wrap gap-2">
            {categories.map((item) => (
              <Button
                key={item}
                type="button"
                variant={category === item ? "default" : "outline"}
                className={
                  category === item
                    ? "rounded-full bg-[#FFD65A] text-[#5A354E] hover:bg-[#F2C647]"
                    : "rounded-full border-[#F2D7A6] bg-white text-[#5A354E]"
                }
                onClick={() => setCategory(item)}
              >
                {item}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="masonry">
        {filtered.map((recipe, index) => (
          <div key={recipe.id} className="mb-6">
            <RecipeCard recipe={recipe} tall={index % 2 === 1} />
          </div>
        ))}
      </div>
    </div>
  );
}
