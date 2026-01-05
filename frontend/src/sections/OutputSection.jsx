function OutputSection({ result }) {
  console.log("OUTPUT RECEIVED:", result);

  return (
    <section className="max-w-6xl mx-auto px-6 pb-32">
      <div className="rounded-3xl bg-white p-8 shadow-sm">

        <h2 className="text-xl font-semibold">Translation Completed</h2>

        {/* AUDIO */}
        {result.audio_url && (
          <audio controls className="w-full mt-4">
            <source src={result.audio_url} />
          </audio>
        )}

        {/* VIDEO PREVIEW */}
        {result.video_url && (
          <video
            controls
            src={result.video_url}
            className="w-full mt-6 rounded-xl"
          />
        )}

        {/* DOWNLOAD */}
        {result.video_url && (
          <div className="mt-4 text-center">
            <a
              href={result.video_url}
              download
              className="inline-flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              ⬇ Download Video
            </a>
          </div>
        )}



        {/* ORIGINAL */}
        <details className="mt-6">
          <summary>Original Transcript</summary>
          <p>{result.original_text}</p>
        </details>

        {/* TRANSLATED */}
        <details className="mt-4">
          <summary>Translated Text</summary>
          <p>{result.translated_text}</p>
        </details>

      </div>
    </section>
  );
}



export default OutputSection;
