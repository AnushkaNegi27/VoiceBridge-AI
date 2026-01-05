import { useState, useRef } from "react";
import { processAudio } from "../api/translationApi";

function VoicePanel({ setResult, sourceLang, targetLang }) {
  const [recording, setRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);
    chunksRef.current = [];

    recorder.ondataavailable = (e) => {
      chunksRef.current.push(e.data);
    };

    recorder.onstop = async () => {
      const blob = new Blob(chunksRef.current, { type: "audio/wav" });
      const file = new File([blob], "mic.wav", { type: "audio/wav" });

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
    };

    recorder.start();
    mediaRecorderRef.current = recorder;
    setRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setRecording(false);
  };

  return (
    <div className="mt-10 bg-gray-100 rounded-2xl p-10 text-center">
      <h3 className="text-lg font-semibold mb-4">Live Voice</h3>

      {!recording ? (
        <button
          onClick={startRecording}
          className="px-8 py-3 bg-indigo-600 text-white rounded-xl"
        >
          Start Recording
        </button>
      ) : (
        <button
          onClick={stopRecording}
          className="px-8 py-3 bg-red-600 text-white rounded-xl"
        >
          Stop Recording
        </button>
      )}
    </div>
  );
}

export default VoicePanel;
