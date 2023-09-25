import { QueryClientProvider, QueryClient } from "react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";

const qc = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={qc}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
