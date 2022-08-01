import React from "react";
import { useNavigate } from "react-router-dom";

import { HOST } from "../../config";

import useToken from "../../Hooks/useToken";
import useDate from "../../Hooks/useDate";
import useDirections from "../../Hooks/useDirections";
import useSocket from "../../Hooks/useSocket";

import Calendar from "../../Components/Calendar/Calendar";
import Times from "../../Components/Times/Times";

import Radio from "../../Components/Lib/Inputs/Radio/Radio";
import Tel from "../../Components/Lib/Inputs/Tel/Tel";
import Text from "../../Components/Lib/Inputs/Text/Text";
import File from "../../Components/Lib/Inputs/File/File";
import TextArea from "../../Components/Lib/Inputs/TextArea/TextArea";

import CalendarIcon from "../../Components/Lib/Icons/Calendar";
import Marker from "../../Components/Lib/Icons/Marker";
import Time from "../../Components/Lib/Icons/Time";

import styles from "./Advertisement.module.scss";

const Advertisement = () => {
  const socket = useSocket;

  const [token] = useToken();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!token) navigate("/login");
  });

  const [isJuridical, setIsJuridica] = React.useState(true);
  const [date, setDate] = React.useState(new Date());
  const [time, setTime] = React.useState("13:00");
  // const [isOnline, setIsOnline] = React.useState(true);
  const [files, setFiles] = React.useState([]);

  const [directions] = useDirections();
  const [subCategories, setSubCategories] = React.useState([]);

  const [calendarState, setCalendarState] = React.useState(false);
  const calendarRef = React.useRef(null);

  const [timeState, setTimeState] = React.useState(false);
  const timeRef = React.useRef(null);

  // const [inputName, setInputName] = React.useState("");

  const states = {
    calendar: {
      state: calendarState,
      setState: setCalendarState,
      ref: calendarRef,
    },
    time: {
      state: timeState,
      setState: setTimeState,
      ref: timeRef,
    },
  };

  const openAndClose = (button) => {
    const name = button.name;

    for (let key in states) {
      if (key === name) {
        const obj = states[name];
        if (obj.state) {
          obj.ref.current.style.opacity = 0;
          obj.ref.current.style.pointerEvents = "none";
          obj.ref.current.parentNode.children[1].classList.remove(
            styles["advertisement__item__button--open"]
          );

          setTimeout(() => {
            obj.setState(false);
          }, 300);
        } else {
          obj.ref.current.style.opacity = 1;
          obj.ref.current.style.pointerEvents = "all";
          obj.ref.current.parentNode.children[1].classList.add(
            styles["advertisement__item__button--open"]
          );
          obj.setState(true);
        }
      } else {
        states[key].ref.current.style.opacity = 0;
        states[key].ref.current.style.pointerEvents = "none";
        states[key].ref.current.parentNode.children[1].classList.remove(
          styles["advertisement__item__button--open"]
        );
        setTimeout(() => {
          states[key].setState(false);
        }, 300);
      }
    }
  };

  const handleSelect = (evt) => {
    const category = directions.find(
      (direction) => Number(direction.id) === Number(evt.target.value)
    );

    setSubCategories(category.subDirection);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const {
      conferenceLink,
      conferenceType,
      categories,
      subCategories,
      organizerType,
      organizationName,
      organizerName,
      organizerProfession,
      organizerPhone,
      organizerPhoneStuck,
      postName,
      postDescription,
      postBody,
      postFile,
    } = evt.target.elements;

    const bodys = postBody.value
      .trim()
      .split("\n")
      .filter((body) => body !== "");

    const normalizeDate = () => {
      const thisDate = new Date(date);

      const day = thisDate.getDate();
      const month = thisDate.getMonth();
      const year = thisDate.getFullYear();
      const hour = time.split(":")[0];
      const minute = time.split(":")[1];

      return new Date(year, month, day, hour, minute, 0).getTime();
    };

    if (!conferenceType.checked && conferenceLink.value.trim() === "") {
      conferenceLink.focus();
      conferenceLink.classList.add(styles["input--disabled"]);
      return;
    } else conferenceLink.classList.remove(styles["input--disabled"]);

    if (organizerName.value.trim().length < 3) {
      organizerName.focus();
      organizerName.classList.add(styles["input--disabled"]);
      return;
    } else organizerName.classList.remove(styles["input--disabled"]);

    if (organizerProfession.value.trim() === "") {
      organizerProfession.focus();
      organizerProfession.classList.add(styles["input--disabled"]);
      return;
    } else organizerProfession.classList.remove(styles["input--disabled"]);

    if (organizerPhone.value.trim().length !== 17) {
      organizerPhone.focus();
      organizerPhone.classList.add(styles["input--disabled"]);
      return;
    } else organizerPhone.classList.remove(styles["input--disabled"]);

    if (organizerPhoneStuck.value.trim().length !== 17) {
      organizerPhoneStuck.focus();
      organizerPhoneStuck.classList.add(styles["input--disabled"]);
      return;
    } else organizerPhoneStuck.classList.remove(styles["input--disabled"]);

    if (organizerType.value.trim() === "yuridik" && organizationName.value.trim() === "") {
      organizationName.focus();
      organizationName.classList.add(styles["input--disabled"]);
      return;
    } else organizationName.classList.remove(styles["input--disabled"]);

    if (postName.value.trim() === "" || postName.value.trim().length > 128) {
      postName.focus();
      return;
    }

    if (postDescription.value.trim() === "" || postDescription.value.trim().length > 512) {
      postDescription.focus();
      postDescription.classList.add(styles["input--disabled"]);
      return;
    } else postDescription.classList.remove(styles["input--disabled"]);

    if (postBody.value.trim() === "") {
      postBody.focus();
      postBody.classList.add(styles["input--disabled"]);
      return;
    } else postBody.classList.remove(styles["input--disabled"]);

    if (files.length === 0) {
      postFile.focus();
      postFile.classList.add(styles["input--disabled"]);
      return;
    } else postFile.classList.remove(styles["input--disabled"]);

    const model = {
      conferenceDate: normalizeDate(),
      conferenceType: conferenceType.checked ? "offline" : "online",
      categoryId: categories.value.trim(),
      subCategoryId: subCategories.value.trim(),
      conferenceLink: conferenceLink.value.trim(),
      organizer: {
        organizationName: organizationName.value.trim(),
        organizerName: organizerName.value.trim(),
        organizerProfession: organizerProfession.value.trim(),
        organizerType: organizerType.value.trim(),
        organizerPhone: organizerPhone.value.trim().split(" ").join("").split("+").join(""),
        organizerPhoneStuck: organizerPhoneStuck.value
          .trim()
          .split(" ")
          .join("")
          .split("+")
          .join(""),
      },
      post: {
        postTitle: postName.value.trim(),
        postDescription: postDescription.value.trim(),
        postBodys: bodys,
      },
    };

    const responce = await fetch(HOST + "/conferences", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        token: token,
      },
      body: JSON.stringify(model),
    });

    const data = await responce.json();
    if (data.status === 200) {
      const formData = new FormData();
      formData.append("mainImage", files[0]);
      if (files[1]) formData.append("image", files[1]);

      const responceImage = await fetch(`${HOST}/posts/${data.data.post.post_id}/images`, {
        method: "POST",
        headers: { token: token },
        body: formData,
      });

      const dataImage = await responceImage.json();

      data.data.post.post_images = dataImage.data.map((image) => image.post_image_link);

      socket.emit("new post", {
        token: token,
        message: data.data,
      });
    }
  };

  return (
    <main className={styles.main}>
      <section className={styles.advertisement}>
        <div className={`${styles.container} container`}>
          <h2 className={styles.advertisement__heading}>E’lon berish</h2>

          <form className={styles.advertisement__form} onSubmit={handleSubmit} autoComplete={"off"}>
            <div className={`${styles.advertisement__inner} ${styles.advertisement__conference}`}>
              <h3 className={styles.advertisement__inner__heading}>Vaqt va yo’nalishni tanlang</h3>

              <div className={styles.advertisement__wrapper}>
                <div className={styles.advertisement__date}>
                  <div
                    className={`${styles.advertisement__item} ${styles["advertisement__item--calendar"]}`}
                  >
                    <span className={styles.advertisement__item__text}>
                      O’tkaziladigan sanani kiriting
                    </span>

                    <button
                      className={styles.advertisement__item__button}
                      type="button"
                      name="calendar"
                      onClick={(evt) => openAndClose(evt.target.closest("button"))}
                    >
                      <CalendarIcon />
                      <span>{useDate(date, "date", true)}</span>
                      <Marker />
                    </button>

                    <div className={`${styles.advertisement__item__inner}`} ref={calendarRef}>
                      {calendarState ? <Calendar date={date} setDate={setDate} /> : null}
                    </div>
                  </div>

                  <div
                    className={`${styles.advertisement__item} ${styles["advertisement__item--time"]}`}
                  >
                    <button
                      className={styles.advertisement__item__button}
                      type="button"
                      name="time"
                      onClick={(evt) => openAndClose(evt.target.closest("button"))}
                    >
                      <Time />
                      <span>{time}</span>
                      <Marker />
                    </button>

                    <div className={`${styles.advertisement__item__inner}`} ref={timeRef}>
                      {timeState ? <Times setState={setTime} /> : null}
                    </div>
                  </div>
                </div>

                <div className={styles.advertisement__select__block}>
                  <span className={styles.advertisement__item__text}>Yo’nalishni belgilang</span>

                  <select
                    className={styles.advertisement__select}
                    name="categories"
                    onChange={handleSelect}
                  >
                    {directions.length > 0 &&
                      directions.map((direction) => (
                        <option value={direction.id} key={direction.id}>
                          {direction.title}
                        </option>
                      ))}
                  </select>
                </div>

                <div className={styles.advertisement__select__block}>
                  <span className={styles.advertisement__item__text}>Ichki yo’nalish</span>

                  <select className={styles.advertisement__select} name="subCategories">
                    {directions.length > 0 &&
                      (subCategories.length > 0
                        ? subCategories.map((subCategory) => (
                            <option value={subCategory.id} key={subCategory.id}>
                              {subCategory.title}
                            </option>
                          ))
                        : directions[0].subDirection.map((subCategory) => (
                            <option value={subCategory.id} key={subCategory.id}>
                              {subCategory.title}
                            </option>
                          )))}
                  </select>
                </div>

                <label className={styles.advertisement__checkbox__label}>
                  <span className={styles.advertisement__item__text}>Tadbir turi</span>

                  <input
                    className={`${styles.advertisement__checkbox} visually-hidden`}
                    type="checkbox"
                    name="conferenceType"
                    value={"online"}
                    defaultChecked={false}
                  />

                  <span className={styles.advertisement__checkbox__controller}>
                    <span className={styles.advertisement__checkbox__swiper}></span>
                    <span className={styles.advertisement__checkbox__values} title={"online"}>
                      Online
                    </span>
                    <span className={styles.advertisement__checkbox__values} title={"offline"}>
                      Offline
                    </span>
                  </span>
                </label>

                <Text title={"Link kiriting"} name={"conferenceLink"} arialabel={"Link"} />
              </div>
            </div>

            <div className={`${styles.advertisement__inner} ${styles.advertisement__conference}`}>
              <h3 className={styles.advertisement__inner__heading}>Tashkilotchi</h3>

              <div className={styles.advertisement__aside}>
                <label className={styles.advertisement__label}>
                  <span className={styles.advertisement__label__text}>Jismoniy shaxs</span>
                  <Radio
                    name={"organizerType"}
                    value={"jismoniy"}
                    isChecked={true}
                    onChange={() => {
                      setIsJuridica(true);
                    }}
                  />
                </label>
                <label className={styles.advertisement__label}>
                  <span className={styles.advertisement__label__text}>Yuridik shaxs</span>
                  <Radio
                    name={"organizerType"}
                    value={"yuridik"}
                    isChecked={false}
                    onChange={() => {
                      setIsJuridica(false);
                    }}
                  />
                </label>
              </div>

              <div className={styles.advertisement__wrapper}>
                <Text
                  title={"Yuridik nomi"}
                  name={"organizationName"}
                  isDisabled={isJuridical}
                  arialabel={"Yuridik nomi"}
                />
                <Text title={"Ismi sharifi"} name={"organizerName"} arialabel={"Ism sharf"} />
                <Text title={"Professiya"} name={"organizerProfession"} arialabel={"Professiya"} />
                <Tel
                  title={"Telefon raqami"}
                  name={"organizerPhone"}
                  arialabel={"Telefon raqami"}
                />
                <Tel
                  title={"Qo'shimcha tel raqam"}
                  name={"organizerPhoneStuck"}
                  arialabel={"Qo'shimcha tel raqam"}
                />
              </div>
            </div>

            <div className={`${styles.advertisement__inner} ${styles.advertisement__conference}`}>
              <h3 className={styles.advertisement__inner__heading}>Post</h3>

              <div className={styles.advertisement__wrapper}>
                <input
                  className={styles.advertisement__post__heading}
                  type="text"
                  name={"postName"}
                  placeholder="Mavzuni sarlavhasi"
                  required
                />

                <Text
                  className={styles.advertisement__post__description}
                  title={"Description"}
                  name={"postDescription"}
                  arialabel={"Qo'shimcha tel raqam"}
                />

                <File
                  className={styles.advertisement__upload}
                  title={"Rasm yuklash"}
                  files={files}
                  name={"postFile"}
                  setFiles={setFiles}
                />

                <TextArea
                  className={styles["advertisement__text--area"]}
                  title={"Mavzu matni"}
                  name={"postBody"}
                />
              </div>

              <button
                className={`${styles.advertisement__button} ${styles["advertisement__button--reset"]}`}
                type={"reset"}
                onClick={() => setFiles([])}
              >
                Bekor qilish
              </button>
              <button
                className={`${styles.advertisement__button} ${styles["advertisement__button--submit"]}`}
                type={"submit"}
              >
                E’lonni yuborish
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Advertisement;
