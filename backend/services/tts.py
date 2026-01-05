from gtts import gTTS
import subprocess
import os
import uuid

PIPER_LANGS = ["en"]

def text_to_speech(text: str, language: str):
    filename = f"output_{language}_{uuid.uuid4().hex}.wav"
    output_path = os.path.join("temp_audio", filename)

    if language in PIPER_LANGS:
        model_path = f"models/piper/{language}.onnx"

        subprocess.run(
            [
                "piper",
                "--model", model_path,
                "--output_file", output_path
            ],
            input=text.encode("utf-8")
        )
    else:
        tts = gTTS(text=text, lang=language)
        tts.save(output_path)

    return output_path
