import type { Metadata } from "next";
import Image from "next/image";
import { Camera, Mail, MessageCircleHeart } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Sunshine Sips for partnerships, recipe questions, product ideas, and cozy brand collaborations.",
};

export default function ContactPage() {
  return (
    <section className="bg-[#FFF9F1] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Send a little sunshine our way."
          description="Questions, collaborations, recipe ideas, and happy notes are welcome here."
        />
        <div className="mt-12 grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="flex flex-col gap-6">
            <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] shadow-[0_28px_80px_rgba(255,198,165,0.28)]">
              <Image
                src="/images/generated/blog-contact-flatlay.png"
                alt="Pastel Sunshine Sips contact flat lay"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
                loading="eager"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.25rem] bg-white/88 p-5 ring-1 ring-[#F2D7A6]">
                <Mail className="mb-3 text-[#F2A700]" />
                <p className="font-bold text-[#5A354E]">hello@sunshinesips.co</p>
              </div>
              <div className="rounded-[1.25rem] bg-white/88 p-5 ring-1 ring-[#F2D7A6]">
                <Camera className="mb-3 text-[#8E478A]" />
                <p className="font-bold text-[#5A354E]">@sunshinesips</p>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
        <div className="mt-16">
          <h2 className="mb-6 flex items-center justify-center gap-3 font-serif text-4xl font-semibold text-[#5A354E]">
            <MessageCircleHeart /> FAQ
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-[1.5rem] bg-white/88 p-6 ring-1 ring-[#F2D7A6]"
              >
                <h3 className="font-serif text-xl font-semibold text-[#5A354E]">
                  {faq.question}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#6F5D67]">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
