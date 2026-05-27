import { Sparkles } from "lucide-react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto flex max-w-2xl flex-col items-center gap-3 text-center"
          : "flex max-w-2xl flex-col items-start gap-3 text-left"
      }
    >
      {eyebrow ? (
        <p className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#A16D00] ring-1 ring-[#FFD65A]/45">
          <Sparkles />
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-4xl font-semibold leading-tight text-[#5A354E] md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-8 text-[#6F5D67] md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
