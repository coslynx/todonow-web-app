<div class="hero-icon" align="center">
  <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
</div>

<h1 align="center">
simple-svelte-todo-mvp
</h1>
<h4 align="center">A minimal, clean, single-page todo list application built with SvelteKit, featuring local persistence.</h4>
<h4 align="center">Developed with the software and tools below.</h4>
<div class="badges" align="center">
  <img src="https://img.shields.io/badge/Framework-SvelteKit_v2.20.4-FF3E00?style=flat-square" alt="SvelteKit">
  <img src="https://img.shields.io/badge/UI-Svelte_v5.25.7_&_Tailwind_CSS_v4.1.3-38BDF8?style=flat-square" alt="Svelte & Tailwind CSS">
  <img src="https://img.shields.io/badge/Persistence-Browser_localStorage-F7DF1E?style=flat-square" alt="localStorage">
  <img src="https://img.shields.io/badge/Build_Tool-Vite_v6.2.5-646CFF?style=flat-square" alt="Vite">
  <img src="https://img.shields.io/badge/Language-TypeScript_v5.8.3-3178C6?style=flat-square" alt="TypeScript">
</div>
<div class="badges" align="center">
  <img src="https://img.shields.io/github/last-commit/coslynx/simple-svelte-todo-mvp?style=flat-square&color=5D6D7E" alt="git-last-commit" />
  <img src="https://img.shields.io/github/commit-activity/m/coslynx/simple-svelte-todo-mvp?style=flat-square&color=5D6D7E" alt="GitHub commit activity" />
  <img src="https://img.shields.io/github/languages/top/coslynx/simple-svelte-todo-mvp?style=flat-square&color=5D6D7E" alt="GitHub top language" />
</div>

## 📑 Table of Contents
- 📍 Overview
- 📦 Features
- 📂 Structure
- 💻 Installation
- 🏗️ Usage
- 🌐 Hosting
- 📄 License
- 👏 Authors

## 📍 Overview
This repository contains the Minimum Viable Product (MVP) for `simple-svelte-todo-mvp`, a streamlined single-page application designed for basic task management. It utilizes SvelteKit as the framework, providing a fast and reactive user experience. Data persistence is handled entirely client-side using the browser's `localStorage`, making it a lightweight, serverless solution ideal for quick, personal task tracking. Styling is managed with Tailwind CSS for a clean and modern look.

## 📦 Features
|    | Feature            | Description                                                                                                        |
|----|--------------------|--------------------------------------------------------------------------------------------------------------------|
| ⚙️ | **Architecture**   | Built as a Static Single-Page Application (SPA) using SvelteKit and `@sveltejs/adapter-static`. Features a component-based structure (`AddTodoForm`, `TodoItem`, `TodoList`) and centralized state management (`todoStore.js`). |
| 📄 | **Documentation**  | Includes this README providing an overview, tech stack details, setup, usage, and deployment guidance. Code comments explain key logic within components and the store. |
| 🔗 | **Dependencies**   | Core dependencies include `svelte`, `@sveltejs/kit`, and `uuid`. Dev dependencies include `vite`, `tailwindcss`, `postcss`, `autoprefixer`, `eslint`, `prettier`, `typescript`, and `@sveltejs/adapter-static`. |
| 🧩 | **Modularity**     | Code is organized into reusable Svelte components (`src/lib/components`) and a dedicated store (`src/lib/stores`) for state logic, promoting maintainability. |
| 🏎️ | **Reactivity**     | Leverages Svelte's built-in reactivity and stores (`writable`) for seamless UI updates when the todo list changes. |
| 💾 | **Persistence**    | Todo list data is saved directly in the browser's `localStorage`, ensuring tasks persist across browser sessions on the same device. |
| ✨ | **Styling**        | Utilizes Tailwind CSS for utility-first styling, configured via `tailwind.config.cjs` and `postcss.config.cjs`, applied globally in `src/app.css`. |
| 🔧 | **Tooling**        | Includes scripts for development (`dev`), building (`build`), previewing (`preview`), type checking (`check`), linting (`lint`), and formatting (`format`), integrated via `package.json`. |
| 🆔 | **Unique IDs**     | Uses the `uuid` library to generate unique identifiers for each todo item, necessary for keyed list updates and item manipulation. |
| 🚀 | **Deployment**     | Designed for easy deployment to any static web hosting provider (Netlify, Vercel, GitHub Pages, etc.) due to the static adapter build. |

## 📂 Structure
```text
.
├── .env
├── README.md
├── commands.json
├── package.json
├── postcss.config.cjs
├── src
│   ├── app.css
│   ├── app.d.ts
│   ├── app.html
│   ├── lib
│   │   ├── components
│   │   │   ├── AddTodoForm.svelte
│   │   │   ├── TodoItem.svelte
│   │   │   └── TodoList.svelte
│   │   └── stores
│   │       └── todoStore.js
│   └── routes
│       ├── +layout.svelte
│       └── +page.svelte
├── static
│   └── favicon.ico
├── startup.sh
├── svelte.config.js
├── tailwind.config.cjs
└── vite.config.js
```

## 💻 Installation
 > [!WARNING]
 > ### 🔧 Prerequisites
 > - Node.js (Version compatible with Vite 6.2.5 and SvelteKit 2.20.4 - typically Node.js >= 18)
 > - npm (v8 or higher recommended, comes with Node.js)

 > [!TIP]
 > It's recommended to use the Node.js LTS version.

 ### 🚀 Setup Instructions
 1. Clone the repository:
    ```bash
    git clone https://github.com/coslynx/simple-svelte-todo-mvp.git
    cd simple-svelte-todo-mvp
    ```
 2. Install dependencies:
    ```bash
    npm install
    ```
 3. No database setup or complex environment variable configuration is needed for the core MVP functionality. The `.env` file is included for potential future extensions.

