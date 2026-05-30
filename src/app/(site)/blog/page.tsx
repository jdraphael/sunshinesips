import type { Metadata } from "next";
import { BlogCard } from "@/components/blog-card";
import { SectionHeading } from "@/components/section-heading";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read Sunshine Sips lifestyle notes about cozy rituals, lemonade brunches, and soft happy living.",
};

export default function BlogPage() {
  return (
    <section className="bg-[#FFF9F1] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Blog"
          title="A little sunshine for your saved folder."
          description="Cozy lifestyle notes, brunch ideas, gentle rituals, and drink inspiration with a soft pastel point of view."
        />
        <div className="mt-12 grid gap-7 md:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
