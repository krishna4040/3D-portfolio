
# Express.js + Vite + Tailwind CSS Template

This template provides a minimal yet powerful development setup using **Express.js**, **Vite**, and **Tailwind CSS**. It is designed for fast, scalable web applications with consistent code quality. This structure leverages a single HTTP server (**Express.js**) and a **Vite**-powered frontend that builds static files (HTML, CSS, JS) and serves them through Express. This setup is ideal for modern full-stack applications where the frontend is decoupled but still served by the same server, enabling seamless development and deployment.

## Features

- **Express.js** ![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express)  
  Lightweight backend framework for routing and API handling.

- **Vite** ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite)  
  Fast build tool with HMR (Hot Module Replacement), optimizing frontend development.

- **Tailwind CSS** ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=flat-square&logo=tailwind-css)  
  Utility-first CSS framework for fast UI styling.

- **ESLint** ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint)  
  JavaScript linting to maintain consistent coding practices.

- **Prettier** ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=prettier)  
  Code formatter to ensure clean and consistent code.

- **Lefthook** ![Lefthook](https://img.shields.io/badge/Lefthook-181E23?style=flat-square&logo=git)  
  Git hooks for pre-commit linting and formatting.

- **Docker** ![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker)  
  Containerization for smooth development and deployment.

- **Nodemon** ![Nodemon](https://img.shields.io/badge/Nodemon-76e2f9?style=flat-square&logo=nodemon)  
  Development tool that automatically restarts the server on file changes.

- **Concurrently** ![Concurrently](https://img.shields.io/badge/Concurrently-00B5CC?style=flat-square&logo=npm)  
  Run multiple npm scripts concurrently, such as backend and frontend dev servers.

## Project Structure

```
└── 📁app
    └── 📁frontend
        └── 📁.git
        └── 📁public
            └── vite.svg
        └── 📁src
            └── 📁assets
                └── react.svg
            └── App.css
            └── App.jsx
            └── index.css
            └── main.jsx
        └── .prettierrc.yml
        └── eslint.config.js
        └── index.html
        └── package-lock.json
        └── package.json
        └── README.md
        └── vite.config.js
    └── 📁server
        └── index.js
    └── .dockerignore
    └── .gitignore
    └── .prettierrc.yml
    └── docker-compose.yml
    └── Dockerfile
    └── eslint.config.js
    └── lefthook.yml
    └── package-lock.json
    └── package.json
    └── README.md
    └── .env
```

## Introduction

This structure provides a clean separation of concerns while using **Express.js** for API and backend logic, and **Vite** to handle the frontend build process. The frontend is built into static files (HTML, CSS, JS) using **Vite** and **Tailwind CSS**, and served by the **Express.js** backend. This setup ensures:

- **Faster development** with Vite's Hot Module Replacement (HMR).
- **Improved code consistency** with **ESLint** and **Prettier**.
- **Easy deployment** using Docker for containerization, ensuring your app runs consistently across environments.
- **Minimal configuration** to get started with a modern full-stack application.

The combination of a single backend server for both serving APIs and static files from the frontend minimizes complexity, making it a great solution for many projects that do not require a separate frontend server.

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/express-vite-tailwind-template.git
cd express-vite-tailwind-template
```

### 2. Install dependencies

```bash
# Backend dependencies
cd backend
npm install

# Frontend dependencies
cd ../frontend
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory to store your environment variables.

## Development

### Backend (Express.js)

To start the backend server:

```bash
cd backend
npm run dev
```

### Frontend (Vite)

To start the frontend development server with Vite (which proxies API requests to the backend):

```bash
cd frontend
npm run dev
```

### Docker

To build and run the backend and frontend services with Docker:

```bash
docker-compose up --build
```

This command will spin up both containers (backend and frontend). The frontend container will serve the built static files, and the backend container will handle API requests.

## Code Consistency

### Linting

- **ESLint** is set up to ensure your code follows the defined coding standards. You can manually lint your code by running:

  ```bash
  npm run lint
  ```

### Formatting

- **Prettier** ensures code formatting consistency. To manually format your code, run:

  ```bash
  npm run format
  ```

### Git Hooks with Lefthook

**Lefthook** automatically runs linters and formatters on pre-commit. To install Lefthook hooks:

```bash
lefthook install
```

## Production Build

### 1. Build frontend assets

To build the static files (HTML, CSS, JS):

```bash
cd frontend
npm run build
```

This will generate optimized static files in the `frontend/dist/` folder.

### 2. Serve static files with Express

The Express server is configured to serve static files from the `dist` folder, so you don't need any additional configuration.

### 3. Run Docker Compose in production mode

To run the production-ready containers with Docker Compose:

```bash
docker-compose -f docker-compose.prod.yml up --build -d
```

This will start the backend and frontend in production mode with optimized settings.

## License

MIT License. See `LICENSE` for details.
