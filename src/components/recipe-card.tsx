import Image from "next/image";
import { Clock, Sparkles } from "lucide-react";
import type { Recipe } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function RecipeCard({ recipe, tall = false }: { recipe: Recipe; tall?: boolean }) {
  return (
    <Card
      className={`break-inside-avoid rounded-[1.35rem] border border-[#F2D7A6] bg-white/90 p-0 shadow-[0_18px_50px_rgba(177,139,217,0.15)] transition-transform duration-300 hover:-translate-y-1 ${
        tall ? "md:mt-10" : ""
      }`}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-[1.35rem] bg-[#FFF3D0]">
        <Image
          src={recipe.image}
          alt={recipe.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 hover:scale-105"
          style={{ objectPosition: recipe.imagePosition ?? "center" }}
        />
      </div>
      <CardHeader>
        <div className="mb-2 flex flex-wrap gap-2">
          <Badge variant="secondary" className="bg-[#FFDCE5] text-[#8E478A]">
            {recipe.category}
          </Badge>
          <Badge variant="outline" className="border-[#FFD65A] bg-[#FFF9F1]">
            <Clock data-icon="inline-start" />
            {recipe.prepTime}
          </Badge>
        </div>
        <CardTitle className="font-serif text-2xl text-[#3A3038]">
          {recipe.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 pb-5">
        <p className="text-sm leading-6 text-[#6F5D67]">{recipe.description}</p>
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#FFF3D0] px-3 py-1 text-sm font-bold text-[#8D6500]">
          <Sparkles /> {recipe.difficulty}
        </span>
      </CardContent>
    </Card>
  );
}
