import { Link } from "react-router-dom";

import Nav from "../Nav/Nav";

import Search from "../Lib/Icons/Search";
import Plus from "../Lib/Icons/Plus";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <Link className={styles.header__link} to="/">
          Pressa
        </Link>

        <form className={styles.header__form}>
          <label className={styles.header__label}>
            <Search />
            <input className={styles.header__input} type="text" placeholder="Izlash" />
          </label>
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
