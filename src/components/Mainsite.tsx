import { translations } from "../translations";
import Hero from "./Hero";
import Services from "./Services";
import About from "./About";

type Trans = {
  t: typeof translations.en;
};

export default function Mainsite({ t }: Trans) {
  return (
    <>
      <main className="relative flex flex-col overflow-hidden font-outfit">
        <Hero t={t} />
        <Services t={t} />
        <About t={t} />
      </main>
    </>
  );
}
