import uuid
import os
import subprocess
from services.pipeline import speech_to_speech
from services.packaging import merge_audio_tracks

TEMP_DIR = "temp_audio"
os.makedirs(TEMP_DIR, exist_ok=True)

def process_youtube_video(youtube_url, source_lang, target_lang):
    uid = uuid.uuid4().hex

    video_path = f"{TEMP_DIR}/youtube_video_{uid}.mp4"
    audio_path = f"{TEMP_DIR}/youtube_audio_{uid}.wav"
    output_video = f"{TEMP_DIR}/youtube_translated_{uid}.mp4"

    # 1️⃣ Download video
    subprocess.run([
        "yt-dlp",
        "-f", "mp4",
        "-o", video_path,
        youtube_url
    ], check=True)

    # 2️⃣ Extract audio
    subprocess.run([
        "ffmpeg", "-y",
        "-i", video_path,
        audio_path
    ], check=True)

    # 3️⃣ Speech → Speech
    result = speech_to_speech(
        audio_path,
        source_lang,
        target_lang
    )

    # 4️⃣ Merge translated audio with video
    merge_audio_tracks(
        video_path=video_path,
        translated_audio_path=result["audio_path"],
        output_path=output_video
    )

    return {
        "original_text": result["original_text"],
        "translated_text": result["translated_text"],
        "video_path": output_video
    }
