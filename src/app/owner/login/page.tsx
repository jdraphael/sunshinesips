"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Lock, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OwnerBrandMark } from "@/components/owner/owner-brand-mark";

export default function OwnerLoginPage() {
  const router = useRouter();
  const [remember, setRemember] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (typeof window !== "undefined") {
      window.localStorage.setItem("sunshine-sips-owner-session", "lila");
      window.localStorage.setItem("sunshine-sips-owner-remember", String(remember));
    }
    router.push("/owner/dashboard");
  }

  return (
    <main className="min-h-dvh bg-[#FFF9F1] p-4 text-[#3A3038]">
      <section className="mx-auto grid min-h-[calc(100dvh-2rem)] max-w-6xl overflow-hidden rounded-[1.25rem] border border-[#F2D7A6] bg-white shadow-[0_24px_80px_rgba(90,53,78,0.12)] lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative hidden min-h-[520px] lg:block">
          <Image
            src="/images/generated/about-lifestyle.png"
            alt="Sunshine Sips lemonade stand in warm sunlight"
            fill
            sizes="50vw"
            className="object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3A3038]/20 to-transparent" />
        </div>
        <div className="flex items-center justify-center bg-[radial-gradient(circle_at_top_right,rgba(255,214,90,0.24),transparent_18rem),#FFF9F1] p-6 sm:p-10">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md rounded-[1.5rem] border border-[#F2D7A6] bg-white/82 p-7 text-center shadow-[0_20px_60px_rgba(255,198,165,0.22)] sm:p-9"
          >
            <div className="flex justify-center">
              <OwnerBrandMark href="/owner/login" />
            </div>
            <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.24em] text-[#8E478A]">
              Owner Portal
            </p>
            <h1 className="mt-8 text-2xl font-extrabold text-[#3A3038]">
              Welcome Back, Lila!
            </h1>
            <p className="mt-3 text-sm font-semibold text-[#6F5D67]">
              Log in to open your stand.
            </p>
            <label className="mt-7 flex min-h-13 items-center gap-3 rounded-lg border border-[#F2D7A6] bg-white px-4 text-left shadow-sm">
              <UserRound className="size-5 text-[#5A354E]" />
              <input
                name="username"
                defaultValue="lila"
                className="w-full bg-transparent text-sm font-bold outline-none"
                aria-label="Username"
              />
            </label>
            <label className="mt-4 flex min-h-13 items-center gap-3 rounded-lg border border-[#F2D7A6] bg-white px-4 text-left shadow-sm">
              <Lock className="size-5 text-[#5A354E]" />
              <input
                name="password"
                type="password"
                defaultValue="sunshine"
                className="w-full bg-transparent text-sm font-bold outline-none"
                aria-label="Password"
              />
            </label>
            <label className="mt-4 flex items-center gap-3 text-sm font-bold text-[#6F5D67]">
              <input
                type="checkbox"
                checked={remember}
                onChange={(event) => setRemember(event.target.checked)}
                className="size-4 rounded border-[#F2D7A6] accent-[#FFD65A]"
              />
              Remember me
            </label>
            <Button
              type="submit"
              className="mt-6 min-h-13 w-full rounded-lg bg-[#FFD65A] text-base font-extrabold text-[#5A354E] hover:bg-[#F2C647]"
            >
              Enter Stand
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
}
