import React from "react";

import { Context } from "../Context/Organizers";

const useOrganizers = () => {
  const ctx = React.useContext(Context);

  return [ctx.state, ctx.setState];
};

export default useOrganizers;
