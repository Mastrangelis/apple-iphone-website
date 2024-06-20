import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import * as Sentry from "@sentry/react";
import "./index.css";

Sentry.init({
  dsn: "https://160274d4bb3d6f8e3dcb4fb81b710ee6@o4507463695663104.ingest.de.sentry.io/4507463697236048",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect: React.useEffect,
    }),
    Sentry.replayIntegration(),
  ],
  tracesSampleRate: 1.0,
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
