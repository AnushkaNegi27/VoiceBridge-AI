# 🚀 VoiceBridge-AI

<div align="center">

  **An end-to-end AI system for speech-to-speech and video translation across multiple languages.**

  [Documentation](https://docs-link.com) <!-- TODO: Add documentation link -->
</div>

---

## 📖 Overview

VoiceBridge-AI is a powerful, full-stack application designed to break down language barriers in multimedia content. It provides a comprehensive solution for real-time or offline speech-to-speech and video translation. By integrating advanced Automatic Speech Recognition (ASR), Neural Machine Translation (NMT), and Text-to-Speech (TTS) capabilities, VoiceBridge-AI processes audio and video input, translates the spoken content into a target language, and synthesizes it into natural-sounding speech, making global communication seamless and accessible. This system is ideal for transcribing lectures, translating interviews, localizing video content, and much more.

---

## ✨ Features

-   🎯 **End-to-End AI System:** Fully integrated pipeline from speech input to translated voice output.
-   🗣️ **Automatic Speech Recognition (ASR):** Accurately transcribes spoken language from audio and video inputs into text.
-   🌐 **Neural Machine Translation (NMT):** Translates recognized text across multiple languages using state-of-the-art neural models.
-   🎙️ **Text-to-Speech (TTS):** Synthesizes translated text into natural-sounding speech in the target language.
-   🎬 **Video Content Translation:** Processes video files, extracting audio for translation and potentially re-integrating translated audio or captions.
-   🌍 **Multilingual Support:** Designed to handle translation between a diverse range of languages.
-   ⚡ **Scalable Architecture:** Modular design supporting a powerful Python backend for AI inference and a responsive web frontend.

---


## 🧠 How It Works

1. User uploads an **audio or video file**
2. Speech is transcribed using **Whisper (ASR)**
3. Transcribed text is translated using **Transformer-based NMT**
4. Translated text is converted into speech
5. Output is returned as:
   - Translated audio file, or
   - Video with translated audio merged

---
## 🔊 Text-to-Speech Strategy

VoiceBridge-AI uses a **hybrid TTS approach**:

- **Piper TTS**  
  - Lightweight, offline, fast inference  
  - Used for supported languages  

- **Google gTTS (fallback)**  
  - Ensures wider language coverage  
  - Used when a language is not supported by Piper  

This approach balances **performance**, **offline capability**, and **language support**.

---

## 🖥️ Screenshots

<!-- TODO: Add actual screenshots of the application's user interface -->
![Screenshot of VoiceBridge-AI Dashboard](path-to-dashboard-screenshot.png)
![Screenshot of Translation in Progress](path-to-translation-screenshot.png)

---

## 🛠️ Tech Stack

### Backend & AI
- Python
- FastAPI
- Uvicorn
- Whisper (Open-source ASR)
- Hugging Face Transformers (Translation)
- Piper TTS (Offline Text-to-Speech)
- Google gTTS (Fallback TTS)
- FFmpeg

### Frontend
- React
- Vite
- Tailwind CSS

---

## 📂 Project Structure

```text
VoiceBridge-AI/
├── backend/
│   ├── app.py
│   ├── routes/
│   ├── services/
│   │   ├── asr.py
│   │   ├── translation.py
│   │   ├── tts.py
│   │   ├── pipeline.py
│   │   └── video_pipeline.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── notebooks/
│   ├── audio_preprocessing.ipynb
│   ├── whisper_training.ipynb
│   └── whisper_inference.ipynb
│
├── .gitignore
├── LICENSE
└── README.md

```

---

## ⚙️ Installation & Setup

**1️⃣ Clone the Repository**
```
git clone https://github.com/AnushkaNegi27/VoiceBridge-AI.git
cd VoiceBridge-AI
```

**2️⃣ Backend Setup (Python Virtual Environment)**
```
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows
venv\Scripts\activate

# Linux / Mac
source venv/bin/activate

```
Install Dependencies:
```
pip install -r requirements.txt
```
Run backend server:
```
uvicorn app:app --reload
```
Backend will run at:
```
http://127.0.0.1:8000
```

**3️⃣ Frontend Setup (React)**
```
cd ../frontend
npm install
npm run dev

```

Frontend will run at:
```
http://localhost:5173
```

---

## 🎯 Project Goals

-Build a real-world AI pipeline, not just a demo

-Emphasize modular design and extensibility

-Support audio + video workflows

-Balance performance and language coverage

---

## 🔮 Future Improvements

🎤 Real-time microphone translation

⏱️ Streaming inference for long files

📝 Subtitle generation

☁️ Cloud deployment (Docker / CI-CD)

---

## 👤 Author

Anushka Negi

---

## 📄 License

This project is licensed under the MIT License.



