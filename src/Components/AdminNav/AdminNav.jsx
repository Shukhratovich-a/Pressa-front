import { Link } from "react-router-dom";

import styles from "./AdminNav.module.scss";

const AdminNav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li className={styles.nav__item}>
          <Link className={styles.nav__link} to={"/"}>
            Bosh sahifa
          </Link>
        </li>
        <li className={styles.nav__item}>
          <Link className={styles.nav__link} to={"/"}>
            Statistika
          </Link>
        </li>
        <li className={styles.nav__item}>
          <Link className={styles.nav__link} to={"/"}>
            O’chirilganlar
          </Link>
        </li>
        <li className={styles.nav__item}>
          <Link className={styles.nav__link} to={"/"}>
            Sozlamalar
          </Link>
        </li>
        <li className={styles.nav__item}>
          <Link className={styles.nav__link} to={"/"}>
            Chiqish
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNav;
