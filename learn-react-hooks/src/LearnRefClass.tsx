import { Component } from "react";

export class LearnRefClass extends Component {
  state = {
    message: "React.Component",
  };

  pleaseRememberMe = "저를 기억해 주세요."; // this.pleaseRememberMe

  handleUpdateState = () => {
    // immutable
    this.setState({
      message: this.state.message + "🥺",
    });
  };

  handleUpdateInstanceProperty = () => {
    //indexof => 배열에서 지정된 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환.
    if (this.pleaseRememberMe.indexOf("주세요") > -1) {
      this.pleaseRememberMe = "저를 기억해 주셨군요!😆";
    } else {
      // mutable
      this.pleaseRememberMe += "🥺";
    }
    console.log("updated this.pleaseRememberMe:", this.pleaseRememberMe);
  };

  render() {
    return (
      <div>
        <button type="button" onClick={this.handleUpdateState}>
          update greeting message
        </button>
        <h1>{this.state.message}</h1>
        <button type="button" onClick={this.handleUpdateInstanceProperty}>
          update remember me message
        </button>
        <p>{this.pleaseRememberMe}</p>
      </div>
    );
  }
}
