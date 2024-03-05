import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// const root = document.getElementById("root");
// const app = ReactDOM.createRoot(root);
// app.render(<h1>Hello</h1>);
// why I don't see result locally?
// why I can't add bracets (it should be  ((h1)))

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