## 🏗️ Usage
### 🏃‍♂️ Running the MVP
1.  **Start the development server:**
    This command starts Vite's development server with Hot Module Replacement (HMR) enabled.
    ```bash
    npm run dev
    ```
    The application will typically be available at `http://localhost:5173` (or the next available port).

2.  **Building for Production:**
    This command uses Vite and `@sveltejs/adapter-static` to create an optimized, static build in the `build/` directory (or the adapter's configured output).
    ```bash
    npm run build
    ```

3.  **Previewing the Production Build:**
    This command serves the contents of the `build/` directory locally, allowing you to test the production build before deployment.
    ```bash
    npm run preview
    ```

 > [!TIP]
 > ### ⚙️ Quality Checks
 > - **Linting & Formatting Check:** Verify code style consistency.
 >   ```bash
 >   npm run lint
 >   ```
 > - **Type Checking:** Check for TypeScript errors in `.svelte` and `.ts` files.
 >   ```bash
 >   npm run check
 >   ```
 > - **Auto-Formatting:** Automatically format code using Prettier.
 >   ```bash
 >   npm run format
 >   ```

### 📚 Examples
The application provides a simple user interface:
-   **Adding a Todo:** Type your task into the input field at the top and press Enter or click the "Add" button.
-   **Viewing Todos:** All current todos are listed below the input form.
-   **Completing a Todo:** Click the checkbox next to a task to mark it as complete (it will be visually struck through). Click again to mark it as incomplete.
-   **Deleting a Todo:** Click the 'X' button next to a task to permanently remove it from the list.
-   **Persistence:** Close and reopen your browser tab; your tasks should remain as they were saved in `localStorage`.

## 🌐 Hosting
### 🚀 Deployment Instructions
This application is built as a static site and can be deployed to any static hosting provider.

#### Example: Deploying to Netlify
1.  Push your code to a Git repository (GitHub, GitLab, Bitbucket).
2.  Log in to Netlify and connect your Git repository.
3.  Configure the build settings:
    -   **Build command:** `npm run build`
    -   **Publish directory:** `build` (or the output directory configured in `svelte.config.js` if changed)
4.  Click "Deploy site". Netlify will automatically build and deploy your application.

#### Example: Deploying to Vercel
1.  Push your code to a Git repository.
2.  Log in to Vercel and import your Git repository.
3.  Vercel typically auto-detects SvelteKit projects. Verify the settings:
    -   **Framework Preset:** SvelteKit
    -   **Build Command:** `npm run build`
    -   **Output Directory:** `build` (Vercel should detect this from the SvelteKit preset)
4.  Click "Deploy". Vercel will build and deploy your site.

#### Example: Deploying to GitHub Pages
1.  Ensure your `svelte.config.js` uses `@sveltejs/adapter-static`.
2.  Build the application: `npm run build`.
3.  Configure GitHub Pages to deploy from the `build` directory (or the configured output directory) on your chosen branch (e.g., `gh-pages` or the `main` branch root/docs folder). You might need to use a GitHub Action for automated deployment.

 > [!NOTE]
 > No server-side infrastructure or database is required for this MVP.

### 🔑 Environment Variables
The core MVP functionality does not rely on environment variables defined in `.env`. However, the file is included for standard practice and potential future extensions. If you add features that require environment variables (e.g., connecting to an API), follow these conventions:
- Variables needed in the browser **must** be prefixed with `VITE_` (e.g., `VITE_API_URL=...`). These are embedded during the build process.
- Variables needed only during the build process (e.g., in `vite.config.js`) do not need the prefix.
- **Never commit sensitive keys or secrets** directly into the `.env` file if the repository is public. Use platform-specific secret management tools for deployment environments.

Example variables (not used by default):
- `VITE_FEATURE_FLAG_NEW_UI`: `true`
- `ANALYTICS_ID`: `UA-12345-Y` (Build-time only)

## 📜 API Documentation
This is a purely **client-side application**. It does not have its own backend API endpoints. All data operations (add, toggle, delete, view) are performed directly within the browser and persisted using the browser's `localStorage` API.

No external API calls are made for the core todo functionality.


 > [!NOTE]
 > ## 📜 License & Attribution
 >
 > ### 📄 License
 > This Minimum Viable Product (MVP) is licensed under the [GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/) license.
 >
 > ### 🤖 AI-Generated MVP
 > This MVP was entirely generated using artificial intelligence through [CosLynx.com](https://coslynx.com).
 >
 > No human was directly involved in the coding process of the repository: simple-svelte-todo-mvp
 >
 > ### 📞 Contact
 > For any questions or concerns regarding this AI-generated MVP, please contact CosLynx at:
 > - Website: [CosLynx.com](https://coslynx.com)
 > - Twitter: [@CosLynxAI](https://x.com/CosLynxAI)

<p align="center">
  <h1 align="center">🌐 CosLynx.com</h1>
</p>
<p align="center">
  <em>Create Your Custom MVP in Minutes With CosLynxAI!</em>
</p>
<div class="badges" align="center">
<img src="https://img.shields.io/badge/Developers-Drix10,_Kais_Radwan-red" alt="">
<img src="https://img.shields.io/badge/Website-CosLynx.com-blue" alt="">
<img src="https://img.shields.io/badge/Backed_by-Google,_Microsoft_&_Amazon_for_Startups-red" alt="">
<img src="https://img.shields.io/badge/Finalist-Backdrop_Build_v4,_v6-black" alt="">
</div>