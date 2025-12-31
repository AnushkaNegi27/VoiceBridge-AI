import subprocess
import os

def merge_audio_tracks(
    video_path: str,
    translated_audio_path: str,
    output_path: str
):
    """
    Merges original video + translated audio into a multi-track MP4
    """

    command = [
        "ffmpeg",
        "-i", video_path,
        "-i", translated_audio_path,
        "-map", "0:v",
        "-map", "0:a?",
        "-map", "1:a",
        "-c:v", "copy",
        "-c:a", "aac",
        "-shortest",
        output_path
    ]

    subprocess.run(command, check=True)
    return output_path
