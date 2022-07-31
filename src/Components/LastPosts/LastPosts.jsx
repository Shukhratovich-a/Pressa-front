import React from "react";
import io from "socket.io-client";

import { HOST } from "../../config";

import Post from "../Post/Post";

import styles from "./LastPosts.module.scss";

const socket = io(HOST, { transports: ["websocket", "polling"] });

const LastPosts = () => {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const responce = await fetch(HOST + "/conferences");
      const data = await responce.json();

      if (data.status === 200 && data.data.length > 0) setPosts(data.data.slice(0, 9));
    })();
  }, []);

  React.useEffect(() => {
    socket.on("send message", (data) => {
      const array = [...posts];
      array.unshift(data.data);
      setPosts(array.slice(0, 9));
    });
  }, [posts]);

  return (
    <section className={styles["last-posts"]}>
      <div className={`container ${styles.container}`}>
        <h2 className={styles["last-posts__heading"]}>Oxirgi e’lonlar</h2>

        <ul className={styles["last-posts__list"]}>
          {posts.map((post) => (
            <Post post={post} key={post.post.post_id} />
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
