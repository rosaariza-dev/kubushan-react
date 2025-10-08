import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const isDevelopment = import.meta.env.DEV;

createRoot(document.getElementById("root")).render(
  isDevelopment ? (
    // Sin StrictMode en desarrollo
    <App />
  ) : (
    // Con StrictMode en producción
    <StrictMode>
      <App />
    </StrictMode>
  )
);
