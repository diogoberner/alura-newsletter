import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ArticlesProvider } from "./context/ArticlesContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ArticlesProvider>
      <App />
    </ArticlesProvider>
  </StrictMode>
);
