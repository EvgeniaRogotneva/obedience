import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import Provider from "./state/Context";

import "bootstrap/dist/css/bootstrap.css"; // or include from a CDN
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import Header from "./newMenu/Header/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider>
    <React.StrictMode>
      <Header />
      {/* <App /> */}
    </React.StrictMode>
  </Provider>
);
