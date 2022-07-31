import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { HOST } from "../../config";

import useToken from "../../Hooks/useToken";

import styles from "./Register.module.scss";

const Register = () => {
  const [error, setError] = React.useState("");
  const [token, setToken] = useToken();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (token) {
      navigate(-1);
    }
  });

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const { username, password, passwordValid } = evt.target.elements;

    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    const passwordValidValue = passwordValid.value.trim();

    if (usernameValue === "") {
      username.focus();
      username.classList.add(styles["register__input--disabled"]);
      setError("Username kiriting");
      return;
    } else if (passwordValue === "" || passwordValue.length < 8) {
      password.focus();
      password.classList.add(styles["register__input--disabled"]);
      username.classList.remove(styles["register__input--disabled"]);
      setError("Parol xato kiritildi");
      return;
    } else if (passwordValidValue === "" || passwordValidValue.length < 8) {
      passwordValid.focus();
      passwordValid.classList.add(styles["register__input--disabled"]);
      password.classList.remove(styles["register__input--disabled"]);
      setError("Parol xato kiritildi");
      return;
    } else if (passwordValue !== passwordValidValue) {
      passwordValid.focus();
      passwordValid.classList.add(styles["register__input--disabled"]);
      setError("Parol to'gri kelmayabdi");
      return;
    } else {
      username.classList.remove(styles["register__input--disabled"]);
      password.classList.remove(styles["register__input--disabled"]);
      passwordValid.classList.remove(styles["register__input--disabled"]);
      setError("");
    }

    const response = await fetch(HOST + "/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ username: usernameValue, password: passwordValue }),
    });

    const data = await response.json();

    if (data.status === 200) {
      setToken(data.token);
      navigate("/advertisement");
    } else if (data.status === 401) {
      setError("Bunday nomli foydalanuvchi mavjud");
      username.focus();
      username.classList.add(styles["register__input--disabled"]);
    }
  };

  return (
    <section className={styles.register}>
      <div className={`container ${styles.container}`}>
        <Link className={styles.register__link} to="/">
          Pressa
        </Link>

        <div className={styles.register__wrapper}>
          <div className={styles.register__inner}>
            <h2 className={styles.register__heading}>Tizimga kirish</h2>

            <span className={styles.register__error}>{error}</span>

            <form className={styles.register__form} onSubmit={handleSubmit}>
              <input
                className={styles.register__input}
                type="text"
                name={"username"}
                placeholder={"Username"}
              />
              <input
                className={styles.register__input}
                type="password"
                name={"password"}
                placeholder={"Parol"}
              />
              <input
                className={styles.register__input}
                type="password"
                name={"passwordValid"}
                placeholder={"Parol"}
              />

              <div className={styles.register__aside}>
                <Link className={styles.register__inner__link} to={"/login"}>
                  Tizimga kirish
                </Link>
              </div>

              <button className={styles.register__button} type={"submit"}>
                Kirish
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
