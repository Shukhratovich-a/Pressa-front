import React from "react";

import useCalendar from "../../Hooks/useCalendar";
import useDirections from "../../Hooks/useDirections";
import useTypes from "../../Hooks/useTypes";

import Calendar from "../Calendar/Calendar";
import Directions from "../Directions/Directions";
import Types from "../Types/Types";

import CalendarIcon from "../Lib/Icons/Calendar";
import DirectionIcon from "../Lib/Icons/Direction";
import OnlineIcon from "../Lib/Icons/Online";
import NameIcon from "../Lib/Icons/Person";
import Marker from "../Lib/Icons/Marker";

import styles from "./Filter.module.scss";

const Filter = () => {
  const [date] = useCalendar();
  const [directions] = useDirections();
  const [type] = useTypes();

  const normalizeDate = (date) => {
    const thisDate = new Date(date);

    const day = String(thisDate.getDate()).padStart(2, 0);
    const month = String(thisDate.getMonth() + 1).padStart(2, 0);
    const year = String(thisDate.getFullYear()).padStart(4, 0);

    return day + " / " + month + " / " + year;
  };

  const [calendarState, setCalendarState] = React.useState(false);
  const calendarRef = React.useRef(null);

  const [directionState, setDirectionState] = React.useState(false);
  const directionRef = React.useRef(null);

  const [typeState, setTypeState] = React.useState(false);
  const typeRef = React.useRef(null);

  const [nameState, setNameState] = React.useState(false);
  const nameRef = React.useRef(null);

  const states = {
    calendar: {
      state: calendarState,
      setState: setCalendarState,
      ref: calendarRef,
    },
    direction: {
      state: directionState,
      setState: setDirectionState,
      ref: directionRef,
    },
    type: {
      state: typeState,
      setState: setTypeState,
      ref: typeRef,
    },
    name: {
      state: nameState,
      setState: setNameState,
      ref: nameRef,
    },
  };

  const openAndClose = (button) => {
    const name = button.name;

    for (let key in states) {
      if (key === name) {
        const obj = states[name];
        if (obj.state) {
          obj.ref.current.style.opacity = 0;
          obj.ref.current.style.pointerEvents = "none";
          obj.ref.current.parentNode.children[0].classList.remove(
            styles["filter__item__button--open"]
          );

          setTimeout(() => {
            obj.setState(false);
          }, 300);
        } else {
          obj.ref.current.style.opacity = 1;
          obj.ref.current.style.pointerEvents = "all";
          obj.ref.current.parentNode.children[0].classList.add(
            styles["filter__item__button--open"]
          );
          obj.setState(true);
        }
      } else {
        states[key].ref.current.style.opacity = 0;
        states[key].ref.current.style.pointerEvents = "none";
        states[key].ref.current.parentNode.children[0].classList.remove(
          styles["filter__item__button--open"]
        );
        setTimeout(() => {
          states[key].setState(false);
        }, 300);
      }
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    console.log(date, directions, type);
  };

  return (
    <form className={styles.filter} onSubmit={handleSubmit}>
      <ul className={styles.filter__list}>
        <li className={`${styles.filter__item}`}>
          <button
            className={styles.filter__item__button}
            type="button"
            name="calendar"
            onClick={(evt) => openAndClose(evt.target.closest("button"))}
          >
            <CalendarIcon />
            <span>{normalizeDate(date)}</span>
            <Marker />
          </button>

          <div className={`${styles.filter__item__inner}`} ref={calendarRef}>
            {calendarState ? <Calendar /> : null}
          </div>
        </li>

        <li className={`${styles.filter__item}`}>
          <button
            className={styles.filter__item__button}
            type="button"
            name="direction"
            onClick={(evt) => openAndClose(evt.target.closest("button"))}
          >
            <DirectionIcon />
            <span>Bo’lim tanlang</span>
            <Marker />
          </button>

          <div className={`${styles.filter__item__inner}`} ref={directionRef}>
            {directionState ? <Directions /> : null}
          </div>
        </li>

        <li className={`${styles.filter__item}`}>
          <button
            className={styles.filter__item__button}
            type="button"
            name="type"
            onClick={(evt) => openAndClose(evt.target.closest("button"))}
          >
            <OnlineIcon />
            <span>Online / Offline</span>
            <Marker />
          </button>

          <div className={`${styles.filter__item__inner}`} ref={typeRef}>
            {typeState ? <Types /> : null}
          </div>
        </li>

        <li className={`${styles.filter__item}`}>
          <button
            className={styles.filter__item__button}
            type="button"
            name="name"
            onClick={(evt) => openAndClose(evt.target.closest("button"))}
          >
            <NameIcon />
            <span>Ism familya</span>
            <Marker />
          </button>

          <div className={`${styles.filter__item__inner}`} ref={nameRef}>
            {nameState ? <Calendar /> : null}
          </div>
        </li>
      </ul>

      <button className={styles.filter__button} type="submit">
        Izlash
      </button>
    </form>
  );
};

export default Filter;
