import React from "react";

import useDirections from "../../Hooks/useDirections";

import CheckBox from "../Lib/Inputs/CheckBox/CheckBox";

import Loading from "../Lib/Loading/Loading";

import styles from "./Directions.module.scss";

const Directions = () => {
  const [directions, setDirections] = useDirections();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (directions.length) setLoading(false);
  }, [directions]);

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
    <div className={`${styles.directions} ${loading ? styles["directions--loading"] : ""}`}>
      <ul className={`${styles.directions__list}`}>
        {directions.length > 0 &&
          directions.map((direction) => (
            <li className={styles.direction} key={direction.id}>
              <h3 className={styles.direction__heading}>{direction.title}</h3>

              <ul className={`${styles.direction__sublist}`}>
                {direction.subDirection.length > 0 &&
                  direction.subDirection.map((subDirection) => (
                    <li className={styles.subdirection} key={subDirection.id}>
                      <label className={styles.subdirection__label}>
                        <CheckBox
                          value={subDirection.title}
                          isChecked={subDirection.isChecked}
                          name={'directions'}
                          onChange={(evt) => handleCheck(evt, direction.title, subDirection.title)}
                        />
                        <h4 className={styles.subdirection__title}>{subDirection.title}</h4>
                      </label>
                    </li>
                  ))}
              </ul>
            </li>
          ))}
      </ul>

      {loading && <Loading />}
    </div>
  );
};

export default Directions;
