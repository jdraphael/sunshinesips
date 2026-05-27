"use client";

import { FormEvent, useState } from "react";
import { Heart, Mail, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;
    setSent(true);
    setEmail("");
  }

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#FFF3D0,#FFD65A_60%,#FFC6A5)] py-14">
      <div className="absolute left-8 top-8 text-white/70" aria-hidden="true">
        <Sun className="size-24" />
      </div>
      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 md:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div className="flex items-center gap-5">
          <span className="grid size-20 shrink-0 place-items-center rounded-full bg-white/80 text-[#F2A700] shadow-lg">
            <Heart className="fill-[#FFDCE5]" />
          </span>
          <div>
            <h2 className="font-serif text-3xl font-semibold text-[#5A354E]">
              Stay Connected
            </h2>
            <p className="mt-2 max-w-md leading-7 text-[#6B4D39]">
              Weekly recipes, cozy inspiration, and a little sunshine just for you.
            </p>
          </div>
        </div>
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-3 rounded-[1.25rem] bg-white/75 p-3 shadow-[0_18px_45px_rgba(122,74,50,0.12)] sm:flex-row"
        >
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>
          <Input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email address"
            className="h-14 rounded-full border-transparent bg-white px-5 text-base"
          />
          <Button
            type="submit"
            className="h-14 rounded-full bg-[#FFD65A] px-8 text-[#5A354E] hover:bg-[#F2C647]"
          >
            <Mail data-icon="inline-start" />
            Subscribe
          </Button>
        </form>
        {sent ? (
          <p className="md:col-start-2 rounded-full bg-white/75 px-5 py-3 text-sm font-semibold text-[#8E478A]">
            You are on the sunny list. No backend write was made in this v1 mockup.
          </p>
        ) : null}
      </div>
    </section>
  );
}
