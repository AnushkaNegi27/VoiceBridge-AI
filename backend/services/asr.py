import torch
import librosa
from transformers import WhisperProcessor, WhisperForConditionalGeneration

class WhisperASR:
    def __init__(self):
        self.processor = WhisperProcessor.from_pretrained(
            "openai/whisper-tiny",
            task="transcribe"
        )

        self.model = WhisperForConditionalGeneration.from_pretrained(
            "openai/whisper-tiny"
        )

        self.model.eval()

    def transcribe(self, audio_path: str) -> str:
        audio, _ = librosa.load(audio_path, sr=16000)

        inputs = self.processor(
            audio,
            sampling_rate=16000,
            return_tensors="pt"
        )

        with torch.no_grad():
            predicted_ids = self.model.generate(
                inputs["input_features"]
            )

        text = self.processor.batch_decode(
            predicted_ids,
            skip_special_tokens=True
        )[0]

        return text


# ✅ SINGLE GLOBAL INSTANCE (IMPORTANT)
asr_model = WhisperASR()
