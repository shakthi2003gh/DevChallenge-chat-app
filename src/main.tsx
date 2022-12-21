import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import state from "./state";
import App from "./App";
import "./styles/index.scss";
import { Modal } from "./hoc";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={state}>
      <BrowserRouter>
        <Modal>
          <App />
        </Modal>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
