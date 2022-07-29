import Tick from "../../Icons/Tick";

import styles from "./CheckBox.module.scss";

const CheckBox = ({ value, isChecked, onChange, name }) => {
  return (
    <>
      <input
        className={`${styles.input} visually-hidden`}
        type={"checkbox"}
        defaultValue={value}
        defaultChecked={isChecked ? true : false}
        name={name}
        onChange={onChange}
      />
      <span className={styles["input--controller"]}>
        <Tick />
      </span>
    </>
  );
};

export default CheckBox;
