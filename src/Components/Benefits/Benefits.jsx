import styles from "./Benefits.module.scss";

const Benefits = () => {
  return (
    <section className={styles.benefits}>
      <div className={`container`}>
        <ul className={styles.benefits__list}>
          <li className={styles.benefit}>
            <h3 className={styles.benefit__heading}>E’LONLARINGIZNI BIZNI SAYTDA BERING</h3>
          </li>

          <li className={styles.benefit}>
            <h3 className={styles.benefit__heading}>ENG SO’NGI MASTER KLASLAR BIZNING SAYTDA</h3>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Benefits;
