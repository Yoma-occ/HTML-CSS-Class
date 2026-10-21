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