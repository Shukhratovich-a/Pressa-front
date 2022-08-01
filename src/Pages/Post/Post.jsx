import React from "react";
import { useParams } from "react-router-dom";

import { HOST } from "../../config";

const Post = () => {
  const { conferenceId } = useParams();

  React.useEffect(() => {
    (async () => {
      const responce = await fetch(HOST + "/conferences/" + conferenceId);
      const data = await responce.json();

      if (data.status === 200) {
        console.log(data);
      }
    })();
  }, [conferenceId]);

  return <main>{conferenceId}</main>;
};

export default Post;
