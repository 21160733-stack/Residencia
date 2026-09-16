import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { AuthProvider } from "./app/context/AuthContext.jsx";

// Global Styles
import "./app/styles/buttons.css";
import "./app/styles/forms.css";
import "./app/styles/index.css";
import "./app/styles/layout.css";

// Page Styles
import "./modules/auth/styles/login.css";
import "./modules/auth/styles/recover.css";
import "./modules/auth/styles/register.css";
import "./modules/dashboard/styles/dashboard.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);