import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Card className="rounded-[1.35rem] border border-[#F2D7A6] bg-white/88 p-0 shadow-[0_18px_50px_rgba(255,198,165,0.2)] transition-transform duration-300 hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-[1.35rem]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between gap-3">
          <Badge className="bg-[#FFD65A] text-[#5A354E]">{post.category}</Badge>
          <span className="text-sm font-semibold text-[#8E478A]">{post.readTime}</span>
        </div>
        <CardTitle className="font-serif text-2xl text-[#3A3038]">
          {post.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-5 pb-5">
        <p className="text-sm leading-6 text-[#6F5D67]">{post.excerpt}</p>
        <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-[#A16D00]">
          Read note <ArrowUpRight />
        </span>
      </CardContent>
    </Card>
  );
}
