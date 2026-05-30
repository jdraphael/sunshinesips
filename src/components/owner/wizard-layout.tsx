import { ProgressHeader } from "@/components/owner/progress-header";
import { cn } from "@/lib/utils";

export function WizardLayout({
  step,
  title,
  subtitle,
  children,
  onBack,
  canGoBack = true,
  fullBleed = false,
}: {
  step: number;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  onBack?: () => void;
  canGoBack?: boolean;
  fullBleed?: boolean;
}) {
  return (
    <section className="min-h-dvh bg-[#FFF9F1] p-3 text-[#3A3038] sm:p-5 lg:p-6">
      <div
        className={cn(
          "mx-auto min-h-[calc(100dvh-2rem)] max-w-7xl rounded-[1.25rem] border border-[#F2D7A6] bg-[radial-gradient(circle_at_top_left,rgba(255,220,229,0.42),transparent_24rem),#FFF9F1] p-5 shadow-[0_24px_80px_rgba(90,53,78,0.08)] sm:p-7",
          fullBleed && "overflow-hidden p-0 sm:p-0"
        )}
      >
        {fullBleed ? (
          children
        ) : (
          <>
            <ProgressHeader
              step={step}
              onBack={onBack}
              canGoBack={canGoBack}
            />
            <div className="mb-7">
              <h1 className="font-serif text-3xl font-bold leading-tight text-[#5A354E] sm:text-4xl">
                {title}
              </h1>
              <p className="mt-2 text-base font-medium text-[#6F5D67]">{subtitle}</p>
            </div>
            {children}
          </>
        )}
      </div>
    </section>
  );
}
