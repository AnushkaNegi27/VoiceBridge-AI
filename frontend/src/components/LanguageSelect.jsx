import React from "react";

const LANGUAGES = [
  { label: "English", value: "en" },
  { label: "Hindi", value: "hi" },
  { label: "French", value: "fr" },
  { label: "Spanish", value: "es" },
  { label: "German", value: "de" },
  { label: "Tamil", value: "ta" },
  { label: "Telugu", value: "te" },
  { label: "Bengali", value: "bn" },
  { label: "Marathi", value: "mr" },
  { label: "Gujarati", value: "gu" },
  { label: "Kannada", value: "kn" },
  { label: "Malayalam", value: "ml" },
];

export default function LanguageSelect({ label, onChange }) {
  return (
    <div className="mb-4">
      <label className="block text-sm text-gray-300 mb-2">
        {label}
      </label>

      <select
        className="w-full bg-[#020617] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        defaultValue=""
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="" disabled>
          Select language
        </option>

        {LANGUAGES.map((lang) => (
          <option key={lang.value} value={lang.value}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
}
