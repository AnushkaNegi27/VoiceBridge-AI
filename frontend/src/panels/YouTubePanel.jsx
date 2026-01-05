import { useState } from "react";
import { processYouTubeVideo } from "../api/translationApi";

function YouTubePanel({ setResult, sourceLang, targetLang }) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTranslate = async () => {
    if (!url.trim()) {
      alert("Enter YouTube URL");
      return;
    }

    try {
      setLoading(true);

      const result = await processYouTubeVideo(
        url,
        sourceLang,
        targetLang
      );

      setResult(result);

    } catch {
      alert("YouTube translation failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-10 bg-gray-100 rounded-2xl p-10 text-center">
      <h3 className="text-lg font-semibold mb-4">YouTube URL</h3>

      <input
        type="text"
        placeholder="Paste YouTube URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="w-full p-3 rounded-lg border mb-6"
      />

      <button
        onClick={handleTranslate}
        disabled={loading}
        className="px-8 py-3 bg-indigo-600 text-white rounded-xl"
      >
        {loading ? "Processing..." : "Translate Video"}
      </button>
    </div>
  );
}

export default YouTubePanel;
