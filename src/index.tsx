// index.tsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import NotificationCenter from "./NotificationCenter";

ReactDOM.render(
  <React.StrictMode>
    <NotificationCenter>
      <App />
    </NotificationCenter>
  </React.StrictMode>,
  document.getElementById("root")
);
