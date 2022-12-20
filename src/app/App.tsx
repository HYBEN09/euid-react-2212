import { useEffect, useState } from "react";
// import { ButtonControl } from "@/components/Form/index";
// import { FormControls } from "./FormControls";
import "@/styles/App.scss";
import { UserList } from "@/components/Users";

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
  //*============================================================================

  //? React 상태관리
  const [count, setCount] = useState<number>(100);

  const handleButtonClick = () => {
    console.log("Button clicked!!");
    setCount(count + 1);
  };

  //사이드 이펙트 처리 ( 연관된 상태와 함께 묶어서 사용 -> 관심사의 분리 )
  useEffect(() => {
    // side effect 처리 로직
    //React와 관련 없는 처리
    // document.title = `(${count}) ${ORIGINAL_DOCUMENT_TITLE}`;
  });

  //? API1
  // useDocumentTitle("hello");

  //* ----------------------------------------------------------------------
  //? sideEffect : Component 함수 내에서 불러온건 값을 찿지 못한다.
  // console.log(document.querySelector(".App")); //null

  //*============================================================================

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

  //*============================================================================

  // React 이벤트 리스너(핸들러) → 콜백(callback)
  // 사이드 이펙트 (실제 DOM에 접근 가능)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleUpdateHeadlineAndDescription = ({
    headline,
    description,
  }: Props) => {
    setHeadline(headline);
    setDescription(description);

    (document.querySelector(".App") as HTMLDivElement).style.cssText = `
      background:red;
      color:black;
    `;
  };

  return (
    <div className="App">
      {/* <FormControls onUpdate={handleUpdateHeadlineAndDescription} /> */}
      <h1 className="App__Headline">{headline}</h1>
      <p>{description}</p>
      {/* <ButtonControl count={count} onUpdate={handleButtonClick} /> */}
      <UserList />
    </div>
  );
}
