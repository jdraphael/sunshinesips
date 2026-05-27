import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Sparkles } from "lucide-react";
import { FeatureCards } from "@/components/feature-cards";
import { FeaturedFavorites } from "@/components/featured-favorites";
import { HeroSection } from "@/components/hero-section";
import { NewsletterSignup } from "@/components/newsletter-signup";
import { SectionHeading } from "@/components/section-heading";
import { WaveDivider } from "@/components/wave-divider";
import { BlogCard } from "@/components/blog-card";
import { buttonVariants } from "@/components/ui/button";
import { blogPosts } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WaveDivider />
      <FeatureCards />
      <FeaturedFavorites />
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div className="relative min-h-[440px] overflow-hidden rounded-[2rem] shadow-[0_28px_80px_rgba(177,139,217,0.22)]">
            <Image
              src="/images/generated/about-lifestyle.png"
              alt="Cozy Sunshine Sips lifestyle setup"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-6">
            <SectionHeading
              align="left"
              eyebrow="A sunny little ritual"
              title="Made for slow mornings and happy afternoons."
              description="Sunshine Sips blends cafe-style drinks, cheerful recipes, and cozy lifestyle inspiration into a soft corner of the internet."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {["Lemon-bright recipes", "Kindness-first content"].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.25rem] bg-[#FFF9F1] p-5 text-[#5A354E] ring-1 ring-[#F2D7A6]"
                >
                  <Heart className="mb-3 fill-[#FFDCE5] text-[#FF8EA8]" />
                  <p className="font-bold">{item}</p>
                </div>
              ))}
            </div>
            <Link
              href="/about"
              className={cn(
                buttonVariants(),
                "w-fit rounded-full bg-[#B18BD9] px-7 text-white hover:bg-[#9D74C8]"
              )}
            >
              Our Story <ArrowRight data-icon="inline-end" />
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-[#FFF9F1] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="From the journal"
            title="Little Notes of Sunshine"
            description="Soft lifestyle ideas, hosting moments, and cozy drink rituals for bright everyday living."
          />
          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              href="/blog"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "rounded-full border-[#FFD65A] bg-white px-7 text-[#5A354E]"
              )}
            >
              Read the Blog <Sparkles data-icon="inline-end" />
            </Link>
          </div>
        </div>
      </section>
      <NewsletterSignup />
    </>
  );
}
