import React from "react";
import { Link } from "react-router-dom";

import { HOST } from "../../config";

import Nav from "../Nav/Nav";

import Search from "../Lib/Icons/Search";
import Plus from "../Lib/Icons/Plus";

import styles from "./Header.module.scss";

const Header = () => {
  const [posts, setPosts] = React.useState([]);

  const handleSearch = async (evt) => {
    const responce = await fetch(HOST + "/posts?search=" + evt.target.value.trim());
    const data = await responce.json();

    if (data.status === 200) setPosts(data.data);
    if (data.status === 404) setPosts([]);
    if (evt.target.value.trim() === "") setPosts([]);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <Link className={styles.header__link} to="/">
          Pressa
        </Link>

        <form className={styles.header__form}>
          <label className={styles.header__label}>
            <Search />
            <input
              className={styles.header__input}
              type="text"
              placeholder="Izlash"
              onInput={handleSearch}
            />
          </label>

          <ul className={styles.header__search__list}>
            {posts.length > 0 &&
              posts.map((post) => (
                <li key={post.post_id} className={styles.header__search__item}>
                  <Link className={styles.header__search__link} to={"/post/" + post.conference_id}>
                    {post.post_title}
                  </Link>
                </li>
              ))}
          </ul>
        </form>

        <Nav style={styles.header__nav__item} />

        <Link className={styles.header__button} to={"/advertisement"}>
          <Plus />
          <span>E’lon berish</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
