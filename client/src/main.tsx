import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { reportWebVitals, trackPageLoad } from "./lib/web-vitals";

reportWebVitals();
trackPageLoad();

createRoot(document.getElementById("root")!).render(<App />);
