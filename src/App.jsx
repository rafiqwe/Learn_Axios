import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <h1>Hello world</h1>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Click Me </button>
      </div>
    </>
  )
}

export default App
