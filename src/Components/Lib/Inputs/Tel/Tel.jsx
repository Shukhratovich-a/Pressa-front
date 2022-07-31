import styles from "./Tel.module.scss";

const Tel = ({ name, title, isDisabled, arialabel }) => {
  return (
    <label className={styles.label}>
      <span className={styles.text}>{title}</span>
      <input
        className={styles.input}
        type={"tel"}
        name={name}
        defaultValue={"+998 "}
        onChange={(evt) => {
          const value = evt.target.value.split("");
          let str = "";

          if (value.length >= 18) {
            value.pop();
            evt.target.value = value.join("");
            return;
          }

          for (let i = 0; i < value.length; i++) {
            if (i === 4 && value[i] !== " ") {
              str = str + " " + value[i];
            } else if (i === 7 && value[i] !== " ") {
              str = str + " " + value[i];
            } else if (i === 11 && value[i] !== " ") {
              str = str + " " + value[i];
            } else if (i === 14 && value[i] !== " ") {
              str = str + " " + value[i];
            } else {
              str += value[i];
            }
          }
          evt.target.value = str;
        }}
        onKeyDown={(evt) => {
          if (
            ![1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "Control", "Shift", "Alt"].includes(evt.key) &&
            ![48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 17, 16, 18].includes(evt.keyCode) &&
            evt.key !== "Backspace" &&
            evt.keyCode !== 8
          ) {
            evt.preventDefault();
          }

          if (
            evt.target.value === "+998 " &&
            evt.code === "Backspace" &&
            evt.key === "Backspace" &&
            evt.keyCode === 8
          ) {
            evt.preventDefault();
          }

          if (
            evt.code === "Backspace" &&
            evt.key === "Backspace" &&
            evt.keyCode === 8 &&
            (evt.target.value === "+998 " ||
              evt.target.value === "+998" ||
              evt.target.value === "+99" ||
              evt.target.value === "+9" ||
              evt.target.value === "+" ||
              evt.target.value === "")
          ) {
            evt.target.value = "+998 ";
          }
        }}
        aria-label={arialabel}
        disabled={isDisabled}
        required
      />
    </label>
  );
};

export default Tel;
