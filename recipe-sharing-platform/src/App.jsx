import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css' // Tailwind imported here

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800 px-4">
      {/* Logos */}
      <div className="flex gap-8 mb-8">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="w-20 h-20 animate-spin-slow" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="w-20 h-20" alt="React logo" />
        </a>
      </div>

      {/* Heading */}
      <h1 className="text-5xl font-extrabold mb-8">Vite + React</h1>

      {/* Counter Card */}
      <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center gap-4">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
        >
          count is {count}
        </button>
        <p className="text-gray-600 text-center">
          Edit <code className="bg-gray-100 px-1 rounded">src/App.jsx</code> and save to test HMR
        </p>
      </div>

      {/* Footer */}
      <p className="mt-8 text-gray-500 text-center">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
