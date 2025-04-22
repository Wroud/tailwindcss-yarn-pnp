import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "dep";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App className="twp:p-10"/>
  </StrictMode>
);
