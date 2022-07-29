import React from "react";

import useOrganizers from "../../Hooks/useOrganizers";

import CheckBox from "../Lib/Inputs/CheckBox/CheckBox";

import Loading from "../Lib/Loading/Loading";

import styles from "./Organizers.module.scss";

const Organizers = () => {
  const [organizers, setOrganizers] = useOrganizers();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (organizers.length) setLoading(false);
  }, [organizers]);

  const handleCheck = (evt, name) => {
    const array = [...organizers];
    let organizer = array.find((item) => item.name === name);
    organizer.isChecked = evt.target.checked;

    setOrganizers(array);
  };

  return (
    <div className={`${styles.organizers} ${loading ? styles["organizers--loading"] : ""}`}>
      <ul className={`${styles.organizers__list}`}>
        {organizers.length > 0 &&
          organizers.map((organizer, index) => (
            <li className={styles.organizer} key={index}>
              <label className={styles.organizer__label}>
                <CheckBox
                  onChange={(evt) => handleCheck(evt, organizer.name)}
                  value={organizer.id}
                  isChecked={organizer.isChecked}
                  name={"organizers"}
                />
                <span className={styles.organizer__name}>{organizer.name}</span>
              </label>
            </li>
          ))}
      </ul>

      {loading && <Loading />}
    </div>
  );
};

export default Organizers;
