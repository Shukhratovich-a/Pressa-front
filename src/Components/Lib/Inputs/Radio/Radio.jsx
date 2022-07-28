import styles from "./Radio.module.scss";

const Radio = ({ value, isChecked, onChange }) => {
  return (
    <>
      <input
        className={`${styles.radio} visually-hidden`}
        type="radio"
        name="type"
        value={value}
        defaultChecked={isChecked}
        onChange={onChange}
      />
      <span className={styles["radio--controller"]}></span>
    </>
  );
};

export default Radio;
