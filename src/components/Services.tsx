import { ArrowRightIcon } from "lucide-react";
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
            relative flex
            px-5 py-10 sm:px-8 lg:px-20 lg:py-15 w-full
          "
    >
      <Reveal>
        <h1 className="gold-gradient mb-10 text-sm lg:text-lg tracking-[0.2em]">
          {t.services.title}
        </h1>

        <div className="flex items-center">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-5xl">
              <Typewriter
                text="Building digital experiences end to end."
                speed={40}
              />
            </h1>
            <p className="max-w-lg text-[#9f9fa7]">
              I develop modern, scalable and user-centered web applications,
              from intuitive frontends to robust backends and databases
            </p>
          </div>

          <ul className="ml-auto text-[#E8BD70]">
            <li>Clean design.</li>
            <li>Solid engineering.</li>
            <li>Real impact.</li>
          </ul>
        </div>

        <div className="flex w-full gap-8 mt-15">
          <div
            className="
                  border-2 border-[#E8BD70]/40 rounded-xl w-[50%] px-10 py-10
                  transition duration-300 flex group
                  hover:scale-[1.02] hover:-translate-y-1 hover:bg-[#E8BD70]/2 relative
                "
          >
            <div className="flex flex-col">
              <span className="gold-gradient text-[1rem] tracking-[0.2em]">
                01
              </span>

              <h1 className="text-4xl font-bold mt-8">Frontend</h1>
              <p className="text-[#9f9fa7] max-w-sm mt-4">
                Modern, responsive and high-performing interfaces that look
                impressive, feel intuitive and create a great user experience
              </p>

              <div className="flex items-center mt-8 gap-4">
                <Tech image="/img/react.png" name="React" />
                <Tech image="/img/javascript.png" name="Javascript" />
                <Tech image="/img/tailwind.png" name="Tailwind" />
                <Tech image="/img/vite.svg" name="Vite" />

                <span className="text-[#5b5e5e]">and more...</span>
              </div>
            </div>

            <button className="group cursor-pointer flex flex-col justify-center items-end min-h-auto ml-auto">
              <span className="text-[#5b5e5e] group-hover:text-[#E8BD70] text-[1rem] transition duration-200">
                See more...
              </span>
              <ArrowRightIcon
                size={30}
                className="
                      mt-3 text-[#5b5e5e] group-hover:text-[#E8BD70]
                      transition duration-200 group-hover:translate-x-2
                    "
              />
            </button>
          </div>

          <div
            className="
                  border-2 border-[#E8BD70]/40 rounded-xl w-[50%] px-10 py-10
                  transition duration-300 flex group
                  hover:scale-[1.02] hover:-translate-y-1 hover:bg-[#E8BD70]/2
                "
          >
            <div className="flex flex-col">
              <span className="gold-gradient text-[1rem] tracking-[0.2em]">
                02
              </span>

              <h1 className="text-4xl font-bold mt-8">Backend + Database</h1>
              <p className="text-[#9f9fa7] max-w-sm mt-4">
                Reliable server-side systems and database solutions with focus
                on security, scalability, performance, and maintainability.
              </p>

              <div className="flex items-center mt-8 gap-4">
                <Tech image="/img/nodejs.png" name="Node.js" />
                <Tech image="/img/java.png" name="Java" />
                <Tech image="/img/python.png" name="Python" />

                <span className="text-[#5b5e5e]">and more...</span>
              </div>
            </div>

            <button className="group flex flex-col justify-center items-end min-h-auto cursor-pointer ml-auto">
              <span className="text-[#5b5e5e] group-hover:text-[#E8BD70] text-[1rem] transition duration-200">
                See more...
              </span>
              <ArrowRightIcon
                size={30}
                className="
                      mt-3 text-[#5b5e5e] group-hover:text-[#E8BD70]
                      transition duration-200 group-hover:translate-x-2
                    "
              />
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
