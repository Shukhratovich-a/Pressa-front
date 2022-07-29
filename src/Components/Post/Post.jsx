import useDate from "../../Hooks/useDate";

import User from "../Lib/Icons/User";
import Calendar from "../Lib/Icons/Calendar";
import Online from "../Lib/Icons/Online";
import Offline from "../Lib/Icons/Offline";

import styles from "./Post.module.scss";

const Post = ({ post }) => {
  return (
    <li className={styles.post}>
      <div className={styles.post__wrapper}>
        <img
          className={styles.post__image}
          src={post.post.post_image_link}
          alt=""
          width={407}
          height={417}
        />
      </div>

      <div className={styles.post__inner}>
        <h3 className={styles.post__heading}>
          Alisher Isaevdan biznes va IT bo’yicha master klass
        </h3>

        <ul className={styles.post__list}>
          <li className={styles.post__item}>
            <User />
            <span>{post.organizer.organizer_name}</span>
          </li>
          <li className={styles.post__item}>
            <span>{post.organizer.organizer_profession}</span>
          </li>
          <li className={styles.post__item}>
            <Calendar />
            <span>{useDate(post.conference_date)}</span>
          </li>
          <li className={styles.post__item}>
            <span>{useDate(post.conference_date, "time")}</span>
          </li>
          <li className={styles.post__item}>
            {post.conference_type === "online" ? <Online /> : <Offline />}
            <span>{post.conference_type}</span>
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
