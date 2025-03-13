import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx"; // Certifique-se que o caminho está correto

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
