import React from "react";
import "./App.scss";
import { Signup } from "./components/signup/index";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true
    };
  }

  render() {
    const { isLogginActive } = this.state;
    return (
      <div className="App">
        <div className="signup">
          <div className="container" ref={ref => (this.container = ref)}>
            {isLogginActive && (
              <Signup containerRef={ref => (this.current = ref)} />
            )}
            
          </div>
        </div>
      </div>
    );
  }
}

const RightSide = props => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
    </div>
  );
};

export default App;