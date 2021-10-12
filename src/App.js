import React from "react";
import logo from "./logo.svg";
import { Provider } from "react-redux";
import { TEST_ACTION } from "./utils/types.utils";
import { useState } from "react";
import { UseSetState } from "./utils/common.utils";
import store from "./store/store";
import "./App.scss";
import { TestScreen } from "./screens/test/test.screen";



function App() {
  // const [state, setState] = useState({
  //   point: 0,
  //   elevation: 0,
  // });

  const [state, setState] = UseSetState({
    point: 0,
    elevation: 0,
  })

  const onChange = () => {
   
  }
  return (
    <Provider store={store}>
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div
            onClick={() => {
              setState({ point: state.point + 1 });
            }}
          >
            Edit <code>src/App.tsx</code> and save to reload.
          </div>
          {console.log("State", state.point)}
          <div>{state.point}</div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <TestScreen />
      </div>
    </Provider>
  );
}

export default App;
