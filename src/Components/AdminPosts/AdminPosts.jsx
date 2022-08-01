import React from "react";

import { HOST } from "../../config";

import useSocket from "../../Hooks/useSocket";
import useAdminToken from "../../Hooks/useAdminToken";

import AdminPost from "../AdminPost/AdminPost";

import Search from "../../Components/Lib/Icons/Search";
import Avatar from "../../Components/Lib/Icons/Avatar";

import styles from "./AdminPosts.module.scss";

const AdminPosts = () => {
  const [posts, setPosts] = React.useState([]);
  const [admin, setAdmin] = React.useState({});
  const [token] = useAdminToken();
  const [status] = React.useState("waiting");
  const socket = useSocket;

  React.useEffect(() => {
    (async () => {
      const responce = await fetch(HOST + "/admins", { headers: { token: token } });
      const data = await responce.json();
      if (data.status === 200 && data.data.length > 0) {
        const admin = data.data.find((admin) => admin.admin_id === data.adminId);
        setAdmin(admin);
      }
    })();
  }, [token]);

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

  React.useEffect(() => {
    socket.on("delete post", (data) => {
      const index = posts.findIndex((post) => post.conference_id === data.data.conference_id);
      const array = [...posts];
      array.splice(index, 1);
      setPosts(array);
    });
  });

  React.useEffect(() => {
    socket.on("render post", (data) => {
      const index = posts.findIndex((post) => post.conference_id === data.data.conference_id);
      const array = [...posts];
      array.splice(index, 1);
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
        token: token,
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
        token: token,
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
        token: token,
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

      socket.emit("disabled post", {
        token: token,
        message: post,
      });
    }
  };

  return (
    <section className={styles.posts}>
      <div className={styles.posts__top}>
        <label className={styles.posts__top__label}>
          <Search />
          <input
            className={styles.posts__top__input}
            type="text"
            name="search"
            placeholder="Search"
          />
        </label>

        <div className={styles.posts__profile}>
          {admin.admin_avatar ? (
            <img
              className={styles.posts__profile__avatar}
              src={admin.admin_avatar}
              alt={admin.admin_name + "'s avatar"}
              width={44}
              height={44}
            />
          ) : (
            <Avatar width={44} height={44} />
          )}
          <div className={styles.posts__profile__inner}>
            <span className={styles.posts__profile__name}>{admin.admin_name}</span>
            <span className={styles.posts__profile__id}>id:{admin.admin_id}</span>
          </div>
        </div>
      </div>

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
