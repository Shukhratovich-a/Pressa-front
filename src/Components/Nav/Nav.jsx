import { Link } from "react-router-dom";

import styles from "./Nav.module.scss";

const Nav = ({ style }) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li className={`${styles.nav__item} ${style}`}>
          <Link className={styles.nav__link} to="/about">
            Biz haqimizda
          </Link>
        </li>
        <li className={`${styles.nav__item} ${style}`}>
          <Link className={styles.nav__link} to="/about">
            Savol va javoblar
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
