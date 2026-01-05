import { useState, useRef } from "react";
import { processAudio } from "../api/translationApi";

function AudioPanel({ setResult, sourceLang, targetLang }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  const handleTranslate = async () => {
    if (!file) {
      alert("Please select an audio file");
      return;
    }

    try {
      setLoading(true);

      const response = await processAudio(
        file,
        sourceLang,
        targetLang
      );

      setResult({
        audio_url: response.audio_url,
        original_text: response.original_text,
        translated_text: response.translated_text,
      });

    } catch  {
      alert("Audio translation failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-10 bg-gray-100 rounded-2xl p-10 text-center">
      <h3 className="text-lg font-semibold mb-4">Audio Upload</h3>

      <input
        type="file"
        accept="audio/*"
        ref={fileInputRef}
        onChange={(e) => setFile(e.target.files[0])}
        className="hidden"
      />

      <div
        onClick={() => fileInputRef.current.click()}
        className="mb-6 cursor-pointer border-2 border-dashed border-indigo-400 rounded-xl p-6 hover:bg-indigo-50 transition"
      >
        <p className="text-gray-600">
          {file ? file.name : "Click here to upload audio file"}
        </p>
      </div>

      <button
        onClick={handleTranslate}
        disabled={loading}
        className="px-8 py-3 bg-indigo-600 text-white rounded-xl"
      >
        {loading ? "Processing..." : "Translate Audio"}
      </button>
    </div>
  );
}

export default AudioPanel;
