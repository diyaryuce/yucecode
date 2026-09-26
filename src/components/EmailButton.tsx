import { MailPlusIcon } from "lucide-react";
import { useState } from "react";

export default function EmailButton() {
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

  // flex h-8 lg:h-11 lg:min-w-10 px-3 sm:px-4 py-2 group
  //           items-center justify-center rounded-xl cursor-pointer text-sm lg:text-base font-semibold
  //           border border-white/10 bg-[#151515]/80 hover:text-[#E8BD70] backdrop-blur-lg tracking-wide

  return (
    <div className="relative flex items-center justify-center">
      <button
        onClick={copyEmail}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        className="
          group relative
          h-11 w-13
          cursor-pointer
        "
      >
        <div
          className="
            absolute left-0 top-0
            h-12 w-14
            rounded-3xl
            border border-white/10 bg-[#151515]/80 backdrop-blur-lg
            shrink-0
            whitespace-nowrap
            transition-all
            duration-300
            ease-in-out
            group-hover:w-[240px]
          "
        >
          <span
            className="
              pointer-events-none
              absolute left-12 top-1/2
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

          <MailPlusIcon
            size={22}
            className="
              absolute left-4 top-1/2
              -translate-y-1/2
              group-hover:text-[#E8BD70]
              transition duration-300
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
