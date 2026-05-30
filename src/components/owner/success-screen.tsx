import Link from "next/link";
import Image from "next/image";
import { Sun } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SuccessScreen({
  onStartNewOrder,
}: {
  onStartNewOrder: () => void;
}) {
  return (
    <section className="relative flex min-h-[calc(100dvh-2rem)] items-end justify-center overflow-hidden rounded-[1.25rem] border border-[#F2D7A6] bg-[#FFF9F1] p-5">
      <Image
        src="/images/generated/blog-contact-flatlay.png"
        alt="Sunlit lemonade with flowers and fruit"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#FFF9F1]/80 via-transparent to-[#FFF9F1]/20" />
      <div className="relative mb-8 w-full max-w-2xl rounded-2xl border border-[#F2D7A6] bg-white/94 p-8 text-center shadow-[0_24px_80px_rgba(90,53,78,0.16)] backdrop-blur">
        <Sun className="mx-auto size-9 text-[#F7B500]" />
        <h1 className="mt-3 font-serif text-4xl font-bold text-[#8E478A]">Order Complete!</h1>
        <p className="mt-2 text-base font-bold text-[#3A3038]">
          Thank you for supporting Sunshine Sips.
        </p>
        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          <Button
            type="button"
            className="min-h-12 rounded-lg bg-[#FFD65A] font-extrabold text-[#5A354E] hover:bg-[#F2C647]"
            onClick={onStartNewOrder}
          >
            Start New Order
          </Button>
          <Link
            href="/owner/dashboard"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "min-h-12 rounded-lg border-[#DFA7CF] bg-white font-extrabold text-[#8E478A]"
            )}
          >
            Return To Dashboard
          </Link>
        </div>
      </div>
    </section>
  );
}
