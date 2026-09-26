import { ArrowDownIcon, ArrowRightIcon } from "lucide-react";
import { translations } from "../translations";
import Reveal from "./Reveal";
import Typewriter from "./Typewriter";

type Trans = {
  t: typeof translations.en;
};

export default function Hero({ t }: Trans) {
  return (
    <section
      id="hero"
      className="
            relative flex min-h-screen flex-col
            items-center justify-center
            overflow-hidden w-full
            px-5 sm:px-8 lg:px-10 xl:px-20
          "
    >
      <Reveal>
        <div
          className="
                relative z-20
                flex max-w-xl flex-col mx-auto
                items-center justify-center
              "
        >
          <h2 className="mb-2 text-lg sm:text-xl lg:text-2xl">
            {t.hero.intro}
          </h2>

          <h1
            className="
                  gold-gradient
                  text-[clamp(2.5rem,10vw,3.75rem)]
                  font-bold
                  leading-tight
                  lg:text-6xl
                "
          >
            <Typewriter text="A. Diyar Yüce" speed={100} />
          </h1>

          <p
            className="
                  mt-4 text-center
                  text-lg sm:text-xl lg:text-2xl
                  font-semibold
                "
          >
            {t.hero.desc}
          </p>

          <div
            className="
                  mt-5 flex justify-center items-center
                  flex-col sm:flex-row
                  gap-4 sm:gap-6 lg:gap-10
                  sm:mt-8 lg:mt-10
                "
          >
            <button
              commandFor="contact-dialog"
              command="show-modal"
              className="
                    group flex
                    px-6 h-14 w-55
                    cursor-pointer
                    items-center justify-center
                    gap-3 rounded-xl
                    hover:scale-[1.05] active:scale-[1.10] transition duration-200
                    bg-[radial-gradient(50.42%_92.5%_at_50.42%_7.5%,#FFDFA7_0%,#E8BD70_100%)]
                  "
            >
              <span
                className="
                      mr-auto
                      text-xl font-semibold
                      text-[#151515]
                    "
              >
                {t.hero.connect}
              </span>

              <ArrowRightIcon
                size={22}
                className="
                      text-[#151515]
                      transition duration-200
                      group-hover:translate-x-2
                    "
              />
            </button>

            <a
              href="#about"
              className="
                    group flex items-center lg:gap-0 gap-5.75 justify-center border-2
                    mt-3 lg:mt-0 rounded-xl px-4 h-14 w-50 lg:w-45
                    hover:scale-[1.05] active:scale-[1.05] transition duration-200

                    border-white/10 bg-[#151515]/80 hover:text-[#E8BD70] backdrop-blur-lg
                  "
              onClick={(e) => {
                e.preventDefault();

                document.getElementById("about")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              <span
                className="
                      text-base lg:text-lg
                      transition duration-200
                      group-hover:scale-[1.01]
                      group-hover:text-[#E8BD70]
                    "
              >
                {t.hero.moreAbout}
              </span>

              <ArrowDownIcon
                size={18}
                className="
                  sm:hidden block 
                "
              />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
