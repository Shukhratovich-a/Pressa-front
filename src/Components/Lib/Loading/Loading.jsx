import styles from "./Loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.loading}>
      <svg className={styles["loading-icon"]} height="26" viewBox="0 0 32 32" width="26">
        <circle id={styles["circle-1"]} cx="16" cy="16" fill="none" r="14" strokeWidth={3} />
        <circle id={styles["circle-2"]} cx="16" cy="16" fill="none" r="14" strokeWidth={3} />
      </svg>
    </div>
  );
};

export default Loading;
