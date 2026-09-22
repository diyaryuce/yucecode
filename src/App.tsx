import Navbar from "./components/navbar";
import Mainsite from "./components/mainsite";
import Footer from "./components/footer";
import ContactDialog from "./components/contactDialog";

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
