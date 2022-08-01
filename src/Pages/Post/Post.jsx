import React from "react";
import { useParams } from "react-router-dom";

import { HOST } from "../../config";
import useDate from "../../Hooks/useDate";

import Calendar from "../../Components/Lib/Icons/Calendar";
import Time from "../../Components/Lib/Icons/Time";
import Online from "../../Components/Lib/Icons/Online";
import Offline from "../../Components/Lib/Icons/Offline";

import styles from "./Post.module.scss";

const Post = () => {
  const { conferenceId } = useParams();
  const [post, setPost] = React.useState();
  const nomalizeDate = useDate;

  React.useEffect(() => {
    (async () => {
      const responce = await fetch(HOST + "/conferences/" + conferenceId);
      const data = await responce.json();

      if (data.status === 200) {
        setPost(data.data[0]);
      }
    })();
  }, [conferenceId]);

  console.log(post);

  return (
    <main>
      <section className={styles.post}>
        {post && (
          <div className={`${styles.container} container`}>
            <div className={styles.post__left}>
              <h2 className={styles.post__left__heading}>{post.post.post_title}</h2>

              <div className={styles.post__left__params}>
                <span className={styles.post__left__item}>
                  <Calendar />
                  <span>{nomalizeDate(post.conference_date)}</span>
                </span>
                <span className={styles.post__left__item}>
                  <Time />
                  <span>{nomalizeDate(post.conference_date, "time", false)}</span>
                </span>
                <span className={styles.post__left__item}>
                  {post.conference_type === "online" ? <Online /> : <Offline />}
                  <span>{post.conference_type}</span>
                </span>
              </div>
            </div>
            <div className={styles.post__right}>
              <h2 className={styles.post__right__heading}>{post.post.post_title}</h2>

              <div className={styles.post__right__inner}>
                <p className={styles.post__right__description}>{post.post.post_description}</p>

                {post.post.post_images.length === 2 ? (
                  <div className={styles.post__right__gallery}>
                    {post.post.post_images.map((image) => (
                      <img
                        className={styles.posr__right__image}
                        src={image}
                        alt=""
                        width={765}
                        height={500}
                      />
                    ))}
                  </div>
                ) : (
                  <img
                    className={styles.post__right__image}
                    src={post.post.post_images[0]}
                    alt=""
                    width={765}
                    height={500}
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Post;
