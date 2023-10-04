import React from "react";
import styles from "./Post.module.css";

const Post = ({ post }) => {

  // console.log(post);
  // const data = post.map((post) => {
  //   return {
  //     userId: post.userId,
  //     id: post.id,
  //     title: post.title.charAt(0).toUpperCase() + post.title.slice(1),
  //     body: post.body.charAt(0).toUpperCase() + post.body.slice(1),
  //   };
  // });
  return (
    <div key={post.id} className={styles.wrapper}>
      <div className={styles.data}>
        <div className={styles.number}>№{post.id}</div>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.body}>{post.body}</div>
      </div>
    </div>
  );
};

export default Post;
