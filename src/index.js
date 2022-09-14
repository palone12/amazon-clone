import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { initialState } from "./components/reducer";
import { StateProvider } from "./components/StateProvider";
import reducer from "./components/reducer";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <Router>
        <App />
      </Router>
    </StateProvider>
  </React.StrictMode>
);
