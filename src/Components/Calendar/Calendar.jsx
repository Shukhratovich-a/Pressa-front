import React from "react";
import ReactCalendar from "react-calendar";

import "react-calendar/dist/Calendar.css";
import "./Calendar.scss";

const Calendar = () => {
  const [date, setDate] = React.useState(new Date());

  return (
    <div className="calendar">
      <ReactCalendar onChange={setDate} value={date} locale={"en-EN"} />
    </div>
  );
};

export default Calendar;
