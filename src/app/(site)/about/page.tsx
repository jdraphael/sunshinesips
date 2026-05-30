import type { Metadata } from "next";
import Image from "next/image";
import { Heart, Leaf, Sparkles, Sun } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn why Sunshine Sips exists and how the brand blends cozy drinks, kindness, and bright lifestyle inspiration.",
};

const values = [
  { title: "Make ordinary days softer", icon: Heart },
  { title: "Share recipes that feel doable", icon: Leaf },
  { title: "Celebrate bright little moments", icon: Sun },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#FFF9F1] py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title="Why Sunshine Sips Exists"
              description="Sunshine Sips began as a small idea: make the day feel brighter with one cozy drink, one kind thought, and one beautiful little ritual at a time."
            />
            <p className="mt-6 text-lg leading-8 text-[#6F5D67]">
              The brand blends lemonade stand optimism with modern lifestyle
              warmth. It is for slow brunches, pastel mugs, handwritten recipe
              notes, porch sunlight, and people who believe sweetness can still
              feel elevated.
            </p>
          </div>
          <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] shadow-[0_28px_80px_rgba(177,139,217,0.22)]">
            <Image
              src="/images/generated/about-lifestyle.png"
              alt="Cozy Sunshine Sips brand story scene"
              fill
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="object-cover"
              loading="eager"
            />
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {values.map(({ title, icon: Icon }) => (
              <article
                key={title}
                className="rounded-[1.5rem] bg-[#FFF9F1] p-8 text-center shadow-[0_18px_50px_rgba(255,198,165,0.16)] ring-1 ring-[#F2D7A6]"
              >
                <span className="mx-auto mb-5 grid size-20 place-items-center rounded-full bg-white text-[#F2A700]">
                  <Icon className="size-9" />
                </span>
                <h2 className="font-serif text-2xl font-semibold text-[#5A354E]">
                  {title}
                </h2>
              </article>
            ))}
          </div>
          <div className="mt-16 rounded-[2rem] bg-[#FFDCE5] p-8 text-center md:p-12">
            <Sparkles className="mx-auto mb-4 text-[#8E478A]" />
            <h2 className="font-serif text-4xl font-semibold text-[#5A354E]">
              Our mission is simple: good sips, bright days, happy hearts.
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}
