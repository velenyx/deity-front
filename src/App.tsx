import { useState } from 'react'

export const App = () => {
  const [count, setCounter] = useState<number>(0)

  const increment = () => {
    setCounter(count + 5)
  }

  return (
    <div>
      {count}
      <button onClick={increment}>Increment</button>
    </div>
  )
}
