import { Component, useState } from "react";
import "./styles/App.scss";

interface Props {
  headline?: string;
  description?: string | JSX.Element;
}

type State = Required<Props>;

export class App extends Component<Props, State> {
  // state: State;

  constructor(props: Props) {
    super(props);

    this.state = {
      headline: props.headline || "React Application",
      description: props.description || (
        <>
          React is <abbr title="User Interface">UI</abbr> Library
        </>
      ),
    };
  }

  render() {
    const { headline, description } = this.state;
    return (
      <div className="App">
        <h1 className="App__Headline">{headline}</h1>
        <p>{description}</p>
      </div>
    );
  }
}
