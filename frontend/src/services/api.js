export async function translateFile({ file, sourceLang, targetLang }) {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(
    `http://127.0.0.1:8000/process?source_lang=${sourceLang}&target_lang=${targetLang}`,
    {
      method: "POST",
      body: formData,
    }
  );

  // 🔴 ADD THIS LOG
  console.log("RESPONSE STATUS:", response.status);
  console.log("RESPONSE HEADERS:", [...response.headers.entries()]);

  if (!response.ok) {
    throw new Error("Backend returned error");
  }

  // 🔴 THIS MUST BE blob()
  const blob = await response.blob();

  console.log("BLOB RECEIVED:", blob);

  return blob;
}
