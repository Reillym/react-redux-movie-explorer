import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

const renderApp = () => {
  render(
    <Router>
      <App />
    </Router>,
    document.getElementById("app")
  );
};

renderApp();

if (module.hot) {
  module.hot.accept("./App", () => {
    renderApp();
  });
}
