import axios from "axios";

const API_BASE = "http://127.0.0.1:8000";

/**
 * 🔁 Language Name → Language Code (BACKEND COMPATIBLE)
 * Must match backend/services/translation.py LANG_MAP
 */
const LANG_CODE_MAP = {
  English: "en",
  Hindi: "hi",
  Spanish: "es",
  French: "fr",
  German: "de",
  Tamil: "ta",
  Telugu: "te",
  Bengali: "bn",
  Marathi: "mr",
  Gujarati: "gu",
  Kannada: "kn",
  Malayalam: "ml",
};

function getLangCode(lang) {
  return LANG_CODE_MAP[lang] || lang;
}

/**
 * 🎧 AUDIO / VIDEO FILE TRANSLATION
 */
export async function processAudio(file, sourceLang, targetLang) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("source_lang", getLangCode(sourceLang));
  formData.append("target_lang", getLangCode(targetLang));

  const response = await axios.post(
    `${API_BASE}/process`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
}

/**
 * 📺 YOUTUBE VIDEO TRANSLATION (Audio + Video)
 */
export async function processYouTubeVideo(
  youtubeUrl,
  sourceLang,
  targetLang
) {
  const response = await axios.post(
    `${API_BASE}/process-youtube-video`,
    null,
    {
      params: {
        youtube_url: youtubeUrl,
        source_lang: getLangCode(sourceLang),
        target_lang: getLangCode(targetLang),
      },
    }
  );

  return response.data;
}
