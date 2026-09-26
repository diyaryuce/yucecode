import type { translations } from "../translations";

type Navs = {
  name: keyof typeof translations.no.nav;
  id: string;
  t: typeof translations.no;
};

export default function NavOptions({ name, id, t }: Navs) {
  if (name === "contact") {
    return (
      <button
        commandFor="contact-dialog"
        command="show-modal"
        className="
          text-sm sm:text-xl
          cursor-pointer
          transition duration-200
          hover:scale-105
          hover:-translate-y-1
          hover:text-[#E8BD70]
        "
      >
        {t.nav.contact}
      </button>
    );
  }

  return (
    <a
      href={`#${id}`}
      onClick={(e) => {
        e.preventDefault();

        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
        });
      }}
      className="
                text-sm sm:text-xl
                transition duration-200
                hover:scale-105
                hover:-translate-y-1
                hover:text-[#E8BD70]
              "
    >
      {t.nav[name]}
    </a>
  );
}
