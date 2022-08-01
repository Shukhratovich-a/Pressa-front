import React from "react";
import io from "socket.io-client";

import { HOST } from "../../config";

import Post from "../Post/Post";

import Loading from "../Lib/Loading/Loading";

import styles from "./LastPosts.module.scss";

const socket = io(HOST, { transports: ["websocket", "polling"] });

const LastPosts = () => {
  const [loading, setLoading] = React.useState(true);
  const [buttonLoading, setButtonLoading] = React.useState(false);
  const [posts, setPosts] = React.useState([]);
  const [count, setCount] = React.useState(9);

  React.useEffect(() => {
    (async () => {
      const responce = await fetch(HOST + "/conferences");
      const data = await responce.json();

      if (data.status === 200 && data.data.length > 0) {
        setPosts(data.data);
        setLoading(false);
      }
    })();
  }, []);

  const handleFetch = () => {
    setCount(count + 3);
    setButtonLoading(true);

    (async () => {
      const responce = await fetch(HOST + "/conferences?limit=" + count);
      const data = await responce.json();

      if (data.status === 200 && data.data.length > 0) {
        setPosts(data.data);
        setButtonLoading(false);
      }
    })();
  };

  React.useEffect(() => {
    socket.on("render post", (data) => {
      const array = [...posts];
      array.unshift(data.data);
      setPosts(array);
    });
  }, [posts]);

  return (
    <section className={styles["last-posts"]}>
      <div className={`container ${styles.container}`}>
        <h2 className={styles["last-posts__heading"]}>Oxirgi e’lonlar</h2>

        <ul className={styles["last-posts__list"]}>
          {posts.length > 0 && posts.map((post) => <Post post={post} key={post.post.post_id} />)}
        </ul>

        {loading && <Loading />}

        {!loading && (
          <button
            className={`${styles["last-posts__button"]}`}
            type={"button"}
            onClick={handleFetch}
            disabled={buttonLoading}
          >
            {buttonLoading ? (
              <Loading className={styles["last-posts__button__loading"]} />
            ) : (
              <span>Ko’proq ko’rish</span>
            )}
          </button>
        )}
      </div>
    </section>
  );
};

export default LastPosts;
