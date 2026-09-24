import {
  ArrowRightIcon,
  MapPin,
  Code2,
  GraduationCap,
  ChartNoAxesColumnIncreasing,
} from "lucide-react";
import Reveal from "./Reveal";
import { translations } from "../translations";

type Trans = {
  t: typeof translations.en;
};

export default function About({ t }: Trans) {
  return (
    <section
      id="about"
      className="
            relative flex
            px-5 py-10
            sm:px-8
            lg:px-20 lg:py-15
          "
    >
      <Reveal>
        <h1 className="gold-gradient mb-10 text-sm lg:text-lg tracking-[0.2em]">
          {t.aboutMe.about}
        </h1>

        <div
          className="
                flex
                w-full
                flex-col 
                lg:flex-row lg:gap-5
              "
        >
          <div className="mt-0 w-full lg:mt-5">
            <h1 className="mb-5 font-bold text-5xl">More than just code</h1>

            <p
              className="
                    text-sm sm:text-base lg:text-base
                    leading-relaxed
                    text-[#9f9fa8]
                  "
            >
              I started coding because I was curious about how the websites and
              applications I used every day were built. Through experimenting,
              breaking things, and fixing them, that curiosity grew into a real
              interest in software development and turning ideas into something
              useful.
            </p>

            <p
              className="
                    text-sm sm:text-base lg:text-base mt-2 lg:mt-6
                    leading-relaxed
                    text-[#9f9fa8]
                  "
            >
              As I learned more, I became interested in both the visual and
              technical sides of development. Frontend let me combine design
              with code, while backend, databases, and data engineering helped
              me understand what happens behind the interface and build more
              complete applications.
            </p>
          </div>

          <div className="flex flex-col gap-5 justify-center">
            <div className="flex gap-5">
              <div
                className="
                    w-80 h-30 group flex gap-4 items-center px-4 py-4 border 
                    border-[#E8BD70]/40 rounded-xl hover:scale-[1.02] hover:-translate-y-1 hover:bg-[#E8BD70]/2
                    transition duration-200
                    "
              >
                <MapPin className="text-[#9f9fa8] group-hover:text-[#E8BD70] transition duration-200" />

                <div>
                  <h1 className="text-[#9f9fa8] group-hover:text-[#E8BD70] text-xs lg:text-sm tracking-[0.2em] transition duration-200">
                    {t.aboutMe.based}
                  </h1>

                  <p className="mt-1">{t.aboutMe.loc}</p>
                </div>
              </div>

              <div
                className="
                    w-80 h-30 group flex gap-4 items-center px-4 py-4 border 
                    border-[#E8BD70]/40 rounded-xl hover:scale-[1.02] hover:-translate-y-1 hover:bg-[#E8BD70]/2
                    transition duration-200
                    "
              >
                <Code2 className="text-[#9f9fa8] group-hover:text-[#E8BD70] transition duration-200" />

                <div>
                  <h1 className="text-[#9f9fa8] group-hover:text-[#E8BD70] text-xs lg:text-sm tracking-[0.2em] transition duration-200">
                    {t.aboutMe.focus}
                  </h1>

                  <div className="flex flex-col mt-1">
                    {t.aboutMe.focusList.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-5">
              <div
                className="
                    w-80 h-30 group flex gap-4 items-center px-4 py-4 border 
                    border-[#E8BD70]/40 rounded-xl hover:scale-[1.02] hover:-translate-y-1 hover:bg-[#E8BD70]/2
                    transition duration-200
                    "
              >
                <GraduationCap className="text-[#9f9fa8] group-hover:text-[#E8BD70] transition duration-200" />

                <div>
                  <h1 className="text-[#9f9fa8] group-hover:text-[#E8BD70] text-xs lg:text-sm tracking-[0.2em] transition duration-200">
                    {t.aboutMe.currently}
                  </h1>

                  <div className="flex flex-col mt-1">
                    {t.aboutMe.currentlyList.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div
                className="
                    w-80 h-30 group flex gap-4 items-center px-4 py-4 border 
                    border-[#E8BD70]/40 rounded-xl hover:scale-[1.02] hover:-translate-y-1 hover:bg-[#E8BD70]/2
                    transition duration-200
                    "
              >
                <ChartNoAxesColumnIncreasing className="text-[#9f9fa8] group-hover:text-[#E8BD70] transition duration-200" />

                <div>
                  <h1 className="text-[#9f9fa8] group-hover:text-[#E8BD70] text-xs lg:text-sm tracking-[0.2em] transition duration-200">
                    {t.aboutMe.interest}
                  </h1>

                  <div className="flex flex-col mt-1 text-sm">
                    {t.aboutMe.interestList.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          commandFor="contact-dialog"
          command="show-modal"
          className="
                    group mt-12 lg:mt-10
                    flex h-14 w-55 px-6
                    cursor-pointer
                    items-center justify-center
                    rounded-xl mx-auto
                    hover:scale-[1.05] transition duration-200
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
            {t.aboutMe.touch}
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
      </Reveal>
    </section>
  );
}
