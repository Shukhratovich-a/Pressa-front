import { Link } from "react-router-dom";

import AdminNav from "../AdminNav/AdminNav";

import styles from "./AdminHeader.module.scss";

const AdminHeader = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.header__link} to="/">
        Pressa
      </Link>

      <AdminNav />

      <span className={styles.header__copyright}>2022 All Rights</span>
    </header>
  );
};

export default AdminHeader;
