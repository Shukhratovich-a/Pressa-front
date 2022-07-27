import React from "react";

import { Context } from "../Context/Directions";

const useDirections = () => {
  const ctx = React.useContext(Context);

  return [ctx.state, ctx.setState];
};

export default useDirections;
