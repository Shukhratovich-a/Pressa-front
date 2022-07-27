import React from "react";

const Context = React.createContext(null);

function Provider({ children }) {
  const [state, setState] = React.useState(new Date());

  return <Context.Provider value={{ state, setState }}>{children}</Context.Provider>;
}

export { Context, Provider };
