import User from "../Lib/Icons/User";
import Calendar from "../Lib/Icons/Calendar";
import Type from "../Lib/Icons/Type";

import styles from "./LastPosts.module.scss";

const LastPosts = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <section className={styles["last-posts"]}>
      <div className={`container ${styles.container}`}>
        <h2 className={styles["last-posts__heading"]}>Oxirgi e’lonlar</h2>

        <ul className={styles["last-posts__list"]}>
          {array.map((item) => (
            <li className={styles.post} key={item}>
              <img
                className={styles.post__image}
                src={"https://via.placeholder.com/407x417/006aff"}
                alt=""
                width={407}
                height={417}
              />

              <div className={styles.post__inner}>
                <h3 className={styles.post__heading}>
                  Alisher Isaevdan biznes va IT bo’yicha master klass
                </h3>

                <ul className={styles.post__list}>
                  <li className={styles.post__item}>
                    <User />
                    <span>Alisher Isaev</span>
                  </li>
                  <li className={styles.post__item}>
                    <span>Tadbirkor</span>
                  </li>
                  <li className={styles.post__item}>
                    <Calendar />
                    <span>17 / 01 / 2022</span>
                  </li>
                  <li className={styles.post__item}>
                    <span>15:00</span>
                  </li>
                  <li className={styles.post__item}>
                    <Type />
                    <span>Online</span>
                  </li>
                  <li className={styles.post__item}>
                    <span>2550</span>
                  </li>
                </ul>
              </div>
            </li>
          ))}
        </ul>

        <button className={styles["last-posts__button"]} type={"button"}>
          Ko’proq ko’rish
        </button>
      </div>
    </section>
  );
};

export default LastPosts;
