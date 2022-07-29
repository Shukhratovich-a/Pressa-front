const useDate = (date, type = "date") => {
  const thisDate = new Date(date);

  const day = String(thisDate.getDate()).padStart(2, 0);
  const month = String(thisDate.getMonth() + 1).padStart(2, 0);
  const year = String(thisDate.getFullYear()).padStart(4, 0);
  const hour = String(thisDate.getHours()).padStart(2, 0);
  const minute = String(thisDate.getMinutes()).padStart(2, 0);

  if (type === "time") return hour + ":" + minute;
  return day + " / " + month + " / " + year;
};

export default useDate;
