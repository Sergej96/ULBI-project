import ReactDOM from "react-dom/client";
import Counter from "./components/Counter";
import { StrictMode } from "react";
import App from "./App";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
