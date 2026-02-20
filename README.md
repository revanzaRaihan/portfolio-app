<div align="center">

<img src="[https://capsule-render.vercel.app/api?type=waving&color=0f1215&height=250&section=header&text=PORTFOLIO&fontSize=80&fontColor=FF9644&desc=Revanza%20Raihan%20Rizqullah&descSize=20&descColor=ffffff](https://www.google.com/search?q=https://capsule-render.vercel.app/api%3Ftype%3Dwaving%26color%3D0f1215%26height%3D250%26section%3Dheader%26text%3DPORTFOLIO%26fontSize%3D80%26fontColor%3DFF9644%26desc%3DRevanza%2520Raihan%2520Rizqullah%26descSize%3D20%26descColor%3Dffffff)" width="100%" />

*to make a functional website with a nice ui and extended scalability*





*using tech as an excuse to make difficult things easier*

</div>

> **✨ Showcase & Architecture**
> A full-stack personal portfolio bridging seamless single-page application experiences without the complexity of a separate API. Built with a modern stack combining **Laravel** on the backend and **React + TypeScript** on the frontend, smoothly orchestrated by **Inertia.js**.

## 🛠️ The Tech Stack

| Layer | Technology | Description |
| --- | --- | --- |
| **Backend** | `Laravel (PHP)` | Robust routing, database management, and controllers. |
| **Frontend** | `React + TypeScript` | Type-safe, component-driven UI with fluid animations. |
| **Bridge** | `Inertia.js` | Monolith architecture with an SPA feel. |
| **Styling** | `Tailwind CSS` | Utility-first, highly customizable styling framework. |
| **Build Tool** | `Vite` | Lightning-fast HMR and optimized production builds. |
| **CI/CD** | `GitHub Actions` | Automated testing and deployment pipelines. |
| **Deployment** | `PM2` | Advanced process manager for production environments. |

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:

* **PHP** `^8.2`
* **Node.js** `^18`
* **Composer** & **NPM**
* **MySQL / SQLite**

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/revanzaRaihan/portfolio-app.git
cd portfolio-app

# 2. Install dependencies (Backend & Frontend)
composer install
npm install

# 3. Environment setup
cp .env.example .env
php artisan key:generate

# 4. Database configuration (.env) & Migrations
php artisan migrate

# 5. Build assets & Run servers
npm run build
php artisan serve

```

*Open [http://localhost:8000](https://www.google.com/search?q=http://localhost:8000) in your browser.*

## 📁 Project Structure

```text
portfolio-app/
├── app/                  # ⚙️ Laravel Application (Models, Controllers)
├── resources/
│   ├── js/               # ⚛️ React + TypeScript Frontend
│   └── views/            # 📄 Blade Entry Point (app.blade.php)
├── routes/               # 🛣️ Web & API Routes
├── database/             # 🗄️ Migrations & Seeders
├── .github/workflows/    # 🤖 CI/CD Pipelines
└── ecosystem.config.cjs  # 🚀 PM2 Production Config

```

## ⚙️ Deployment

This project utilizes **PM2** to manage the production environment. The ecosystem configuration is optimized and ready out of the box.

```bash
# Build production assets
npm run build

# Boot the application using PM2
pm2 start ecosystem.config.cjs

```

## 📄 License

This project is open-source and distributed under the [MIT License](https://www.google.com/search?q=LICENSE).

<div align="center">
<img src="[https://img.shields.io/badge/Made%20with%20](https://www.google.com/search?q=https://img.shields.io/badge/Made%2520with%2520)🖤%20by-Revanza%20Raihan-0f1215?style=flat-square&color=FF9644" alt="Made by Revanza Raihan"/>
</div>