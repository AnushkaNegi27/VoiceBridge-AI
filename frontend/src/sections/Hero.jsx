export default function Hero() {
  return (
    <section className="bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-slate-900 mb-3">
          Translate speech, voice, and video across languages
        </h2>

        <p className="text-slate-600 max-w-2xl">
          A market-ready neural AI system for multilingual speech recognition,
          translation, and voice synthesis.
        </p>

        <div className="mt-6 flex gap-4">
          <span className="px-4 py-2 rounded-lg bg-indigo-100 text-indigo-700 text-sm font-medium">
            12+ Languages Supported
          </span>
          <span className="px-4 py-2 rounded-lg bg-indigo-100 text-indigo-700 text-sm font-medium">
            Powered by Meta NLLB-200
          </span>
          <span className="px-4 py-2 rounded-lg bg-indigo-100 text-indigo-700 text-sm font-medium">
            Near Real-Time Processing
          </span>
        </div>
      </div>
    </section>
  );
}
