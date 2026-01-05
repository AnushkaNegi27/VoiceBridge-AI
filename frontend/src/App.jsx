import { useState } from "react";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import InputTypeSection from "./sections/InputTypeSection";
import ConfigurationSection from "./sections/ConfigurationSection";
import OutputSection from "./sections/OutputSection";

function App() {
  const [result, setResult] = useState(null);

  // 🔥 LANGUAGE STATE (VERY IMPORTANT)
  const [sourceLang, setSourceLang] = useState("en");
  const [targetLang, setTargetLang] = useState("hi");

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />

      <InputTypeSection
        setResult={setResult}
        sourceLang={sourceLang}
        targetLang={targetLang}
      />

      <ConfigurationSection
        sourceLang={sourceLang}
        setSourceLang={setSourceLang}
        targetLang={targetLang}
        setTargetLang={setTargetLang}
      />

      {result && <OutputSection result={result} />}
    </div>
  );
}

export default App;
