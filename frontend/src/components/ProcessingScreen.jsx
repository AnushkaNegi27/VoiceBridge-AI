export default function ProcessingScreen({ step, fileName }) {
  return (
    <div className="bg-[#0b1220] rounded-2xl p-10 text-center text-white w-full max-w-md">

      {/* Spinner */}
      <div className="mb-6 animate-spin text-cyan-400 text-4xl">⏳</div>

      <h2 className="text-2xl font-semibold mb-1">
        {step === 4 ? "Translation Complete" : "Processing Translation"}
      </h2>

      <p className="text-gray-400 mb-6">{fileName}</p>

      {/* Progress bar */}
      <div className="w-full bg-gray-700 rounded-full h-2 mb-8">
        <div
          className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full transition-all duration-500"
          style={{
            width:
              step === 1 ? "33%" :
              step === 2 ? "66%" :
              step >= 3 ? "100%" : "0%"
          }}
        />
      </div>

      {/* Steps */}
      <div className="space-y-3 text-left max-w-md mx-auto">

        <Step active={step >= 1} text="Transcribing speech" />
        <Step active={step >= 2} text="Translating content" />
        <Step active={step >= 3} text="Generating voice" />

      </div>

      {/* ✅ COMPLETION MESSAGE */}
      {step === 4 && (
        <div className="mt-6 text-green-400 font-semibold text-center">
          ✅ Translation completed successfully
        </div>
      )}

    </div>
  );
}

function Step({ active, text }) {
  return (
    <div
      className={`p-4 rounded-xl flex items-center gap-3 transition
        ${active ? "bg-[#061827] text-cyan-400" : "bg-[#020617] text-gray-500"}
      `}
    >
      {active ? "✔" : "○"} {text}
    </div>
  );
}
