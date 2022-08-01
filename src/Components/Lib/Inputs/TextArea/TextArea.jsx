import styles from "./TextArea.module.scss";

const TextArea = ({ className, name, title, isDisabled, arialabel }) => {
  return (
    <label
      className={`${styles.label} ${isDisabled ? styles["label--disabled"] : ""} ${className}`}
    >
      <span className={styles.text}>{title}</span>
      <textarea
        className={styles.input}
        cols="40"
        rows="10"
        name={name}
        placeholder={title}
        disabled={isDisabled}
        aria-label={arialabel}
      ></textarea>
    </label>
  );
};

export default TextArea;
