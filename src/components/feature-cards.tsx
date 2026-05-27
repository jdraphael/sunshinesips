import { features } from "@/lib/data";

export function FeatureCards() {
  return (
    <section className="bg-[#FFF3D0] py-12">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        {features.map(({ title, description, icon: Icon }) => (
          <article
            key={title}
            className="flex items-center gap-5 rounded-[1.5rem] bg-white/55 p-6 shadow-[0_18px_45px_rgba(255,198,165,0.18)]"
          >
            <span className="grid size-20 shrink-0 place-items-center rounded-full bg-white text-[#F2A700] shadow-md">
              <Icon className="size-9" />
            </span>
            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-[0.13em] text-[#3A3038]">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#5F515C]">{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
