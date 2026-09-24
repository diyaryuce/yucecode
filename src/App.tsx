import Navbar from "./components/Navbar";
import Mainsite from "./components/Mainsite";
import Footer from "./components/Footer";
import ContactDialog from "./components/ContactDialog";

import { useState } from "react";
import { translations } from "./translations";

type Language = "en" | "no";

export default function App() {
  const [language, setLanguage] = useState<Language>("en");

  const t = translations[language];

  function toggleLanguage() {
    setLanguage((current) => (current === "en" ? "no" : "en"));
  }

  return (
    <>
      <div>
        <Navbar t={t} language={language} toggleLanguage={toggleLanguage} />
        <Mainsite t={t} />
        <Footer t={t} />

        <ContactDialog t={t} />
      </div>
    </>
  );
}

/**
 * <h1 className="flex text-[clamp(1.425rem,4vw,2.5rem)] text-white font-bold shrink-0 ">
 *  dev branch test
 * </h1>
 */
