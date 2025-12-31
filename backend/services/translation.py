# backend/services/translation.py

from transformers import AutoTokenizer, AutoModelForSeq2SeqLM
import torch

DEVICE = "cuda" if torch.cuda.is_available() else "cpu"

MODEL_NAME = "facebook/nllb-200-distilled-600M"

tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME)
model = AutoModelForSeq2SeqLM.from_pretrained(MODEL_NAME).to(DEVICE)
model.eval()

LANG_MAP = {
    "en": "eng_Latn",
    "hi": "hin_Deva",
    "fr": "fra_Latn",
    "es": "spa_Latn",
    "de": "deu_Latn",
    "ta": "tam_Taml",
    "te": "tel_Telu",
    "bn": "ben_Beng",
    "mr": "mar_Deva",
    "gu": "guj_Gujr",
    "kn": "kan_Knda",
    "ml": "mal_Mlym",
}


def translate_text(text: str, source_lang: str, target_lang: str):
    if source_lang not in LANG_MAP or target_lang not in LANG_MAP:
        raise ValueError("Unsupported language")

    tokenizer.src_lang = LANG_MAP[source_lang]

    chunks = chunk_text(text)
    translated_chunks = []

    for chunk in chunks:
        inputs = tokenizer(
            chunk,
            return_tensors="pt",
            padding=True,
            truncation=True
        ).to(DEVICE)

        with torch.no_grad():
            tokens = model.generate(
                **inputs,
                forced_bos_token_id=tokenizer.convert_tokens_to_ids(
                    LANG_MAP[target_lang]
                ),
                max_length=256
            )

        translated_text = tokenizer.batch_decode(
            tokens,
            skip_special_tokens=True
        )[0]

        translated_chunks.append(translated_text)

    return " ".join(translated_chunks)



def chunk_text(text, max_chars=230):
    sentences = text.split(".")
    chunks = []
    current = ""

    for sentence in sentences:
        if len(current) + len(sentence) <= max_chars:
            current += sentence + "."
        else:
            chunks.append(current.strip())
            current = sentence + "."

    if current:
        chunks.append(current.strip())

    return chunks
