import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import state from "./state";
import App from "./App";
import "./styles/index.scss";
import { Modal } from "./hoc";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={state}>
      <Modal>
        <App />
      </Modal>
    </Provider>
  </React.StrictMode>
);
