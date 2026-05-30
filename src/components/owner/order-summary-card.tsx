import { CupSoda } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatMoney } from "@/lib/owner/catalog";

export function OrderSummaryCard({
  itemCount,
  totalCents,
  onReview,
}: {
  itemCount: number;
  totalCents: number;
  onReview: () => void;
}) {
  return (
    <aside className="sticky top-8 rounded-xl border border-[#F2D7A6] bg-white p-5 text-center shadow-[0_18px_50px_rgba(90,53,78,0.1)]">
      <div className="mx-auto -mt-9 grid size-14 place-items-center rounded-full bg-[#FFDCE5] text-[#8E478A] shadow-md">
        <CupSoda className="size-7" />
      </div>
      <p className="mt-4 text-sm font-bold text-[#3A3038]">Today&apos;s Order</p>
      <p className="mt-6 text-lg font-extrabold text-[#3A3038]">
        {itemCount} {itemCount === 1 ? "Item" : "Items"}
      </p>
      <p className="mt-2 text-3xl font-extrabold text-[#3A3038]">
        {formatMoney(totalCents)}
      </p>
      <Button
        type="button"
        className="mt-6 min-h-12 w-full rounded-lg bg-[#8E478A] font-extrabold text-white hover:bg-[#7C3B79]"
        disabled={itemCount === 0}
        onClick={onReview}
      >
        Review Order
      </Button>
    </aside>
  );
}
