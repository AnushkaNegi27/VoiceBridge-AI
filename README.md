# 🚀 VoiceBridge-AI

<div align="center">

  **An end-to-end AI system for audio, video, live voice, and YouTube speech translation using open-source multilingual models.**

  [Documentation](https://docs-link.com) <!-- TODO: Add documentation link -->
</div>

---

## 📖 Overview

VoiceBridge-AI is a powerful, full-stack application designed to break down language barriers in multimedia content. It provides a comprehensive solution for real-time or offline speech-to-speech and video translation. By integrating advanced Automatic Speech Recognition (ASR), Neural Machine Translation (NMT), and Text-to-Speech (TTS) capabilities, VoiceBridge-AI processes audio and video input, translates the spoken content into a target language, and synthesizes it into natural-sounding speech, making global communication seamless and accessible. This system is ideal for transcribing lectures, translating interviews, localizing video content, and much more.

---

## ✨ Key Features

- 🎧 **Audio File Translation**
  - Upload WAV / MP3 files
  - Get translated audio output

- 🎬 **Video Translation**
  - Upload MP4 / MKV videos
  - Extracts speech, translates it, and merges translated audio back

- 🎙️ **Live Voice Translation**
  - Record directly from the microphone
  - Receive translated speech output

- 🔗 **YouTube Video Translation**
  - Paste YouTube URL
  - Generates translated video with dubbed audio

- 🌍 **Multilingual Translation (12+ languages)**
  - English, Hindi, Gujarati, Marathi, Tamil, Telugu, Bengali, Kannada, Malayalam, French, Spanish, German

- 🧠 **Open-Source AI Models**
  - Whisper for ASR
  - NLLB-200 for multilingual translation
  - Hybrid TTS (Piper + gTTS)

- ⚡ **Local Inference Support**
  - No mandatory cloud APIs
  - Works fully on local machine

---


## 🧠 How It Works

1. User uploads an **audio or video file**
2. Speech is transcribed using **Whisper (ASR)**
3. Transcribed text is translated using **NLLB-200**
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

This hybrid approach was chosen to avoid high GPU/CPU load while still maintaining wide language support.
This approach balances **performance**, **offline capability**, and **language support**.

---

## 🌍 Supported Languages

Currently supported languages include:

- English (en)
- Hindi (hi)
- Gujarati (gu)
- Marathi (mr)
- Tamil (ta)
- Telugu (te)
- Bengali (bn)
- Kannada (kn)
- Malayalam (ml)
- French (fr)
- Spanish (es)
- German (de)

The system is designed to be easily extendable to additional languages supported by NLLB-200.

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
|   |   └── api.py
│   ├── services/
│   │   ├── asr.py
|   |   ├── master_pipeline.py
|   |   ├── packaging.py
|   |   ├── pipeline.py
│   │   ├── translation.py
│   │   ├── tts.py
│   │   ├── video_pipeline.py
│   │   └── youtube_video_pipeline.py
|   |
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

- Build a real-world AI pipeline (not just a demo)
- Focus on modular and extensible design
- Support both audio and video workflows
- Balance performance, accuracy, and language coverage

---

## 💡 Why VoiceBridge-AI?

Unlike simple translation demos, VoiceBridge-AI focuses on:

- Real multimedia workflows (audio, video, YouTube)
- Open-source models instead of paid APIs
- Offline capability
- End-to-end system design, not isolated components

  ---


## 🔮 Future Improvements

⏱️ Streaming inference for long files

📝 Subtitle generation

☁️ Cloud deployment (Docker / CI-CD)

---

## 👤 Author

Anushka Negi

---

## 📄 License

This project is licensed under the MIT License.



