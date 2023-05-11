import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <h1>Counter</h1>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>Click to add 1</button>
      <button onClick={() => setCounter(counter - 1)}>
        Click to subtract 1
      </button>
    </div>
  );
}

export default App;
