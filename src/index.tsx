import * as ReactDOMClient from "react-dom/client";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const rootElement = document.getElementById("root");

// ReactDOM.render(<App />, rootElement);

const root = ReactDOMClient.createRoot(rootElement);

root.render(<App />);
