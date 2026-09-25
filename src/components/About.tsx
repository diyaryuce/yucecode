import {
  ArrowRightIcon,
  MapPin,
  Code2,
  GraduationCap,
  ChartNoAxesColumnIncreasing,
} from "lucide-react";

import InfoCard from "./InfoCard";
import Reveal from "./Reveal";
import { translations } from "../translations";
import Typewriter from "./Typewriter";

type Trans = {
  t: typeof translations.en;
};

export default function About({ t }: Trans) {
  return (
    <section
      id="about"
      className="
        relative
        flex w-full
        px-5 py-12
        sm:px-8 sm:py-14
        lg:px-12 lg:py-16
        xl:px-20
      "
    >
      <Reveal>
        <div className="mx-auto w-full">
          <h1
            className="
              gold-gradient
              mb-10
              text-sm
              tracking-[0.2em]
              lg:text-lg
            "
          >
            {t.aboutMe.about}
          </h1>

          <div
            className="
              flex w-full
              flex-col
              gap-10

              lg:flex-row
              lg:items-center
              lg:gap-12

              xl:gap-20
            "
          >
            <div className="w-full">
              <h1
                className="
                  mb-5
                  text-[clamp(2rem,5vw,3rem)]
                  font-bold
                  leading-tight
                "
              >
                <Typewriter text="More than just code." speed={40} />
              </h1>

              <p
                className="
                  text-sm
                  leading-relaxed
                  text-[#9f9fa8]
                  sm:text-base
                "
              >
                I started coding because I was curious about how the websites
                and applications I used every day were built. Through
                experimenting, breaking things, and fixing them, that curiosity
                grew into a real interest in software development and turning
                ideas into something useful.
              </p>

              <p
                className="
                  mt-4
                  text-sm
                  leading-relaxed
                  text-[#9f9fa8]
                  sm:text-base
                  lg:mt-6
                "
              >
                As I learned more, I became interested in both the visual and
                technical sides of development. Frontend let me combine design
                with code, while backend, databases, and data engineering helped
                me understand what happens behind the interface and build more
                complete applications.
              </p>
            </div>

            <div
              className="
                grid w-full
                grid-cols-1
                gap-4
                ml-auto
                max-w-xs
                mx-auto

                sm:grid-cols-2

                lg:max-w-2xl
                lg:gap-5
              "
            >
              <InfoCard icon={<MapPin />} title={t.aboutMe.based}>
                <p>{t.aboutMe.loc}</p>
              </InfoCard>

              <InfoCard icon={<Code2 />} title={t.aboutMe.focus}>
                <div className="flex flex-col">
                  {t.aboutMe.focusList.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </InfoCard>

              <InfoCard icon={<GraduationCap />} title={t.aboutMe.currently}>
                <div className="flex flex-col">
                  {t.aboutMe.currentlyList.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </InfoCard>

              <InfoCard
                icon={<ChartNoAxesColumnIncreasing />}
                title={t.aboutMe.interest}
              >
                <div className="flex flex-col text-sm">
                  {t.aboutMe.interestList.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </InfoCard>
            </div>
          </div>

          <button
            commandFor="contact-dialog"
            command="show-modal"
            className="
              group
              mx-auto
              mt-12
              flex h-14
              w-full max-w-55
              cursor-pointer
              items-center justify-center
              rounded-xl
              px-6

              bg-[radial-gradient(50.42%_92.5%_at_50.42%_7.5%,#FFDFA7_0%,#E8BD70_100%)]

              transition duration-200
              hover:scale-[1.05]

              sm:w-55
            "
          >
            <span
              className="
                mr-auto
                text-lg
                font-semibold
                text-[#151515]
                sm:text-xl
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
        </div>
      </Reveal>
    </section>
  );
}
