import { MailIcon, Phone } from "lucide-react";
import { translations } from "../translations";

type Trans = {
  t: typeof translations.no;
};

export default function Footer({ t }: Trans) {
  return (
    <>
      <section
        id="footer"
        className="
          flex flex-col
          items-center
          justify-center
          gap-6
          min-h-[10rem]
          px-5 py-8
          font-outfit
          relative
          sm:px-8
          bg-[#151515]

          lg:flex-row
          lg:gap-50
          lg:px-20
        "
      >
        <div
          className="
              absolute inset-0 z-0
              bg-[radial-gradient(ellipse_at_top,rgba(29,30,30,1),transparent_50%)]
            "
        />

        <div
          className="
          flex flex-col
          gap-5 z-20
          justify-center
          items-center
          text-center
        "
        >
          <img src="/img/anadolu_gold.png" className="size-10 sm:size-12" />

          <p className="text-xs sm:text-sm">{t.footer.rights}</p>
        </div>

        <div
          className="
          flex flex-col
          gap-3 z-20
          items-center
          lg:items-start
        "
        >
          <div
            className="
            flex items-center
            gap-3
            min-w-0
          "
          >
            <MailIcon size={21} className="shrink-0 text-[#b2b2a8]" />

            <span
              className="
              text-sm sm:text-base
              text-[#b2b2a8]
              break-all
            "
            >
              yucecontact@gmail.com
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Phone size={21} className="shrink-0 text-[#b2b2a8]" />

            <span className="text-sm sm:text-base text-[#b2b2a8]">
              +47 <span className="ml-1">908 33 022</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 lg:justify-start">
            <a
              href="https://www.linkedin.com/in/ayaz-diyar-y%C3%BCce/"
              className="
                flex items-center justify-center group
                size-10
                bg-[#39393e]
                rounded-xl
                transition duration-300
                hover:rotate-10
                hover:scale-[1.05]
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 inset-0 group-hover:hidden transition duration-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 inset-0 hidden group-hover:block transition duration-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#E8BD70"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            <a
              href="https://github.com/diyaryuce"
              className="
                flex items-center justify-center
                size-10 group
                bg-[#39393e]
                rounded-xl
                transition duration-300
                hover:rotate-10
                hover:scale-[1.05]
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 inset-0 group-hover:hidden transition duration-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 inset-0 hidden group-hover:block transition duration-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#E8BD70"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>

            <a
              href=""
              className="
                flex items-center justify-center
                size-10 group
                bg-[#39393e]
                rounded-xl
                transition duration-300
                hover:rotate-10
                hover:scale-[1.05]
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#ffffff"
                className="size-5 inset-0 group-hover:hidden transition duration-300"
                viewBox="0 0 16 16"
                id="Twitter-X--Streamline-Bootstrap"
                height="16"
                width="16"
              >
                <desc>Twitter X Streamline Icon: https://streamlinehq.com</desc>
                <path
                  d="M12.6 0.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867 -5.07 -4.425 5.07H0.316l5.733 -6.57L0 0.75h5.063l3.495 4.633L12.601 0.75Zm-0.86 13.028h1.36L4.323 2.145H2.865z"
                  stroke-width="1"
                ></path>
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#E8BD70"
                className="size-5 inset-0 hidden group-hover:block transition duration-300"
                viewBox="0 0 16 16"
                id="Twitter-X--Streamline-Bootstrap"
                height="16"
                width="16"
              >
                <desc>Twitter X Streamline Icon: https://streamlinehq.com</desc>
                <path
                  d="M12.6 0.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867 -5.07 -4.425 5.07H0.316l5.733 -6.57L0 0.75h5.063l3.495 4.633L12.601 0.75Zm-0.86 13.028h1.36L4.323 2.145H2.865z"
                  stroke-width="1"
                ></path>
              </svg>
            </a>

            <a
              href=""
              className="
                flex items-center justify-center group
                size-10
                bg-[#39393e]
                rounded-xl
                transition duration-300
                hover:rotate-10
                hover:scale-[1.05]
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 inset-0 group-hover:hidden transition duration-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 inset-0 hidden group-hover:block transition duration-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#E8BD70"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
