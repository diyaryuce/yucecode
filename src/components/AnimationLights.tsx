import { useState, useEffect } from "react";

export default function AnimationLight({ Dir }: Dire) {
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

type Dire = {
  Dir: "left" | "right";
};
