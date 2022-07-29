import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { Provider as CalendarProvider } from "./Context/Calendar";
import { Provider as DirectionsProvider } from "./Context/Directions";
import { Provider as TypesProvider } from "./Context/Types";
import { Provider as OrganizersProvider } from "./Context/Organizers";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CalendarProvider>
        <DirectionsProvider>
          <TypesProvider>
            <OrganizersProvider>
              <App />
            </OrganizersProvider>
          </TypesProvider>
        </DirectionsProvider>
      </CalendarProvider>
    </BrowserRouter>
  </React.StrictMode>
);
