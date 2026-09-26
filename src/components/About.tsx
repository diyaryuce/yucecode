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

type AboutProps = {
  t: typeof translations.en;
};

export default function About({ t }: AboutProps) {
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
              mb-5 lg:mb-8
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
                <Typewriter text={t.aboutMe.heading} speed={40} />
              </h1>

              <p
                className="
                  text-sm
                  leading-relaxed
                  text-[#9f9fa8]
                  sm:text-base
                "
              >
                {t.aboutMe.para1}
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
                {t.aboutMe.para2}
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
