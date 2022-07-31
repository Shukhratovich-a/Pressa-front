import Filter from "../Filter/Filter";

import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.container}`}>
        <h1 className={styles.hero__heading}>
          Eng so’ngi master klasslar va tadbirlar bizning saytda
        </h1>

        <Filter />
      </div>
    </section>
  );
};

export default Hero;
