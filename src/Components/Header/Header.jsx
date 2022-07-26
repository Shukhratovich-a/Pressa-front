import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <Link className={styles.header__link} to="/">
          Pressa
        </Link>
      </div>
    </header>
  );
};

export default Header;
