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
  t: typeof translations.no;
};

export default function Mainsite({ t }: Trans) {
  return (
    <>
      <main className="relative flex flex-col justify-center overflow-hidden font-outfit">
        <section
          id="hero"
          className="
            relative flex min-h-screen flex-col
            items-center justify-center
            overflow-hidden w-full
            px-5 sm:px-8 lg:px-10
          "
        >
          <AnimationLight Dir="left" />
          <AnimationLight Dir="right" />

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
                  mt-5 flex
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
                    h-14 w-55
                    cursor-pointer
                    items-center justify-center
                    gap-3 rounded-xl
                    px-6
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
                  className="group flex items-center gap-3 justify-center"
                  onClick={(e) => {
                    e.preventDefault();

                    document.getElementById("about")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  <span
                    className="
                      text-lg
                      transition duration-200
                      group-hover:-translate-y-1
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

          <div
            className="
              absolute inset-0 z-10
              bg-[radial-gradient(ellipse_110%_45%_at_50%_110%,rgba(29,30,30,1),transparent_70%)]
            "
          />
        </section>

        <section
          id="services"
          className="
            relative flex min-h-screen
            bg-[#1d1e1e]
            px-5 py-10
            sm:px-8
            lg:px-20 lg:py-15
          "
        >
          <Reveal>
            <h1 className="gold-gradient mb-10 text-sm lg:text-lg tracking-[0.2em]">
              {t.services.title}
            </h1>

            <div
              className="
                flex min-w-0
                flex-col
                lg:flex-row
              "
            >
              <div
                className="
                  min-w-0
                  mt-8 lg:mt-0
                "
              >
                <h1 className="text-3xl font-bold sm:text-4xl">
                  {t.services.frontendTitle}
                </h1>

                <p
                  className="
                    mt-5
                    text-base sm:text-lg lg:text-xl
                    leading-relaxed
                    text-[#9f9fa8]
                  "
                >
                  {t.services.frontendText}
                </p>

                <h2 className="mt-10 text-xl font-bold sm:text-2xl lg:mt-12">
                  {t.services.tech}
                </h2>

                <div className="mt-4 flex max-w-3xl flex-wrap gap-3">
                  <Tech image="/img/react.png" name="React" role="specialize" />

                  <Tech
                    image="/img/javascript.png"
                    name="JavaScript"
                    role="specialize"
                  />

                  <Tech
                    image="/img/tailwind.png"
                    name="Tailwindcss"
                    role="specialize"
                  />

                  <Tech image="/img/typescript.png" name="TypeScript" role="" />

                  <Tech image="/img/html.png" name="HTML" role="" />

                  <Tech image="/img/css.png" name="CSS" role="" />
                </div>
              </div>
            </div>

            <div
              className="
                my-12 lg:my-18
                h-px w-full
                bg-gradient-to-r
                from-transparent
                via-[#E8BD70]/50
                to-transparent
              "
            />

            <div
              className="
                flex min-w-0
                flex-col
                lg:flex-row
              "
            >
              <div className="min-w-0">
                <h1 className="text-3xl font-bold sm:text-4xl">
                  {t.services.backendTitle}
                </h1>

                <p
                  className="
                    mt-5
                    text-base sm:text-lg lg:text-xl
                    leading-relaxed
                    text-[#9f9fa8]
                  "
                >
                  {t.services.backendText}
                </p>

                <h2 className="mt-10 text-xl font-bold sm:text-2xl lg:mt-12">
                  {t.services.tech}
                </h2>

                <div className="mt-4 flex max-w-2xl flex-wrap gap-3">
                  <Tech image="/img/java.png" name="Java" role="specialize" />

                  <Tech
                    image="/img/nodejs.png"
                    name="Node.js"
                    role="specialize"
                  />

                  <Tech
                    image="/img/postgresql.png"
                    name="Postgresql"
                    role="specialize"
                  />

                  <Tech image="/img/spring.png" name="Spring Boot" role="" />

                  <Tech image="/img/mysql.png" name="Mysql" role="" />
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section
          id="about"
          className="
            relative flex min-h-screen
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
                gap-10
                lg:flex-row lg:gap-20
              "
            >
              <div className="mt-0 w-full lg:mt-20">
                <h1 className="mb-5 text-3xl">{t.aboutMe.who}</h1>

                <p
                  className="
                    text-base sm:text-lg lg:text-xl
                    leading-relaxed
                    text-[#9f9fa8]
                  "
                >
                  {t.aboutMe.para1}
                </p>

                <br />

                <p
                  className="
                    text-base sm:text-lg lg:text-xl mt-4 lg:mt-8
                    leading-relaxed
                    text-[#9f9fa8]
                  "
                >
                  {t.aboutMe.para2}
                </p>

                <ul
                  className="
                    mt-10
                    grid grid-cols-2
                    gap-6 justify-center
                    xl:flex xl:gap-5
                    lg:mt-12
                  "
                >
                  <div className="flex gap-3">
                    <MapPin className="mt-1 shrink-0 text-[#E8BD70]" />

                    <div>
                      <h2 className="text-sm tracking-[0.15em] text-[#E8BD70]">
                        {t.aboutMe.based}
                      </h2>

                      <li>{t.aboutMe.loc}</li>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Code2 className="mt-1 shrink-0 text-[#E8BD70]" />

                    <div>
                      <h2 className="text-sm tracking-[0.15em] text-[#E8BD70]">
                        {t.aboutMe.focus}
                      </h2>

                      {t.aboutMe.focusList.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <GraduationCap className="mt-1 shrink-0 text-[#E8BD70]" />

                    <div>
                      <h2 className="text-sm tracking-[0.15em] text-[#E8BD70]">
                        {t.aboutMe.currently}
                      </h2>

                      {t.aboutMe.currentlyList.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <ChartNoAxesColumnIncreasing className="mt-1 shrink-0 text-[#E8BD70]" />

                    <div>
                      <h2 className="text-sm tracking-[0.15em] text-[#E8BD70]">
                        {t.aboutMe.interest}
                      </h2>

                      {t.aboutMe.interestList.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </div>
                  </div>
                </ul>

                <button
                  commandFor="contact-dialog"
                  command="show-modal"
                  className="
                    group mt-12 lg:mt-10
                    flex h-14 w-55
                    cursor-pointer
                    items-center justify-center
                    rounded-xl mx-auto
                    px-6
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
              </div>
            </div>
          </Reveal>
        </section>

        <div
          className="
              absolute inset-0 z-10
              bg-[radial-gradient(ellipse_110%_45%_at_50%_110%,rgba(29,30,30,1),transparent_40%)]
            "
        />
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
      ? "bg-[radial-gradient(ellipse_at_left,rgba(42,36,24,0.45)_0%,rgba(21,21,21,0.65)_45%,rgba(21,21,21,0.9)_100%)]"
      : "bg-[radial-gradient(ellipse_at_right,rgba(42,36,24,0.45)_0%,rgba(21,21,21,0.65)_45%,rgba(21,21,21,0.9)_100%)]";

  const hiddenPosition = Dir === "left" ? "-translate-x-32" : "translate-x-32";

  return (
    <div
      className={`
        pointer-events-none absolute
        ${position} top-1/2 h-200 lg:h-400 w-160 lg:w-325
        -translate-y-1/2 ${gradient}
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
