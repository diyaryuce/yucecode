import { useEffect, useRef, useState } from "react";
import {
  ArrowRightIcon,
  MapPin,
  Code2,
  GraduationCap,
  ChartNoAxesColumnIncreasing,
} from "lucide-react";
import { translations } from "../translations";

type Trans = {
  t: typeof translations.en;
};

export default function Mainsite({ t }: Trans) {
  return (
    <>
      <main className="relative flex flex-col overflow-hidden font-outfit">
        <AnimationLight Dir="left" />
        <AnimationLight Dir="right" />

        <section
          id="hero"
          className="
            relative flex min-h-screen flex-col
            items-center justify-center
            overflow-hidden w-full
            px-5 sm:px-8 lg:px-10
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
                A. Diyar Yüce
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
                    mt-3 lg:mt-0 rounded-xl px-6 h-14 w-50 lg:w-45
                    hover:scale-[1.05] transition duration-200

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

                  <ArrowRightIcon
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
                  Building digital experiences end to end.
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
                  hover:scale-[1.02] hover:-translate-y-1 hover:bg-[#E8BD70]/2
                "
              >
                <div className="flex flex-col">
                  <span className="gold-gradient text-[1rem] tracking-[0.2em]">
                    01
                  </span>

                  <h1 className="text-4xl font-bold mt-8">Frontend</h1>
                  <p className="text-[#9f9fa7] max-w-sm mt-4">
                    Modern, responsive and high-performing interfaces that look
                    impressive, feel intuitive and create a great user
                    experience
                  </p>

                  <div className="flex items-center mt-8 gap-4">
                    <Tech image="/img/react.png" name="React" role="none" />
                    <Tech
                      image="/img/javascript.png"
                      name="Javascript"
                      role="none"
                    />
                    <Tech
                      image="/img/tailwind.png"
                      name="Tailwind"
                      role="none"
                    />
                    <Tech image="/img/vite.svg" name="Vite" role="none" />

                    <span className="text-[#5b5e5e]">and more...</span>
                  </div>
                </div>

                <div className="group flex flex-col justify-center items-end min-h-auto ml-auto">
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
                </div>
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

                  <h1 className="text-4xl font-bold mt-8">
                    Backend + Database
                  </h1>
                  <p className="text-[#9f9fa7] max-w-sm mt-4">
                    Reliable server-side systems and database solutions with
                    focus on security, scalability, performance, and
                    maintainability.
                  </p>

                  <div className="flex items-center mt-8 gap-4">
                    <Tech image="/img/nodejs.png" name="Node.js" role="none" />
                    <Tech image="/img/java.png" name="Java" role="none" />
                    <Tech image="/img/python.png" name="Python" role="none" />

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
                  I started coding because I was curious about how the websites
                  and applications I used every day were built. Through
                  experimenting, breaking things, and fixing them, that
                  curiosity grew into a real interest in software development
                  and turning ideas into something useful.
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
                  with code, while backend, databases, and data engineering
                  helped me understand what happens behind the interface and
                  build more complete applications.
                </p>
              </div>

              <div className="flex flex-col gap-5 justify-center">
                <div className="flex gap-5">
                  <div
                    className="
                    w-100 h-30 group flex gap-4 items-center px-4 py-4 border 
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
                    w-100 h-30 group flex gap-4 items-center px-4 py-4 border 
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
                    w-100 h-30 group flex gap-4 items-center px-4 py-4 border 
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
                    w-100 h-30 group flex gap-4 items-center px-4 py-4 border 
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
      </main>
    </>
  );
}

type Props = {
  image: string;
  name: string;
  role: string;
};

function Tech({ image, name, role }: Props) {
  const roleColour = getRoleColour(role);

  return (
    <div
      className={`
        flex shrink-0
        items-center justify-center
        gap-2 sm:gap-3
        rounded-lg border
        px-2.5 py-1.5
        text-sm
        sm:px-3 sm:py-2 sm:text-base
        ${roleColour}
      `}
    >
      <img src={image} className="h-auto w-5" />

      <span>{name}</span>
    </div>
  );
}

function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(true);

          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      });
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`
        relative z-20
        w-full min-w-0
        transition-all
        duration-600 ease-[ease]
        ${active ? "translate-y-0 opacity-100" : "translate-y-[50px] opacity-0"}
      `}
    >
      {children}
    </div>
  );
}

type Dire = {
  Dir: "left" | "right";
};

function AnimationLight({ Dir }: Dire) {
  const [lightActive, setLightActive] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLightActive(true);
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  const position = Dir === "left" ? "left-[-15%]" : "right-[-15%]";

  const gradient =
    Dir === "left"
      ? "bg-[radial-gradient(ellipse_at_left,rgb(42,36,24)_0%,rgba(21,21,21,0.65)_50%,rgba(21,21,21,0.9)_100%)]"
      : "bg-[radial-gradient(ellipse_at_right,rgb(42,36,24)_0%,rgba(21,21,21,0.65)_50%,rgba(21,21,21,0.9)_100%)]";

  const hiddenPosition = Dir === "left" ? "-translate-x-32" : "translate-x-32";

  return (
    <div
      className={`
        pointer-events-none absolute
        ${position} top-1/6 h-200 lg:h-400 w-80 lg:w-325
        -translate-y-1/2 ${gradient} overflow-hidden
        transition-all duration-1000 ease-out

        ${
          lightActive
            ? "translate-x-0 opacity-100"
            : `${hiddenPosition} opacity-0`
        }
      `}
    />
  );
}

const roleColour = {
  normal: "border-[#403f3e] bg-[#202020]",
  special: "border-[#E8BD70] bg-[#E8BD70]/10",
};

function getRoleColour(role: string) {
  if (role === "specialize") {
    return roleColour.special;
  }

  return roleColour.normal;
}
