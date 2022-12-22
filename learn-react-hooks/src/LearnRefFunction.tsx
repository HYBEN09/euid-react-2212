import { useRef, useState } from "react";

export function LearnRefFunction() {
  const [message, setMessage] = useState("React.FC");

  const handleUpdateState = () => {
    setMessage((prevMessage) => prevMessage + "😇");
  };

  let pleaseRememberMeRef = useRef("저를 기억해 주세요.");

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
    <div>
      <button type="button" onClick={handleUpdateState}>
        update greeting message
      </button>
      <h1>{message}</h1>
      <button type="button" onClick={handleUpdateRefData}>
        update remember me message
      </button>
      <p>{pleaseRememberMeRef.current}</p>
    </div>
  );
}
