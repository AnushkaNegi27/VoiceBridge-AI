import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#020617] text-white">
      
      <span className="mb-4 px-4 py-1 text-sm rounded-full bg-cyan-900/40 text-cyan-300">
        ✨ Powered by Advanced AI
      </span>

      <h1 className="text-5xl font-bold text-center leading-tight">
        AI Speech & Video <br /> Translator
      </h1>

      <p className="mt-4 text-gray-400 text-center max-w-xl">
        Translate audio and video into any language using AI
      </p>

      <button
        onClick={() => navigate("/translate")}
        className="mt-8 px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold hover:scale-105 transition"
      >
        Try Translation
      </button>

    </div>
  );
}
