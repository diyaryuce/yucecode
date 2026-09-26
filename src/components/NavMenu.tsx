import { type LucideIcon } from "lucide-react";
import type { translations } from "../translations";

type Navs = {
  name: keyof typeof translations.no.nav;
  id: string;
  t: typeof translations.no;
  icon: LucideIcon;
};

export default function NavMenu({ name, id, t, icon: Icon }: Navs) {
  if (name === "contact") {
    return (
      <div
        className="
          flex text-xl justify-center items-center w-full bg-[#151515]
          border-2 border-[#404040] rounded-2xl gap-4
          transition active:scale-[1.10]
        "
      >
        <Icon />

        <button
          commandFor="contact-dialog"
          command="show-modal"
          className="
        "
        >
          {t.nav.contact}
        </button>
      </div>
    );
  }

  return (
    <div
      className="flex text-xl justify-center items-center w-full bg-[#151515]
        border-2 border-[#404040] rounded-2xl gap-4
        transition active:scale-[1.05]
      "
    >
      <Icon />

      <a
        href={`#${id}`}
        onClick={(e) => {
          e.preventDefault();

          document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        className="
      "
      >
        {t.nav[name]}
      </a>
    </div>
  );
}
