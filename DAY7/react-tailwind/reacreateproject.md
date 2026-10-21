# Recreate This Project from Scratch

## React + Tailwind CSS "Hello World" — Era Academy

This guide creates the project manually so you can see how React, Vite, and
Tailwind CSS fit together. Follow the steps in order.

## What You Will Build

A simple React app that includes:

- A heading styled with Tailwind CSS
- A counter made with React's `useState` hook
- A button with hover and transition styles
- A production build created by Vite

## Prerequisites

Install Node.js before starting:

- **Recommended:** Node.js 24 LTS
- **Minimum for this project:** Node.js 22.12
- **Package manager:** npm, which is included with Node.js

Check your versions:

```bash
node --version
npm --version
```

If Node.js is missing or too old, download the current LTS release from
[nodejs.org](https://nodejs.org/).

> Node.js 18 and 20 are end-of-life releases and should not be used for this
> lesson.

## Step 1: Create the Project Folder

Open a terminal in the folder where you keep your projects, then run:

```bash
mkdir react-tailwind
cd react-tailwind
```

## Step 2: Initialize npm

```bash
npm init -y
```

This creates `package.json`, which records the project's commands and
dependencies.

## Step 3: Install the Dependencies

Install React as an application dependency:

```bash
npm install react react-dom
```

Install Vite, its React plugin, and Tailwind's Vite integration as development
dependencies:

```bash
npm install --save-dev vite @vitejs/plugin-react tailwindcss @tailwindcss/vite
```

The commands intentionally do not contain version numbers. npm installs the
current stable releases and records the exact resolved dependency tree in
`package-lock.json`.

The packages used by this lesson are:

- `react` — builds the user interface
- `react-dom` — renders React into the browser DOM
- `vite` — runs the development server and production build
- `@vitejs/plugin-react` — adds React JSX and Fast Refresh support to Vite
- `tailwindcss` — provides Tailwind's utility classes
- `@tailwindcss/vite` — connects Tailwind CSS 4 directly to Vite

Tailwind CSS 4 handles imports and vendor prefixing for this setup. Do not
install Autoprefixer, and do not create PostCSS or Tailwind configuration files
for this introductory project.

## Step 4: Update package.json

Replace the contents of `package.json` with the following. These dependency
versions were current and tested on October 20, 2026. If npm installed a newer
compatible patch version, keep the newer version it recorded.

```json
{
  "name": "react-tailwind-demo",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "engines": {
    "node": ">=22.12.0"
  },
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^19.3.1",
    "react-dom": "^19.3.1"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.3.3",
    "@vitejs/plugin-react": "^6.1.2",
    "tailwindcss": "^4.3.3",
    "vite": "^8.3.4"
  }
}
```

Run `npm install` once more if you changed any dependency version while editing
the file:

```bash
npm install
```

Also create `.gitignore` so generated folders are not committed to source
control:

```gitignore
node_modules/
dist/
*.local
```

## Step 5: Create the Vite Configuration

Create `vite.config.js` in the project root:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    open: true,
  },
})
```

This enables React and Tailwind CSS, uses port 5173, and asks Vite to open the
browser when the development server starts.

## Step 6: Create the HTML Entry Point

Create `index.html` in the project root:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello World - React + Tailwind | Era Academy</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

React will render the application inside `<div id="root"></div>`.

## Step 7: Create the Source Folder and CSS Entry Point

Create the source folder:

```bash
mkdir src
```

Create `src/index.css`:

```css
@import "tailwindcss";
```

This single import loads Tailwind CSS 4. Tailwind automatically detects the
class names used by files in this project.

## Step 8: Create the React Entry Point

Create `src/main.jsx`:

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

`createRoot` connects React to the HTML root element. `StrictMode` adds extra
development checks that help catch common mistakes.

## Step 9: Create the App Component

Create `src/App.jsx`:

```jsx
import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100 p-4">
      <header className="mb-12 text-center">
        <h1 className="mb-2 text-4xl font-bold text-gray-800">
          Hello World - React + Tailwind
        </h1>
        <p className="text-lg text-gray-600">Era Academy Teaching Demo</p>
      </header>

      <main className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-xl">
        <div className="mb-8">
          <p className="mb-4 text-5xl font-bold text-blue-600">{count}</p>
          <button
            type="button"
            onClick={() => setCount((currentCount) => currentCount + 1)}
            className="transform rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-blue-600"
          >
            Click Me!
          </button>
        </div>

        <div className="space-y-3 text-left">
          <h2 className="border-b pb-2 text-xl font-semibold text-gray-700">
            What's Inside:
          </h2>
          <ul className="space-y-1 text-sm text-gray-600">
            <li>Vite + React 19 + Tailwind CSS 4</li>
            <li>
              React event handling with{' '}
              <code className="rounded bg-gray-100 px-1">onClick</code>
            </li>
            <li>
              Tailwind utilities such as{' '}
              <code className="rounded bg-gray-100 px-1">text-4xl</code> and{' '}
              <code className="rounded bg-gray-100 px-1">bg-blue-500</code>
            </li>
            <li>Hover states and transitions</li>
          </ul>
        </div>
      </main>

      <footer className="mt-12 text-center text-sm text-gray-500">
        <p>&copy; 2026 Era Academy - Student Project</p>
      </footer>
    </div>
  )
}
```

The button's `onClick` handler calls `setCount`. The functional update form
receives the latest count and returns the next value.

## Step 10: Start the Development Server

```bash
npm run dev
```

You should see output similar to:

```text
VITE v8.x.x ready in xxx ms

➜  Local: http://localhost:5173/
```

The browser should open automatically. If it does not, visit
`http://localhost:5173/`. Click **Click Me!** and confirm that the number
increases.

Stop the development server by pressing `Ctrl+C` in the terminal.

## Step 11: Build for Production

Create an optimized build:

```bash
npm run build
```

Vite writes the production files to `dist/`. Test that build locally with:

```bash
npm run preview
```

`vite preview` is for local verification; use a web host or production server
when publishing the contents of `dist/`.

## Final Project Structure

```text
react-tailwind/
├── .gitignore
├── index.html
├── package.json
├── package-lock.json       (created by npm)
├── vite.config.js
├── node_modules/           (created by npm install)
└── src/
    ├── App.jsx
    ├── index.css
    └── main.jsx
```

You should not have `tailwind.config.js` or `postcss.config.js` in this basic
Tailwind CSS 4 project.

## Command Reference

| Command | What it does |
|---|---|
| `npm install` | Install dependencies from `package.json` |
| `npm ci` | Reproduce the exact versions in `package-lock.json` |
| `npm run dev` | Start the development server |
| `npm run build` | Create the production build |
| `npm run preview` | Preview the production build locally |

## Troubleshooting

### `npm` is not recognized or `npm: command not found`

Install Node.js 24 LTS, then close and reopen your terminal.

### Vite reports an unsupported Node.js version

Run `node --version`. Upgrade to Node.js 24 LTS if the result is below 22.12.

### Port 5173 is already in use

Stop the other development server or change `port` in `vite.config.js`.

### The page has no Tailwind styles

Check all three Tailwind integration points:

1. `tailwindcss()` appears in the `plugins` array in `vite.config.js`.
2. `src/index.css` contains `@import "tailwindcss";`.
3. `src/main.jsx` imports `./index.css`.

### The page is blank

Open the browser developer tools with `F12` and check the Console. Confirm that
`index.html` contains `<div id="root"></div>` and loads `/src/main.jsx`.

Happy coding! — Era Academy
