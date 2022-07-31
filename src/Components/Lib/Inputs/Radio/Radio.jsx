import React from "react";

import styles from "./Radio.module.scss";

const Radio = React.forwardRef(({ value, isChecked, onChange, name }, ref) => {
  return (
    <>
      <input
        className={`${styles.radio} visually-hidden`}
        type="radio"
        name={name}
        value={value}
        ref={ref}
        defaultChecked={isChecked}
        onChange={onChange}
      />
      <span className={styles["radio--controller"]}></span>
    </>
  );
});

export default Radio;
