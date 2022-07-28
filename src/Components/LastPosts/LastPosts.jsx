import Post from "../Post/Post";

import styles from "./LastPosts.module.scss";

const LastPosts = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <section className={styles["last-posts"]}>
      <div className={`container ${styles.container}`}>
        <h2 className={styles["last-posts__heading"]}>Oxirgi e’lonlar</h2>

        <ul className={styles["last-posts__list"]}>
          {array.map((post) => (
            <Post post={post} key={post}/>
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
