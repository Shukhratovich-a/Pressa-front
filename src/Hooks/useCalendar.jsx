import React from "react";

import { Context } from "../Context/Calendar";

const useCalendar = () => {
  const ctx = React.useContext(Context);

  return [ctx.state, ctx.setState];
};

export default useCalendar;
