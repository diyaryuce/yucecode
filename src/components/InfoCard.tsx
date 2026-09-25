export default function InfoCard({ icon, title, children }: InfoCardProps) {
  return (
    <div
      className="
        group
        flex
        min-h-28
        w-full
        items-center
        gap-4

        rounded-xl
        border border-[#E8BD70]/40
        bg-[#151515]

        px-4 py-4

        transition duration-200

        hover:-translate-y-1
        hover:scale-[1.02]
        hover:bg-[#191917]

        sm:min-h-30
      "
    >
      <div
        className="
          shrink-0
          text-[#9f9fa8]

          transition duration-200

          group-hover:text-[#E8BD70]
        "
      >
        {icon}
      </div>

      <div className="min-w-0">
        <h2
          className="
            text-xs
            tracking-[0.2em]
            text-[#9f9fa8]

            transition duration-200

            group-hover:text-[#E8BD70]

            lg:text-sm
          "
        >
          {title}
        </h2>

        <div className="mt-1 text-sm sm:text-base">{children}</div>
      </div>
    </div>
  );
}

type InfoCardProps = {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
};
