<div align="center">

# 🌐 Portfolio App

### A modern personal portfolio — built with Laravel & React (Inertia.js)

[![Live Site](https://img.shields.io/badge/🔗%20Live%20Site-lenallen.my.id-6366f1?style=for-the-badge)](https://lenallen.my.id)
![PHP](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)
![Laravel](https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

</div>

---

## ✨ About

A full-stack personal portfolio application showcasing projects, skills, and experience. Built with a modern stack combining **Laravel** on the backend and **React + TypeScript** on the frontend, bridged seamlessly with **Inertia.js** for a smooth single-page app experience — without the complexity of a separate API.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Backend** | Laravel (PHP) |
| **Frontend** | React + TypeScript |
| **Bridge** | Inertia.js |
| **Build Tool** | Vite |
| **Styling** | Tailwind CSS |
| **Linting** | ESLint + Prettier |
| **Process Manager** | PM2 (ecosystem.config.cjs) |
| **CI/CD** | GitHub Actions |

---

## 🚀 Getting Started

### Prerequisites

- PHP `^8.2`
- Composer
- Node.js `^18`
- A database (MySQL / SQLite)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/revanzaRaihan/portfolio-app.git
cd portfolio-app

# 2. Install PHP dependencies
composer install

# 3. Install Node dependencies
npm install

# 4. Set up environment
cp .env.example .env
php artisan key:generate

# 5. Configure your database in .env, then run migrations
php artisan migrate

# 6. Build frontend assets
npm run build
```

### Running Locally

```bash
# Start the Laravel dev server
php artisan serve

# Start the Vite dev server (in a separate terminal)
npm run dev
```

Then open [http://localhost:8000](http://localhost:8000) in your browser.

---

## 📁 Project Structure

```
portfolio-app/
├── app/                  # Laravel application (Models, Controllers, etc.)
├── resources/
│   ├── js/               # React + TypeScript frontend
│   └── views/            # Blade entry point
├── routes/               # Web & API routes
├── database/             # Migrations & seeders
├── public/               # Static assets
├── .github/workflows/    # CI/CD pipelines
└── vite.config.ts        # Vite configuration
```

---

## ⚙️ Deployment

This project uses **PM2** for process management in production. The `ecosystem.config.cjs` file is pre-configured for easy deployment.

```bash
# Build for production
npm run build

# Start with PM2
pm2 start ecosystem.config.cjs
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

Made with ❤️ by [revanzaRaihan](https://github.com/revanzaRaihan) · [lenallen.my.id](https://lenallen.my.id)

</div>