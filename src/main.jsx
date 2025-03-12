import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { QuizContextProvider } from "./contexts/QuizContext.jsx";
import { StrictMode } from "react";
const queryClientInstance = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <QuizContextProvider>
          <App />
        </QuizContextProvider>
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
);
