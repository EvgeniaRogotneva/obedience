import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Provider from "./state/Context";

import "bootstrap/dist/css/bootstrap.css"; // or include from a CDN
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import Body from "./newMenu/Body/Body";
import Header from "./newMenu/Header/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider>
    <React.StrictMode>
      <Header />
      <Body />
    </React.StrictMode>
  </Provider>
);
