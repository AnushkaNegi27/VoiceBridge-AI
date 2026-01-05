function ConfigurationSection({
  sourceLang,
  setSourceLang,
  targetLang,
  setTargetLang,
}) {
  const languages = [
    { label: "English", code: "en" },
    { label: "Hindi", code: "hi" },
    { label: "Spanish", code: "es" },
    { label: "French", code: "fr" },
    { label: "German", code: "de" },
    { label: "Tamil", code: "ta" },
    { label: "Telugu", code: "te" },
    { label: "Bengali", code: "bn" },
    { label: "Marathi", code: "mr" },
    { label: "Gujarati", code: "gu" },
    { label: "Kannada", code: "kn" },
    { label: "Malayalam", code: "ml" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 pb-24">
      <div className="rounded-3xl bg-white p-8 shadow-sm">

        <h2 className="text-xl font-semibold mb-6">Configuration</h2>

        <div className="grid gap-6 md:grid-cols-2">

          {/* Source Language */}
          <div>
            <label className="block mb-2 text-sm font-medium">
              Source Language
            </label>
            <select
              value={sourceLang}
              onChange={(e) => setSourceLang(e.target.value)}
              className="w-full rounded-xl border px-4 py-3"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.label}
                </option>
              ))}
            </select>
          </div>

          {/* Target Language */}
          <div>
            <label className="block mb-2 text-sm font-medium">
              Target Language
            </label>
            <select
              value={targetLang}
              onChange={(e) => setTargetLang(e.target.value)}
              className="w-full rounded-xl border px-4 py-3"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.label}
                </option>
              ))}
            </select>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ConfigurationSection;
