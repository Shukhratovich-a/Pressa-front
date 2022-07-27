import { Link } from "react-router-dom";

import Nav from "../Nav/Nav";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <Link className={styles.footer__link} to="/">
          Pressa
        </Link>

        <Nav style={styles.footer__nav__item} />
      </div>
    </footer>
  );
};

export default Footer;
