export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#020617] via-[#020b2c] to-[#020617] text-white px-6">
      
      <div className="max-w-4xl text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 text-cyan-400 text-sm mb-6">
          ✨ Powered by Advanced AI
        </div>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          AI Speech & Video <br />
          <span className="text-cyan-400">Translator</span>
        </h1>

        <p className="mt-6 text-lg text-gray-400">
          Translate audio and video into any language using AI
        </p>

        <button className="mt-10 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold hover:scale-105 transition">
          Try Translation
        </button>

      </div>
    </section>
  );
}
