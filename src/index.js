import "./index.css";
import App from "./App";

import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import your route components too

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);