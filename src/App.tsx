import Navbar from "./components/navbar";
import Mainsite from "./components/mainsite";
import Footer from "./components/footer";
import ContactDialog from "./components/contactDialog";

import { useState } from "react";
import { translations } from "./translations";

type Language = "no" | "en";

export default function App() {
  const [language, setLanguage] = useState<Language>("no");

  const t = translations[language];

  function toggleLanguage() {
    setLanguage((current) => (current === "no" ? "en" : "no"));
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
