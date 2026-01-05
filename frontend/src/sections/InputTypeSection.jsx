import { useState } from "react";
import InputTypeCard from "../components/InputTypeCard";
import AudioPanel from "../panels/AudioPanel";
import VideoPanel from "../panels/VideoPanel";
import VoicePanel from "../panels/VoicePanel";
import YouTubePanel from "../panels/YouTubePanel";

function InputTypeSection({ setResult, sourceLang, targetLang }) {
  const [selected, setSelected] = useState("audio");

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold text-gray-900">
        Select Input Type
      </h2>

      <p className="mt-2 text-gray-600">
        Choose how you want to provide content for translation
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <InputTypeCard
          icon="🎧"
          title="Audio Upload"
          description="Upload MP3, WAV, or other audio files"
          selected={selected === "audio"}
          onClick={() => setSelected("audio")}
        />

        <InputTypeCard
          icon="🎬"
          title="Video Upload"
          description="Upload MP4, AVI, or other video files"
          selected={selected === "video"}
          onClick={() => setSelected("video")}
        />

        <InputTypeCard
          icon="🎙️"
          title="Live Voice"
          description="Record directly from your microphone"
          selected={selected === "voice"}
          onClick={() => setSelected("voice")}
        />

        <InputTypeCard
          icon="🔗"
          title="YouTube URL"
          description="Translate content from YouTube videos"
          selected={selected === "youtube"}
          onClick={() => setSelected("youtube")}
        />
      </div>

      <div className="mt-10">
        {selected === "audio" && (
          <AudioPanel
            setResult={setResult}
            sourceLang={sourceLang}
            targetLang={targetLang}
          />
        )}

        {selected === "video" && (
          <VideoPanel
            setResult={setResult}
            sourceLang={sourceLang}
            targetLang={targetLang}
          />
        )}

        {selected === "voice" && (
          <VoicePanel
            setResult={setResult}
            sourceLang={sourceLang}
            targetLang={targetLang}
          />
        )}

        {selected === "youtube" && (
          <YouTubePanel
            setResult={setResult}
            sourceLang={sourceLang}
            targetLang={targetLang}
          />
        )}
      </div>
    </section>
  );
}

export default InputTypeSection;
