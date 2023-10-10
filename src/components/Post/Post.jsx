import React from "react";
import styles from "./Post.module.css";
import {Link} from "react-router-dom";
import {textUpperCase} from "./textUpperCase";

const Post = ({posts, index}) => {
  const dataPosts = textUpperCase(posts, true);
  const post = dataPosts[index];

  return (
    <div key={post.id} className={styles.wrapper}>
      <div className={styles.post}>
        <div className={styles.number}>№{post.id}</div>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.body}>{post.body}</div>
        <div>
          <Link to="/description_post" state={post.id} className={styles.link}>
            <button>Просмотр</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
