import subprocess
import os

def merge_audio_tracks(video_path, translated_audio_path, output_path):
    subprocess.run([
        "ffmpeg",
        "-y",
        "-i", video_path,
        "-i", translated_audio_path,

        # 🔥 ONLY video from original
        "-map", "0:v:0",

        # 🔥 ONLY translated audio
        "-map", "1:a:0",

        "-c:v", "copy",
        "-c:a", "aac",
        "-shortest",

        output_path
    ], check=True)
