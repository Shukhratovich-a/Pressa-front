import React from "react";
import { Context } from "../Context/AdminToken";

const useAdminToken = (setterOnly = false) => {
  const ctx = React.useContext(Context);

  return setterOnly ? [ctx.setState] : [ctx.state, ctx.setState];
};

export default useAdminToken;
