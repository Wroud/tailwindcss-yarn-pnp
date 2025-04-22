import { useState } from 'react'
import './index.css'

export function App({className}: { className?: string }) {
  const [count, setCount] = useState(0)

  return (
    <div className={className}>
      <h1>Vite + React</h1>
      <div className="twp:flex twp:items-center twp:justify-center twp:min-h-screen twp:bg-gray-100">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}
