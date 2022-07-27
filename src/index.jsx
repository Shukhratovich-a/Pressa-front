import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { Provider as CalendarProvider } from "./Context/Calendar";
import { Provider as DirectionsProvider } from "./Context/Directions";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CalendarProvider>
        <DirectionsProvider>
          <App />
        </DirectionsProvider>
      </CalendarProvider>
    </BrowserRouter>
  </React.StrictMode>
);
