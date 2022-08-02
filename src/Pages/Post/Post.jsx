import React from "react";
import { useParams } from "react-router-dom";

import { HOST } from "../../config";
import useDate from "../../Hooks/useDate";

import Calendar from "../../Components/Lib/Icons/Calendar";
import Time from "../../Components/Lib/Icons/Time";
import Online from "../../Components/Lib/Icons/Online";
import Offline from "../../Components/Lib/Icons/Offline";
import Map from "../../Components/Lib/Icons/Map";
import YouTube from "../../Components/Lib/Icons/YouTube";

import Loading from "../../Components/Lib/Loading/Loading";

import styles from "./Post.module.scss";

const Post = () => {
  const [loading, setLoading] = React.useState(true);
  const [post, setPost] = React.useState();
  const { conferenceId } = useParams();
  const nomalizeDate = useDate;

  React.useEffect(() => {
    setLoading(true);
    (async () => {
      const responce = await fetch(HOST + "/conferences/" + conferenceId);
      const data = await responce.json();

      if (data.status === 200) {
        setPost(data.data[0]);
        setLoading(false);
      }
    })();
  }, [conferenceId]);

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
                        key={image}
                        className={styles.post__right__image}
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

                {post.post.post_bodys.length > 0 &&
                  post.post.post_bodys.map((body) => (
                    <p key={body.post_body_id} className={styles.post__right__description}>
                      {body.post_body_text}
                    </p>
                  ))}
              </div>

              <div className={styles.post__bottom}>
                <a href="#link">
                  <Map />
                  <span>Google kartadan aniqlash</span>
                </a>
                <a href="#link">
                  <YouTube />
                  <span>Youtubedan tomosha qilish</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {loading && <Loading />}
      </section>
    </main>
  );
};

export default Post;
