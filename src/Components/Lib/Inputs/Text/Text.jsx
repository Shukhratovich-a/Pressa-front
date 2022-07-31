import styles from "./Text.module.scss";

const Text = ({ className, name, title, isDisabled, arialabel }) => {
  return (
    <label
      className={`${styles.label} ${isDisabled ? styles["label--disabled"] : ""} ${className}`}
    >
      <span className={styles.text}>{title}</span>
      <input
        className={styles.input}
        type={"text"}
        name={name}
        placeholder={title}
        disabled={isDisabled}
        aria-label={arialabel}
        // required
      />
    </label>
  );
};

export default Text;
