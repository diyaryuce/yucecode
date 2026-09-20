import { MailPlusIcon, Copy } from "lucide-react";
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
        <nav
          className="
            fixed top-0 left-1/2 z-50
            -translate-x-1/2
            mt-3 sm:mt-4
            flex items-center justify-center
            w-[95%] sm:w-fit
            px-2 sm:px-5
            py-3 sm:py-5
            bg-transparent
          "
        >
          <button
            onClick={toggleLanguage}
            className="
            flex h-8 lg:h-10 lg:min-w-10 
            items-center justify-center px-2.5 rounded-lg cursor-pointer text-xs lg:text-sm font-semibold 
            transition duration-300
            border border-[#403f3e] bg-[#202020] hover:text-[#E8BD70] tracking-wide
            "
          >
            {language === "no" ? "EN" : "NO"}
          </button>

          <nav
            className={`
              font-outfit
              flex items-center
              gap-2 sm:gap-4
              px-3 sm:px-4
              py-2
              rounded-xl
              transition duration-300

              ${
                atTop
                  ? "bg-transparent border-transparent ml-2 mr-3 lg:ml-4 lg:mr-5"
                  : "bg-[#151515]/80 backdrop-blur-lg border rounded-xl border-white/10 ml-1.75 mr-2.75 lg:ml-3.75 lg:mr-4.75"
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
                text-sm sm:text-xl
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

          <div className="hidden sm:block">
            <EmailButton />
          </div>
        </nav>
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

  return (
    <div className="relative flex items-center">
      <button
        onClick={copyEmail}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        className="
          group relative
          h-10 w-10
          cursor-pointer
        "
      >
        <div
          className="
            absolute left-0 top-0
            h-10 w-10
            rounded-lg
            border border-[#403f3e]
            bg-[#202020]
            shrink-0
            whitespace-nowrap
            transition-[width]
            duration-300
            ease-in-out
            group-hover:w-[255px]
          "
        >
          <MailPlusIcon
            size={18}
            className="
              absolute left-2.5 top-1/2
              -translate-y-1/2
              group-hover:text-[#E8BD70]
              transition duration-300
            "
          />

          <span
            className="
              pointer-events-none
              absolute left-10 top-1/2
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

          <Copy
            size={18}
            className="
              pointer-events-none
              absolute left-55.5 top-1/2
              -translate-y-1/2
              whitespace-nowrap
              opacity-0
              transition-opacity
              duration-200
              group-hover:opacity-100
              text-[#E8BD70]
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
