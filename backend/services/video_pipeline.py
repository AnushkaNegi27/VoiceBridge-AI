import os
import subprocess

from services.pipeline import speech_to_speech
from services.packaging import merge_audio_tracks


TEMP_DIR = "temp_audio"
os.makedirs(TEMP_DIR, exist_ok=True)


def extract_audio_from_video(video_path):
    audio_path = video_path.replace(".mp4", ".wav")

    command = [
        "ffmpeg",
        "-y",
        "-i", video_path,
        "-vn",
        "-acodec", "pcm_s16le",
        "-ar", "16000",
        audio_path
    ]

    subprocess.run(command, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    return audio_path


def video_to_translated_video(video_path, source_lang, target_lang):
    extracted_audio = extract_audio_from_video(video_path)

    speech_result = speech_to_speech(
        extracted_audio,
        source_lang,
        target_lang
    )

    output_video = video_path.replace(".mp4", "_translated.mp4")

    merge_audio_tracks(
        video_path=video_path,
        translated_audio_path=speech_result["audio_path"],
        output_path=output_video
    )

    return output_video
