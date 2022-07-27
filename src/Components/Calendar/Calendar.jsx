import React from "react";
import ReactCalendar from "react-calendar";

import useCalendar from "../../Hooks/useCalendar";

import "react-calendar/dist/Calendar.css";
import "./Calendar.scss";

const Calendar = () => {
  const [date, setDate] = useCalendar();

  return (
    <div className="calendar">
      <ReactCalendar onChange={setDate} value={date} locale={"en-EN"} />
    </div>
  );
};

export default Calendar;
