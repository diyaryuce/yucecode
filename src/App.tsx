import Navbar from "./components/Navbar";
import Mainsite from "./components/Mainsite";
import Footer from "./components/Footer";
import ContactDialog from "./components/ContactDialog";
import ReactiveBackground from "./components/ReactiveBackground";

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
    <div className="relative min-h-screen">
      <ReactiveBackground />

      <div className="relative z-10">
        <Navbar t={t} language={language} toggleLanguage={toggleLanguage} />

        <Mainsite t={t} />

        <Footer t={t} />
      </div>

      <ContactDialog t={t} />
    </div>
  );
}
