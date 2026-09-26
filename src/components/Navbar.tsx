import { Menu } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { translations } from "../translations";
import EmailButton from "./EmailButton";
import MenuDropdown from "./MenuDropdown";
import NavOptions from "./NavOptions";

type Language = "en" | "no";

type Trans = {
  t: typeof translations.no;
  language: Language;
  toggleLanguage: () => void;
};

export default function Navbar({ t, language, toggleLanguage }: Trans) {
  const [atTop, setAtTop] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.scrollY === 0);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-transparent">
        <div className="relative mt-3 w-full sm:mt-4">
          <nav
            className={`
              fixed
              left-1/2
              top-3 sm:top-4
              z-50
              -translate-x-1/2

              font-outfit
              md:flex items-center hidden
              gap-2 sm:gap-6
              px-3 sm:px-6
              py-3

              transition duration-300

              ${
                atTop
                  ? "bg-transparent border-transparent"
                  : "bg-[#151515]/80 backdrop-blur-lg border rounded-3xl border-white/10"
              }
            `}
          >
            <NavOptions name="home" id="hero" t={t} />

            <NavOptions name="service" id="services" t={t} />

            <NavOptions name="about" id="about" t={t} />

            <NavOptions name="contact" id="contact" t={t} />
          </nav>

          <div
            className="
              fixed
              top-3 sm:top-4
              right-5
              left-auto

              lg:right-auto
              lg:left-12
              z-50
              flex items-center justify-center
            "
          >
            <button
              onClick={toggleLanguage}
              className="
            h-9.5 lg:h-12 w-11 lg:w-14 group mr-4 mt-0.5
            hover:scale-[1.05] transition duration-200
            rounded-3xl cursor-pointer text-xs lg:text-base font-semibold 
            border border-white/10 bg-[#151515]/80 hover:text-[#E8BD70] backdrop-blur-lg tracking-wide
            "
            >
              <span className="leading-none">
                {language === "en" ? "NO" : "EN"}
              </span>
            </button>

            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setDropdownOpen((current) => !current)}
                className="
                h-9.5 w-11 mr-2 mt-0.5 rounded-3xl
                border border-white/10
                flex justify-center items-center md:hidden
              "
              >
                <Menu size={20} />
              </button>

              <MenuDropdown t={t} dropdownOpen={dropdownOpen} />
            </div>

            <div className="hidden md:block">
              <EmailButton />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
