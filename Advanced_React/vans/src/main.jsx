import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Initialize the MirageJS server only in development
if (process.env.NODE_ENV === "development") {
  import("./server").then(({ makeServer }) => {
    makeServer(); // This initializes the MirageJS server
  });
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
