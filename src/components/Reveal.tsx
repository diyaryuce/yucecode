import { useState, useRef, useEffect } from "react";

export default function Reveal({ children }: { children: React.ReactNode }) {
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
