import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import ObdClasses from "./newMenu/newMenu";
import App from "./App";
import Provider from "./state/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider>
    <React.StrictMode>
      {/* <ObdClasses /> */}
      <App />
    </React.StrictMode>
  </Provider>
);
