"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[1.5rem] bg-white/88 p-6 shadow-[0_18px_50px_rgba(255,198,165,0.22)] ring-1 ring-[#F2D7A6]"
    >
      <div className="grid gap-5">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required className="h-12 rounded-full bg-[#FFF9F1]" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            className="h-12 rounded-full bg-[#FFF9F1]"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            required
            rows={6}
            className="rounded-[1rem] bg-[#FFF9F1]"
            placeholder="Tell us what sunshine you are dreaming up..."
          />
        </div>
        <Button
          type="submit"
          className="h-12 rounded-full bg-[#FFD65A] text-[#5A354E] hover:bg-[#F2C647]"
        >
          <Send data-icon="inline-start" />
          Send Message
        </Button>
        {sent ? (
          <p className="rounded-full bg-[#FFF3D0] px-4 py-3 text-sm font-semibold text-[#8E478A]">
            Message staged locally. This v1 contact form does not write to Supabase yet.
          </p>
        ) : null}
      </div>
    </form>
  );
}
