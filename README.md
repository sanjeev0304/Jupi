# 🚨 Jupi Shield — Rugpull Risk Detector + Swap Advisor 🛡️💱



**SafeSwap** is a Web3 dashboard built using React + Jupiter API that helps users **detect risky tokens** (e.g., rugpulls), view risk reports in real-time, and **swap with confidence** using Jupiter’s powerful liquidity engine.

---

## 🔍 What It Does

> 🧠 "Why blindly swap when you can swap *safely*?"

✅ Analyze wallet tokens for red flags  
✅ Check **rugpull risks** like Low Organic Activity  
✅ Get **real-time risk reports**  
✅ Instantly **simulate swaps** using Jupiter Ultra  
✅ 🚀 Swap only when it's safe (or get warned!)

---

## 🛠 Tech Stack

| Layer       | Tech Used                                |
|-------------|-------------------------------------------|
| Frontend    | React (Vite), TailwindCSS, Solana Wallet Adapter |
| Web3 APIs   | 🧠 Jupiter API (Token + Shield + Quote)           |
| Backend     | Node.js, Express, hosted on Render        |
| Deployment  | Vercel (Frontend), Render (Backend)       |

---

## 🧪 Features Breakdown

### 🧬 Token Risk Analyzer
- Fetches tokens from your connected wallet
- Checks for `LOW_ORGANIC_ACTIVITY` and other warnings
- Displays warning levels: 🟢 Safe, 🟡 Caution, 🔴 Dangerous

### 🔗 Swap Recommendation (Coming Soon)
- Detects **high-risk tokens**
- Recommends swapping to stablecoins (USDC, USDT)
- “Swap Now” integrated using Jupiter Quote API

### 📡 Real-Time Risk Monitoring
- Automatically scans all SPL tokens on load
- Highlights risky ones before users act

---

## 📸 Screenshots

| Landing   | Dashboard   | Risk page   |
|-----------|-------------|-------------|
| ![1](https://github.com/user-attachments/assets/4efc7a43-11ba-442c-ba78-86966f8cad58) | ![2](https://github.com/user-attachments/assets/ee22ef01-747d-42ec-8cb4-fc000115af6f) | ![3](https://github.com/user-attachments/assets/31a3e462-ee85-4993-8d27-7ff4708c80de) |

---

## 🚀 Getting Started

### 🧑‍💻 Local Setup
Clone the Repository
```bash
git clone https://github.com/sanjeev0304/Jupi.git
```
Frontend Setup
```bash
cd Jupi/Frontend
npm install
npm run dev
```
Backend Setup
```bash
cd Jupi/Backend
npm install
npm start
```
