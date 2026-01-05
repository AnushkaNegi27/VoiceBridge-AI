export default function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">VoiceBridge-AI</h1>
          <p className="text-sm text-indigo-100">
            Neural Speech Translation Platform
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="px-3 py-1 text-sm rounded-full bg-green-500/20 text-green-100">
            ● System Online
          </span>
          <span className="px-3 py-1 text-sm rounded-full bg-white/20">
            v2.1.0
          </span>
        </div>
      </div>
    </header>
  );
}
