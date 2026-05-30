import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroBanner({
  title,
  description,
  href,
  action,
}: {
  title: string;
  description: string;
  href: string;
  action: string;
}) {
  return (
    <section className="relative overflow-hidden rounded-[1.5rem] border border-[#F2D7A6] bg-white shadow-[0_24px_70px_rgba(255,198,165,0.24)]">
      <div className="relative min-h-[320px]">
        <Image
          src="/images/generated/hero-lemonade.png"
          alt="Fresh lemonade with citrus and flowers"
          fill
          sizes="(max-width: 768px) 100vw, 70vw"
          className="object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFF9F1]/95 via-[#FFF9F1]/72 to-transparent" />
        <div className="relative z-10 flex min-h-[320px] max-w-xl flex-col justify-center p-7 sm:p-10">
          <h1 className="font-serif text-4xl font-bold leading-tight text-[#5A354E] sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-md text-lg font-medium leading-7 text-[#6F5D67]">
            {description}
          </p>
          <Link
            href={href}
            className={cn(
              buttonVariants(),
              "mt-7 min-h-12 w-fit rounded-full bg-[#FFD65A] px-8 text-base font-extrabold text-[#5A354E] hover:bg-[#F2C647]"
            )}
          >
            {action}
            <ArrowRight data-icon="inline-end" />
          </Link>
        </div>
      </div>
    </section>
  );
}
