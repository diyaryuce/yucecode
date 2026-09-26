import ServiceCard from "./ServiceCard";
import Reveal from "./Reveal";
import { translations } from "../translations";
import Tech from "./Tech";
import Typewriter from "./Typewriter";

type Trans = {
  t: typeof translations.en;
};

export default function Services({ t }: Trans) {
  return (
    <section
      id="services"
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
            {t.services.title}
          </h1>

          <div
            className="
              flex
              flex-col
              gap-6

              lg:flex-row
              lg:items-center
            "
          >
            <div className="flex max-w-5xl flex-col gap-4">
              <h1
                className="
                  text-[clamp(1.75rem,5vw,3rem)]
                  font-bold
                  leading-tight
                "
              >
                <Typewriter text={t.services.heading} speed={40} />
              </h1>

              <p
                className="
                  max-w-2xl
                  text-sm
                  leading-relaxed
                  text-[#9f9fa7]
                  sm:text-base
                  lg:text-lg
                "
              >
                {t.services.intro}
              </p>
            </div>

            <ul
              className="
                text-sm
                leading-relaxed
                text-[#E8BD70]
                flex lg:flex-col
                gap-5 lg:gap-0
                justify-center

                sm:text-base

                lg:ml-auto
                lg:text-lg
              "
            >
              {t.services.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div
            className="
              mt-10
              flex w-full
              flex-col
              gap-5

              sm:mt-12

              lg:mt-15
              lg:flex-row
              lg:gap-8
            "
          >
            <ServiceCard
              number="01"
              title={t.services.frontendTitle}
              description={t.services.frontendText}
              t={t}
            >
              <Tech image="/img/react.png" name="React" />
              <Tech image="/img/javascript.png" name="Javascript" />
              <Tech image="/img/typescript.png" name="Typescript" hidden />
              <Tech image="/img/tailwind.png" name="Tailwind" />
              <Tech image="/img/vite.svg" name="Vite" />
            </ServiceCard>

            <ServiceCard
              number="02"
              title={t.services.backendTitle}
              description={t.services.backendText}
              t={t}
            >
              <Tech image="/img/nodejs.png" name="Node.js" />
              <Tech image="/img/java.png" name="Java" />
              <Tech image="/img/spring.png" name="Spring Boot" hidden />
              <Tech image="/img/python.png" name="Python" />
              <Tech image="/img/postgresql.png" name="PostgreSQL" />
            </ServiceCard>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
