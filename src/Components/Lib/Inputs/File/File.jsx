import React from "react";

import Upload from "../../Icons/Upload";

import styles from "./File.module.scss";

const File = ({ className, name, title, isDisabled, arialabel, files, setFiles }) => {
  const handleUpload = (evt) => {
    if (evt.target.files[evt.target.files.length - 1].size > 2000000) {
      return;
    } else if (files.length >= 2) {
      return;
    } else if (
      !["image/jpeg", "image/png", "image/webp"].includes(
        evt.target.files[evt.target.files.length - 1].type
      )
    ) {
      return;
    } else {
      const array = [...files];
      const index = files.findIndex((file) => file.name === evt.target.files[0].name);

      if (index === -1) {
        array.push(evt.target.files[evt.target.files.length - 1]);
        setFiles(array);
      }
    }
    evt.target.value = null;
  };

  const deleteUpload = (name) => {
    const array = [...files];
    const index = files.findIndex((file) => file.name === name);
    array.splice(index, 1);
    setFiles(array);
  };

  return (
    <div className={`${styles.upload} ${className}`}>
      <div className={styles.upload__inner}>
        <label className={`${styles.label} ${isDisabled ? styles["label--disabled"] : ""}`}>
          <span className={styles.text}>{title}</span>
          <span className={`${styles.input}`}>
            <input
              className={`visually-hidden`}
              type={"file"}
              name={name}
              placeholder={title}
              disabled={isDisabled}
              aria-label={arialabel}
              onChange={handleUpload}
              accept={"image/*"}
            />
            <span className={styles.input__text}>
              <Upload />
              <span>Upload img</span>
            </span>
          </span>
        </label>

        <ul className={styles.upload__list}>
          {files.length === 0 ? (
            <li></li>
          ) : (
            files.map((file) => (
              <li className={styles.upload__item} key={file.name}>
                <button
                  className={styles.upload__item__button}
                  type={"button"}
                  onClick={() => deleteUpload(file.name)}
                >
                  <svg width="8" height="8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="m4.47 4 2.1-2.097a.335.335 0 1 0-.474-.473L4 3.53l-2.097-2.1a.335.335 0 0 0-.473.473L3.53 4l-2.1 2.097a.333.333 0 0 0 .108.546.333.333 0 0 0 .365-.073L4 4.47l2.096 2.1a.333.333 0 0 0 .547-.109.333.333 0 0 0-.073-.364L4.47 4Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
                <span className={styles.upload__item__name}>{file.name}</span>
                <span className={styles.upload__item__status}>Uploaded</span>
              </li>
            ))
          )}
        </ul>
      </div>

      <article className={styles.upload__article}>
        Yuklanyotgan rasm o’lchami 1080x1080 hajmi 2 mb dan oshmasin
      </article>
    </div>
  );
};

export default File;
