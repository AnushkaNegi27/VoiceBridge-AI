from gtts import gTTS
import subprocess
import os

PIPER_LANGS = ["en", "hi"]  # extend later

def text_to_speech(text: str, language: str):
    output_path = f"temp_audio/output_{language}.wav"

    if language in PIPER_LANGS:
        # 🔹 Piper TTS (offline)
        model_path = f"models/piper/{language}.onnx"

        subprocess.run([
            "piper",
            "--model", model_path,
            "--output_file", output_path
        ], input=text.encode("utf-8"))

    else:
        # 🔹 Google TTS fallback
        tts = gTTS(text=text, lang=language)
        tts.save(output_path)

    return output_path
