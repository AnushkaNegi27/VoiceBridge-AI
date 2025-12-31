from fastapi import APIRouter, UploadFile, File
from fastapi.responses import FileResponse
from fastapi.responses import JSONResponse
import shutil
import os

from services.asr import asr_model
from services.translation import translate_text
from services.tts import text_to_speech
from services.pipeline import speech_to_speech
from services.packaging import merge_audio_tracks
from services.video_pipeline import video_to_translated_video
from services.master_pipeline import process_file



router = APIRouter()

UPLOAD_DIR = "temp_audio"
os.makedirs(UPLOAD_DIR, exist_ok=True)


@router.get("/")
def health_check():
    return {"status": "Backend is running"}


@router.post("/asr")
def speech_to_text(file: UploadFile = File(...)):
    file_path = os.path.join(UPLOAD_DIR, file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    transcription = asr_model.transcribe(file_path)

    return {
        "transcription": transcription
    }


@router.post("/translate")
def translate(
    text: str,
    source_lang: str,
    target_lang: str
):
    translated = translate_text(text, source_lang, target_lang)

    return {
        "translated_text": translated,
        "source": source_lang,
        "target": target_lang
    }


@router.post("/tts")
def generate_tts(
    text: str,
    language: str = "hi"
):
    audio_path = text_to_speech(text, language)

    return FileResponse(
        audio_path,
        media_type="audio/wav",
        filename="speech.wav"
    )

@router.post("/speech-to-speech")
def speech_to_speech_api(
    file: UploadFile = File(...),
    source_lang: str = "en",
    target_lang: str = "hi"
):
    file_path = f"temp_audio/{file.filename}"

    with open(file_path, "wb") as f:
        f.write(file.file.read())

    result = speech_to_speech(
        file_path,
        source_lang,
        target_lang
    )

    return FileResponse(
        result["audio_path"],
        media_type="audio/wav",
        filename="translated.wav"
    )

@router.post("/ott-export")
def ott_export(
    video: UploadFile = File(...),
    translated_audio: UploadFile = File(...)
):
    video_path = f"temp_audio/{video.filename}"
    audio_path = f"temp_audio/{translated_audio.filename}"
    output_path = "temp_audio/final_ott.mp4"

    with open(video_path, "wb") as v:
        shutil.copyfileobj(video.file, v)

    with open(audio_path, "wb") as a:
        shutil.copyfileobj(translated_audio.file, a)

    merge_audio_tracks(
        video_path=video_path,
        translated_audio_path=audio_path,
        output_path=output_path
    )

    return FileResponse(
        output_path,
        media_type="video/mp4",
        filename="ott_output.mp4"
    )


@router.post("/video-translate")
def video_translate(
    video: UploadFile = File(...),
    source_lang: str = "en",
    target_lang: str = "hi"
):
    video_path = f"temp_audio/{video.filename}"

    with open(video_path, "wb") as v:
        shutil.copyfileobj(video.file, v)

    output_video = video_to_translated_video(
        video_path,
        source_lang,
        target_lang
    )

    return FileResponse(
        output_video,
        media_type="video/mp4",
        filename="translated_video.mp4"
    )


@router.post("/process")
def process_api(
    file: UploadFile = File(...),
    source_lang: str = "en",
    target_lang: str = "hi"
):
    file_path = f"temp_audio/{file.filename}"

    with open(file_path, "wb") as f:
        f.write(file.file.read())

    result = process_file(
        file_path,
        source_lang,
        target_lang
    )

    if result["type"] == "audio":
        return FileResponse(
            result["output_path"],
            media_type="audio/wav",
            filename="translated.wav"
        )

    else:
        return FileResponse(
            result["output_path"],
            media_type="video/mp4",
            filename="translated_video.mp4"
        )
