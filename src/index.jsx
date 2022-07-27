import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { Provider as CalendarProvider } from "./Context/Calendar";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CalendarProvider>
        <App />
      </CalendarProvider>
    </BrowserRouter>
  </React.StrictMode>
);
