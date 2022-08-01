import React from "react";
import { HOST } from "../config";

const Context = React.createContext(null);

function Provider({ children }) {
  const [state, setState] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const responce = await fetch(HOST + "/organizers");
      const data = await responce.json();

      if (data.status === 200 && data.data.length > 0) {
        const array = [];

        for (let organizer of data.data) {
          const obj = {
            id: organizer.organizer_id,
            name: organizer.organizer_name,
            isChecked: false,
          };

          array.push(obj);
        }

        setState(array);
      }
    })();
  }, []);

  return <Context.Provider value={{ state, setState }}>{children}</Context.Provider>;
}

export { Context, Provider };
