import { ArrowRightIcon } from "lucide-react";

export default function ServiceCard({
  number,
  title,
  description,
  children,
}: ServiceCardProps) {
  return (
    <div
      className="
        group
        relative
        flex w-full
        flex-col

        rounded-xl
        border-2 border-[#E8BD70]/40
        bg-[#151515]

        px-5 py-6

        transition duration-300

        hover:-translate-y-1
        hover:scale-[1.02]
        hover:bg-[#191917]

        sm:px-7
        sm:py-8

        lg:w-1/2
        lg:flex-row
        lg:px-10
        lg:py-10
      "
    >
      <div className="flex min-w-0 flex-1 flex-col">
        <span
          className="
            gold-gradient
            text-sm
            tracking-[0.2em]
            sm:text-base
          "
        >
          {number}
        </span>

        <h1
          className="
            mt-6
            text-[clamp(1.75rem,3vw,2.25rem)]
            font-bold
            leading-tight

            sm:mt-8
          "
        >
          {title}
        </h1>

        <p
          className="
            mt-4
            max-w-md
            text-sm
            leading-relaxed
            text-[#9f9fa7]
            sm:text-base
          "
        >
          {description}
        </p>

        <div
          className="
            mt-7
            flex
            flex-wrap
            items-center
            gap-3

            sm:mt-8
            sm:gap-4
          "
        >
          {children}

          <span className="text-sm text-[#5b5e5e]">and more...</span>
        </div>
      </div>

      <button
        className="
          mt-7
          flex
          cursor-pointer
          items-center
          gap-2
          self-start

          text-[#5b5e5e]

          transition duration-200

          group-hover:text-[#E8BD70]

          lg:mt-0
          lg:ml-6
          lg:flex-col
          lg:items-end
          lg:justify-center
          lg:self-auto
        "
      >
        <span className="text-sm sm:text-base">See more...</span>

        <ArrowRightIcon
          size={26}
          className="
            transition duration-200
            group-hover:translate-x-2

            lg:mt-2
          "
        />
      </button>
    </div>
  );
}

type ServiceCardProps = {
  number: string;
  title: string;
  description: string;
  children: React.ReactNode;
};
