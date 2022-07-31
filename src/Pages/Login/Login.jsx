import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { HOST } from "../../config";

import useToken from "../../Hooks/useToken";

import styles from "./Login.module.scss";

const Login = () => {
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

    const { username, password } = evt.target.elements;

    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if (usernameValue === "") {
      username.focus();
      username.classList.add(styles["login__input--disabled"]);
      setError("Username xato kiritildi");
      return;
    } else if (passwordValue === "" || passwordValue.length < 8) {
      password.focus();
      password.classList.add(styles["login__input--disabled"]);
      setError("Parol xato kiritildi");
      return;
    } else {
      username.classList.remove(styles["login__input--disabled"]);
      password.classList.remove(styles["login__input--disabled"]);
    }

    const response = await fetch(HOST + "/login", {
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
      setError("Username yoki parol xato kiritildi");
    }
  };

  return (
    <section className={styles.login}>
      <div className={`container ${styles.container}`}>
        <Link className={styles.login__link} to="/">
          Pressa
        </Link>

        <div className={styles.login__wrapper}>
          <div className={styles.login__inner}>
            <h2 className={styles.login__heading}>Tizimga kirish</h2>

            <span className={styles.login__error}>{error}</span>

            <form className={styles.login__form} onSubmit={handleSubmit}>
              <input
                className={styles.login__input}
                type="text"
                name={"username"}
                placeholder={"Login"}
              />
              <input
                className={styles.login__input}
                type="password"
                name={"password"}
                placeholder={"Parol"}
                // required
              />

              <div className={styles.login__aside}>
                <Link className={styles.login__inner__link} to={"/register"}>
                  Ro'yxatdan o'tish
                </Link>
                <Link className={styles.login__inner__link} to={"/forgot"}>
                  Parolni unutdingizmi?
                </Link>
              </div>

              <button className={styles.login__button} type={"submit"}>
                Kirish
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
