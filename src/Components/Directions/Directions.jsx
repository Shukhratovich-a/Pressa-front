import React from "react";

import useDirections from "../../Hooks/useDirections";

import Tick from "../Lib/Icons/Tick";

import styles from "./Directions.module.scss";

const Directions = () => {
  const [directions, setDirections] = useDirections();

  const handleCheck = (evt, value, subValue) => {
    const array = [...directions];

    const directionIndex = array.findIndex((direction) => direction.title === value);
    const subDirectionIndex = array[directionIndex].subDirection.findIndex(
      (subDirection) => subDirection.title === subValue
    );

    array[directionIndex].subDirection[subDirectionIndex].isChecked = evt.target.checked;

    setDirections(array);
  };

  return (
    <div className={styles.directions}>
      <ul className={styles.directions__list}>
        {directions.map((direction) => (
          <li className={styles.direction} key={direction.title}>
            <h3 className={styles.direction__heading}>{direction.title}</h3>

            <ul className={styles.direction__sublist}>
              {direction.subDirection.map((subDirection) => (
                <li className={styles.subdirection} key={subDirection.title}>
                  <label className={styles.subdirection__label}>
                    <input
                      className={`${styles.subdirection__input} visually-hidden`}
                      type={"checkbox"}
                      defaultValue={subDirection.title}
                      defaultChecked={subDirection.isChecked}
                      onChange={(evt) => handleCheck(evt, direction.title, subDirection.title)}
                    />
                    <span className={styles["subdirection__input--controller"]}>
                      <Tick />
                    </span>
                    <h4 className={styles.subdirection__title}>{subDirection.title}</h4>
                  </label>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Directions;
