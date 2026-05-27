export function WaveDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div className={flip ? "rotate-180" : ""} aria-hidden="true">
      <svg
        viewBox="0 0 1440 90"
        className="block h-8 w-full text-[#FFF9F1] md:h-10"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,42 C160,92 273,5 430,44 C583,82 687,22 840,44 C1009,69 1135,18 1297,42 C1360,51 1405,66 1440,76 L1440,90 L0,90 Z"
        />
      </svg>
    </div>
  );
}
