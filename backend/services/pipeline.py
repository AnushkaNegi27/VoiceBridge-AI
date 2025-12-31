from services.asr import asr_model
from services.translation import translate_text
from services.tts import text_to_speech

def speech_to_speech(audio_path, source_lang, target_lang):
    
    text = asr_model.transcribe(audio_path)

    translated_text = translate_text(
        text,
        source_lang,
        target_lang
    )

    audio_out = text_to_speech(
        translated_text,
        target_lang
    )

    return {
        "original_text": text,
        "translated_text": translated_text,
        "audio_path": audio_out
    }
