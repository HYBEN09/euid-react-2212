import { useId, useState } from "react";
import type { Props as AppProps } from "@/app/App";
import "@/styles/FormControl.scss";

interface Props {
  onUpdate?: ({ headline, description }: AppProps) => void;
}

export function FormControls({ onUpdate }: Props) {
  const headlineId: string = useId();
  const descriptionId: string = useId();

  const [inputedHeadline, setInputedHeadline] = useState<string>("");
  const handleUpdateHeadline: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    const { value } = e.target;
    setInputedHeadline(value);
  };

  const [inputedDescription, setInputedDescription] = useState<string>("");
  const handleUpdateDescription: React.ChangeEventHandler<
    HTMLTextAreaElement
  > = (e) => {
    const { value } = e.target;
    setInputedDescription(value);
  };

  const handleUpdate = () => {
    onUpdate?.({
      headline: inputedHeadline,
      description: inputedDescription,
    });
  };

  return (
    <div className="FormControls">
      <div className="FormControl">
        <label htmlFor={headlineId}>Headline</label>
        <input
          id={headlineId}
          type="text"
          value={inputedHeadline}
          onChange={handleUpdateHeadline}
        />
      </div>
      <div className="FormControl">
        <label htmlFor={descriptionId}>Description</label>
        <textarea
          id={descriptionId}
          value={inputedDescription}
          onChange={handleUpdateDescription}
        />
      </div>
      <button type="button" className="ButtonSave" onClick={handleUpdate}>
        save
      </button>
    </div>
  );
}
