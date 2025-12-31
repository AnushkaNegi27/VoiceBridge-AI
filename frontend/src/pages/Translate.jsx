import React, { useState } from "react";
import UploadBox from "../components/UploadBox";
import LanguageSelect from "../components/LanguageSelect";
import ProcessingScreen from "../components/ProcessingScreen";
import { translateFile } from "../services/api";
import toast from "react-hot-toast";


export default function Translate() {
  const [file, setFile] = useState(null);
  const [sourceLang, setSourceLang] = useState("");
  const [targetLang, setTargetLang] = useState("");
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0);
  const [resultUrl, setResultUrl] = useState(null);
  const [fileType, setFileType] = useState(null); 


  const handleTranslate = async () => {
    try {
      toast.loading("Translation started...");

      setLoading(true);
      setStep(1);

      setTimeout(() => setStep(2), 1200);
      setTimeout(() => setStep(3), 2500);

      const blob = await translateFile({
        file,
        sourceLang,
        targetLang,
      });
      

      const url = URL.createObjectURL(blob);
      setResultUrl(url);
      setStep(4);
      toast.dismiss();
      toast.success("Translation completed");

    } catch (error) {
        toast.dismiss();
        toast.error("Translation failed");
    } finally {
      setLoading(false);
    }
  };

  // ✅ RESULT SCREEN
  if (step === 4 && resultUrl) {
    return (
      <div className="min-h-screen bg-[#020617] flex items-center justify-center px-6">
        <div className="bg-[#0b1220] p-8 rounded-2xl w-full max-w-xl text-white text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Translation Complete 🎉
          </h2>

          <audio controls className="w-full mb-6">
            <source src={resultUrl} type="audio/wav" />
          </audio>

          <a
            href={resultUrl}
            download="translated_output.wav"
            className="block w-full mb-3 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold"
          >
            Download Translated File
          </a>

          <button
            onClick={() => {
              setFile(null);
              setSourceLang("");
              setTargetLang("");
              setResultUrl(null);
              setStep(0);
            }}
            className="w-full py-3 rounded-xl border border-gray-700"
          >
            Translate Another File
          </button>
        </div>
      </div>
    );
  }

  // ✅ PROCESSING SCREEN
  if (loading) {
    return (
      <div className="min-h-screen bg-[#020617] flex items-center justify-center px-6">
        <ProcessingScreen step={step} fileName={file?.name} />
      </div>
    );
  }

  // ✅ MAIN UI
  return (
    <div className="min-h-screen bg-[#020617] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-5xl bg-[#0b1220] rounded-2xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8">

        <div>
          <h2 className="text-xl font-semibold mb-4">Upload File</h2>
          <UploadBox
            onFileSelect={(selectedFile) => {
              setFile(selectedFile);
              if (selectedFile.type.startsWith("video")) {
                setFileType("video");
              } else {
                setFileType("audio");
              }
            }}
        />

        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Translation Settings</h2>

          <LanguageSelect label="Source Language" onChange={setSourceLang} />
          <LanguageSelect label="Target Language" onChange={setTargetLang} />

          <button
            onClick={handleTranslate}
            disabled={!file || !sourceLang || !targetLang}
            className={`mt-6 w-full py-3 rounded-xl font-semibold transition
              ${
                file && sourceLang && targetLang
                  ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-black"
                  : "bg-gray-700 text-gray-400 cursor-not-allowed"
              }
            `}
          >
            Translate Now
          </button>
        </div>

      </div>
    </div>
  );
}
