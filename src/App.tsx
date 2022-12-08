import { useState } from "react";
import { FormControls } from "./FormControls";
import "./styles/App.scss";

export interface Props {
  headline?: string;
  description?: string | JSX.Element;
}

//? props 안에서 description 타입 속성만 가져(픽 해)오기.
// type DescriptionProps = Pick< Props,'description' >
// type DescriptionProps = string | JSX.Element

//? 객체 빼오기
// type DescriptionProps = Props["description"];
export function App({
  headline: initialHeadline,
  description: initialDescription,
}: Props): JSX.Element {
  const [headline, setHeadline] = useState<string | undefined>(
    initialHeadline || "React Application"
  );
  //lookup types | indexed access types
  const [description, setDescription] = useState<Props["description"]>(
    initialDescription || (
      <>
        React is <abbr title="User Interface">UI</abbr> Library
      </>
    )
  );

  const handleUpdateHeadlineAndDescription = ({
    headline,
    description,
  }: Props) => {
    setHeadline(headline);
    setDescription(description);
  };

  return (
    <div className="App">
      <FormControls onUpdate={handleUpdateHeadlineAndDescription} />
      <h1 className="App__Headline">{headline}</h1>
      <p>{description}</p>
    </div>
  );
}
