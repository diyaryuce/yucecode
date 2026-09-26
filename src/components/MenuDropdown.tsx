import type { translations } from "../translations";
import NavMenu from "./NavMenu";
import { House, Layers3, UserRound, Mail } from "lucide-react";

type MenuDropdownProps = {
  t: typeof translations.no;
  dropdownOpen: boolean;
};

export default function MenuDropdown({ t, dropdownOpen }: MenuDropdownProps) {
  return (
    <nav
      className={`
        absolute right-8 top-10 w-85 h-75
        grid lg:hidden lg:pointer-events-none 
        rounded-xl bg-transparent p-4 font-outfit gap-3
        backdrop-blur-3xl

        transition duration-200 ease-in-out
        ${
          dropdownOpen
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
        }
      `}
    >
      <NavMenu name="home" id="hero" t={t} icon={House} />

      <NavMenu name="service" id="services" t={t} icon={Layers3} />

      <NavMenu name="about" id="about" t={t} icon={UserRound} />

      <NavMenu name="contact" id="contact" t={t} icon={Mail} />
    </nav>
  );
}
