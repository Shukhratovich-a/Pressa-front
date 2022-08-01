import React from "react";
const Context = React.createContext("");

function Provider({ children }) {
  const [state, setState] = React.useState(
    JSON.parse(window.sessionStorage.getItem("token")) || ""
  );

  React.useEffect(() => {
    if (state) {
      window.sessionStorage.setItem("token", JSON.stringify(state));
    } else {
      window.sessionStorage.removeItem("token");
    }
  }, [state]);
  return <Context.Provider value={{ state, setState }}>{children}</Context.Provider>;
}

export { Context, Provider };
