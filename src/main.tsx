import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { AppContextProvider } from "./context/AppContext";
import { BrowserRouter as Router} from 'react-router-dom';

import "./tailwind.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppContextProvider>
      <Router>
      <App />
      </Router>
    </AppContextProvider>
  </StrictMode>
);
