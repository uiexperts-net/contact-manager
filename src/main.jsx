import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx"; // Keep only one import
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
