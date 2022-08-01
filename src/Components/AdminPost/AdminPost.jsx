import useDate from "../../Hooks/useDate";

import styles from "./AdminPost.module.scss";

const AdminPost = ({ post, handleAccept, handleDisebled }) => {
  const normalizerNumber = (number) => {
    const array = number.split("");

    array.splice(0, 0, "+");
    array.splice(4, 0, " ");
    array.splice(7, 0, " ");
    array.splice(11, 0, "-");
    array.splice(14, 0, "-");

    return array.join("");
  };

  return (
    <div className={styles.post}>
      <div className={styles.post__top}>
        <h3 className={styles.post__title}>{post.post.post_title}</h3>

        <div className={styles.post__buttons}>
          <button
            className={`${styles.post__button} ${styles["post__button--disabled"]}`}
            name="disabled"
            type="button"
            onClick={handleDisebled}
          >
            Bekor qilish
          </button>
          <button
            className={`${styles.post__button} ${styles["post__button--active"]}`}
            name="active"
            type="button"
            onClick={handleAccept}
          >
            Tasdiqlash
          </button>
        </div>
      </div>

      <div className={styles.post__bottom}>
        <span className={styles.post__params}>{post.organizer.organizer_name}</span>
        <span className={styles.post__params}>
          {normalizerNumber(post.organizer.organizer_phone)}
        </span>
        <span className={styles.post__params}>{useDate(post.conference_date, "date", true)}</span>
        <span className={styles.post__params}>{useDate(post.conference_date, "time", true)}</span>
        <span className={styles.post__params}>{post.organizer.organizer_profession}</span>
      </div>
    </div>
  );
};

export default AdminPost;
