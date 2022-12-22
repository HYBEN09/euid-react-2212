import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { LearnRefClass } from "./LearnRefClass";
import { LearnRefFunction } from "./LearnRefFunction";

function App() {
  const [count, setCount] = useState(0);

  // 1. DOM요소 참조 ( reference )
  // 2. state, props는 React 리-렌더링에 영향을 준다. 반면, ref의 기억된 값은 리-렌더링에 영향을 주지 않는다.

  // `ref` prop
  // callback Ref
  // React.forwardRef()
  // React.createRef()
  // React.useRef()

  // useState vs. useRef

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div
        style={{
          display: "flex",
          gap: 30,
        }}
      >
        <LearnRefClass />
        <LearnRefFunction />
      </div>
    </div>
  );
}

export default App;
