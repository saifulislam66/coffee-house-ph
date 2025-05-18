import { createContext, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";

import { HelmetProvider } from "react-helmet-async";
import { router } from "./Route.jsx";
import ContextProvider from "./Pages/Coffee-Auth-Context/ContextProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </StrictMode>
);
