import { useState, useReducer, useEffect, useRef } from "react";
import {
  countReducer,
  decrementCount,
  incrementCount,
  initialCountState,
  resetCount,
} from "./features/count";

export function LearRefFunction() {
  const containerRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    const { current: containerElement } = containerRef;
    if (containerElement) {
      containerElement.style.cssText = `
        padding: 20px;
        border: 4px solid currentColor;
        color: #51e7cc;
      `;
    }
  }, []);

  /* -------------------------------------------------------------------------- */

  let pleaseRememberMeRef = useRef<string>("나를 기억해주세요.");

  // console.log("initialization pleaseRememberMe", pleaseRememberMeRef);

  const [message, setMessage] = useState<string>("React.FC");
  const [countState, dispatch] = useReducer(countReducer, initialCountState);

  const handleUpdateState = () => {
    setMessage((prevMessage) => prevMessage + "😃");
  };

  const handleUpdateRefData = () => {
    if (pleaseRememberMeRef.current.indexOf("주세요") > -1) {
      pleaseRememberMeRef.current = "나를 기억해주셨군요! 😉";
    } else {
      pleaseRememberMeRef.current += "🥹";
    }

    console.log(
      "updated pleaseRememberMe variable in Function",
      pleaseRememberMeRef.current
    );
  };

  return (
    <div lang="en" ref={containerRef}>
      <button type="button" onClick={handleUpdateState}>
        update greeting message
      </button>
      <h1>{message}</h1>
      <button type="button" onClick={handleUpdateRefData}>
        update remember me message
      </button>
      <p>{pleaseRememberMeRef.current}</p>

      <hr />

      <div
        style={{
          display: "flex",
          gap: 4,
          marginBottom: 20,
        }}
      >
        <button
          type="button"
          onClick={() => {
            dispatch(incrementCount());
          }}
        >
          increment
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch(decrementCount());
          }}
        >
          decrement
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch(resetCount());
          }}
        >
          reset
        </button>
      </div>

      <output
        style={{
          fontSize: 40,
          fontWeight: 700,
        }}
      >
        {countState.count}
      </output>
    </div>
  );
}
