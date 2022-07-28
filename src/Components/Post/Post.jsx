import User from "../Lib/Icons/User";
import Calendar from "../Lib/Icons/Calendar";
import Online from "../Lib/Icons/Online";

import styles from "./Post.module.scss";

const Post = ({ post }) => {
  return (
    <li className={styles.post}>
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
            <Online />
            <span>Online</span>
          </li>
          <li className={styles.post__item}>
            
            <span>2550</span>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default Post;
