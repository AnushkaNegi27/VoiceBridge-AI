import os
from services.pipeline import speech_to_speech
from services.video_pipeline import video_to_translated_video

def process_file(file_path, source_lang, target_lang):
    ext = os.path.splitext(file_path)[1].lower()

    if ext in [".wav", ".mp3"]:
        result = speech_to_speech(
            file_path,
            source_lang,
            target_lang
        )
        return {
            "type": "audio",
            "output_path": result["audio_path"]
        }

    elif ext in [".mp4", ".mkv"]:
        output_video = video_to_translated_video(
            file_path,
            source_lang,
            target_lang
        )
        return {
            "type": "video",
            "output_path": output_video
        }

    else:
        raise ValueError("Unsupported file format")
