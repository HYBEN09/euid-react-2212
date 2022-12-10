import { useDocumentTitle } from "@/hooks/useDocumentTitle";
// learn anime sideEffect
import anime from "animejs";

interface ButtonControlProps {
  count: number;
  onUpdate?: () => void;
}

export function ButtonControl({
  count,
  onUpdate,
}: ButtonControlProps): JSX.Element {
  useDocumentTitle((initialDocumentTitle) => {
    document.title = `(${count}) ${initialDocumentTitle}`;
  });

  return (
    <button
      type="button"
      className="myButton mt-2 px-2 py-1 bg-indigo-600 text-white"
      onClick={() => {
        onUpdate?.();
        anime({
          targets: ".myButton",
          scale: 1.3,
          rotate: "-1turn",
          backgroundColor: "#ff0",
          color: "#000",
          direction: "alternate",
        });
      }}
    >
      {count}
    </button>
  );
}
