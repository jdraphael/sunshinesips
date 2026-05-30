import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OwnerBrandMark } from "@/components/owner/owner-brand-mark";
import { cn } from "@/lib/utils";

export function ProgressHeader({
  step,
  total = 6,
  onBack,
  canGoBack = true,
}: {
  step: number;
  total?: number;
  onBack?: () => void;
  canGoBack?: boolean;
}) {
  return (
    <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <Button
          type="button"
          variant="ghost"
          size="icon-lg"
          className="rounded-full text-[#5A354E]"
          onClick={onBack}
          disabled={!canGoBack}
          aria-label="Back"
        >
          <ArrowLeft />
        </Button>
        <p className="text-sm font-extrabold text-[#3A3038]">
          Step {step} of {total}
        </p>
      </div>
      <div className="hidden min-w-64 flex-1 items-center justify-center gap-3 sm:flex">
        {Array.from({ length: total }).map((_, index) => {
          const active = index + 1 <= step;
          return (
            <span
              key={index}
              className={cn(
                "h-2 w-2 rounded-full border border-[#E9D5B4]",
                active ? "bg-[#F7B500]" : "bg-[#FFF9F1]"
              )}
            />
          );
        })}
      </div>
      <OwnerBrandMark compact />
    </div>
  );
}
