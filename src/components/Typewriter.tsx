import { useEffect, useRef, useState } from "react";

export default function Typewriter({
  text,
  speed = 40,
}: {
  text: string;
  speed?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.3,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    setDisplayed("");
    setDone(false);

    let index = 0;

    const interval = setInterval(() => {
      index++;

      setDisplayed(text.slice(0, index));

      if (index >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, started]);

  return (
    <span ref={ref}>
      {displayed}

      {!done && started && <span className="animate-pulse">|</span>}
    </span>
  );
}
