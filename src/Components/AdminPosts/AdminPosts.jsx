import React from "react";

import { HOST } from "../../config";

import useSocket from "../../Hooks/useSocket";

import AdminPost from "../AdminPost/AdminPost";

import styles from "./AdminPosts.module.scss";

const AdminPosts = () => {
  const [posts, setPosts] = React.useState([]);
  const [status] = React.useState("waiting");
  const socket = useSocket;

  React.useEffect(() => {
    (async () => {
      const responce = await fetch(HOST + "/conferences?status=" + status + "&limit=1000");
      const data = await responce.json();

      if (data.status === 200 && data.data.length > 0) setPosts(data.data);
    })();
  }, [status]);

  React.useEffect(() => {
    socket.on("send post", (data) => {
      const array = [...posts];
      array.unshift(data.data);
      setPosts(array);
    });
  });

  const handleAccept = async (evt, post) => {
    const status = evt.target.name;
    const id = post.conference_id;

    const responce = await fetch(HOST + "/conferences/status/" + id, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1OTEyMTY3OH0.dFz0cW4VMHtaNzgkTqxPKzy-MWvoi4-bwUSvc8YcbEg",
      },
      body: JSON.stringify({
        status: status,
      }),
    });

    const data = await responce.json();

    if (data.status === 202) {
      const index = posts.findIndex((post) => post.conference_id === id);
      const array = [...posts];
      array.splice(index, 1);
      setPosts(array);
      console.log(data);

      socket.emit("accept post", {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1OTEyMTY3OH0.dFz0cW4VMHtaNzgkTqxPKzy-MWvoi4-bwUSvc8YcbEg",
        message: post,
      });
    }
  };

  const handleDisebled = async (evt, post) => {
    const status = evt.target.name;
    const id = post.conference_id;

    const responce = await fetch(HOST + "/conferences/status/" + id, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1OTEyMTY3OH0.dFz0cW4VMHtaNzgkTqxPKzy-MWvoi4-bwUSvc8YcbEg",
      },
      body: JSON.stringify({
        status: status,
      }),
    });

    const data = await responce.json();

    if (data.status === 202) {
      const index = posts.findIndex((post) => post.conference_id === id);
      const array = [...posts];
      array.splice(index, 1);
      setPosts(array);
      console.log(data);
    }
  };

  return (
    <section className={styles.posts}>
      <ul className={styles.posts__list}>
        {posts.length > 0 &&
          posts.map((post) => (
            <li className={styles.posts__item} key={post.conference_id}>
              <AdminPost
                post={post}
                handleAccept={(evt) => handleAccept(evt, post)}
                handleDisebled={(evt) => handleDisebled(evt, post)}
              />
            </li>
          ))}
      </ul>
    </section>
  );
};

export default AdminPosts;
