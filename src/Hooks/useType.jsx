import React from "react";

import { Context } from "../Context/Type";

const useType = () => {
  const ctx = React.useContext(Context);

  return [ctx.state, ctx.setState];
};

export default useType;
