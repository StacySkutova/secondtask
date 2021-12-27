import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./reduxtoolkit/ToolkitRootReducer";
/*import { createStore } from "redux";*/

import App from "./App";
/*import rootReducer from "./redux/RootReducer";*/

import "./index.css";

/*const store = createStore(rootReducer);*/

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
