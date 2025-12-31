import { useState } from "react";

export default function UploadBox({ onFileSelect }) {
  const [file, setFile] = useState(null);

  function handleChange(e) {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    onFileSelect(selectedFile);
    toast.success("File uploaded");
  }


  return (
    <div>
      <label className="block text-sm text-gray-300 mb-2">
        Upload File
      </label>

      <label className="flex flex-col items-center justify-center h-52 border-2 border-dashed border-gray-600 rounded-xl cursor-pointer bg-[#0b1220] hover:border-cyan-400 transition">
        <input
          type="file"
          className="hidden"
          accept="audio/*,video/*"
          onChange={handleChange}
        />

        {!file && (
          <>
            <div className="text-4xl mb-3">⬆️</div>
            <p className="text-gray-300">Drag & drop your file here</p>
            <p className="text-sm text-gray-500 mt-1">
              or click to browse
            </p>
            <p className="text-xs text-gray-600 mt-2">
              Supports MP3, WAV, MP4, WebM, MOV
            </p>
          </>
        )}

        {file && (
          <div className="text-center">
            <p className="text-cyan-400 font-medium">{file.name}</p>
            <p className="text-sm text-gray-400 mt-1">
              {(file.size / 1024).toFixed(1)} KB
            </p>
            <p className="text-xs text-gray-500 mt-2">
              {file.type.startsWith("video") ? "🎥 Video file" : "🎧 Audio file"}
            </p>
          </div>
        )}
      </label>
    </div>
  );
}
