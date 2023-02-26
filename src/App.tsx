import { IconComponent } from "./Icon";

import "./styles/App.scss";

interface AppProps {
  headline: string;
  description: JSX.Element;
}

export function App({ headline, description }: AppProps): JSX.Element {
  return (
    <div className="App App__container">
      <h1 className="App__Headline">{headline}</h1>
      <p>{description}</p>
      <IconComponent />
    </div>
  );
}
