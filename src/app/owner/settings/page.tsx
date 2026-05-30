import { OwnerLayout } from "@/components/owner/owner-layout";

export default function OwnerSettingsPage() {
  return (
    <OwnerLayout active="/owner/settings">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-[1.5rem] border border-[#F2D7A6] bg-white p-8 shadow-[0_16px_44px_rgba(90,53,78,0.07)]">
          <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#8E478A]">
            Stand Preferences
          </p>
          <h1 className="mt-2 font-serif text-4xl font-bold text-[#5A354E]">
            Settings
          </h1>
          <p className="mt-3 text-base font-medium leading-7 text-[#6F5D67]">
            This local-first owner portal is set up for Lyla&apos;s Sunshine Sips
            stand. Future settings can add tax rules, real payment connections,
            and receipt templates without changing the guided checkout flow.
          </p>
        </div>
      </div>
    </OwnerLayout>
  );
}
