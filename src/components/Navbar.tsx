import { MailPlusIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { translations } from "../translations";

type Language = "no" | "en";

type Trans = {
  t: typeof translations.no;
  language: Language;
  toggleLanguage: () => void;
};

export default function Navbar({ t, language, toggleLanguage }: Trans) {
  const [atTop, setAtTop] = useState(true);

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
              flex items-center
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
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();

                document.getElementById("hero")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="
                text-sm lg:text-xl
                transition duration-200
                hover:scale-105
                hover:-translate-y-1
                hover:text-[#E8BD70]
              "
            >
              {t.nav.home}
            </a>

            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();

                document.getElementById("services")?.scrollIntoView({
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
              {t.nav.service}
            </a>

            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();

                document.getElementById("about")?.scrollIntoView({
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
              {t.nav.about}
            </a>

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
          </nav>

          <div
            className="
              fixed
              top-3 sm:top-4
              left-5 sm:left-8 lg:left-12
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

            <div className="hidden sm:block">
              <EmailButton />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

function EmailButton() {
  const email = "yucecontact@gmail.com";

  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  const [hovering, setHovering] = useState(false);
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    await navigator.clipboard.writeText(email);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  }

  function handleMouseMove(e: React.MouseEvent<HTMLButtonElement>) {
    const rect = e.currentTarget.getBoundingClientRect();

    setMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }

  // flex h-8 lg:h-11 lg:min-w-10 px-3 sm:px-4 py-2 group
  //           items-center justify-center rounded-xl cursor-pointer text-sm lg:text-base font-semibold
  //           border border-white/10 bg-[#151515]/80 hover:text-[#E8BD70] backdrop-blur-lg tracking-wide

  return (
    <div className="relative flex items-center justify-center">
      <button
        onClick={copyEmail}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        className="
          group relative
          h-11 w-13
          cursor-pointer
        "
      >
        <div
          className="
            absolute left-0 top-0
            h-12 w-14
            rounded-3xl
            border border-white/10 bg-[#151515]/80 backdrop-blur-lg
            shrink-0
            whitespace-nowrap
            transition-all
            duration-300
            ease-in-out
            group-hover:w-[240px]
          "
        >
          <span
            className="
              pointer-events-none
              absolute left-12 top-1/2
              -translate-y-1/2
              whitespace-nowrap
              opacity-0
              transition-opacity
              duration-200
              group-hover:opacity-100
              font-outfit
            "
          >
            {email}
          </span>

          <MailPlusIcon
            size={22}
            className="
              absolute left-4 top-1/2
              -translate-y-1/2
              group-hover:text-[#E8BD70]
              transition duration-300
            "
          />

          {hovering && (
            <div
              className="
                pointer-events-none
                absolute
                shrink-0
                whitespace-nowrap
                rounded-lg
                bg-[#2b2b2b]
                px-3 py-2
                text-sm
                text-white
                shadow-lg
              "
              style={{
                left: mouse.x,
                top: mouse.y,
                transform: "translate(12px, 12px)",
              }}
            >
              {copied ? "Copied!" : "Copy email"}
            </div>
          )}
        </div>
      </button>
    </div>
  );
}
