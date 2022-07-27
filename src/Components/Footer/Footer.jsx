import { Link } from "react-router-dom";

import Nav from "../Nav/Nav";

import Phone from "../Lib/Icons/Phone";
import Facebook from "../Lib/Icons/Facebook";
import Instagram from "../Lib/Icons/Instagram";
import Telegram from "../Lib/Icons/Telegram";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <Link className={styles.footer__link} to="/">
          Pressa
        </Link>

        <Nav style={styles.footer__nav__item} />

        <a className={styles.footer__phone__link} href="tel:+712001102">
          <Phone />
          <span>+71 200-11-02</span>
        </a>

        <ul className={styles.footer__socials}>
          <li className={styles.footer__social}>
            <a className={styles.footer__social__link} href="#link">
              <Facebook />
            </a>
          </li>
          <li className={styles.footer__social}>
            <a className={styles.footer__social__link} href="#link">
              <Instagram />
            </a>
          </li>
          <li className={styles.footer__social}>
            <a className={styles.footer__social__link} href="#link">
              <Telegram />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
