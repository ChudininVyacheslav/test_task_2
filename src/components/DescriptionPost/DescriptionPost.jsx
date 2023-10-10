import React from "react";
import {useGetPostsQuery} from "../../redux/api/postApi";
import {Link, useLocation} from "react-router-dom";
import styles from "./DescriptionPost.module.css";
import { textUpperCase } from "../Post/textUpperCase";

const DescriptionPost = () => {
  const {data = [], isLoading} = useGetPostsQuery();
  const getIdPost = useLocation();
  const idPost = getIdPost.state;
  const dataPost = textUpperCase(data);
  const post = dataPost[idPost-1];

  return (
    <div key={post.id} className={styles.wrapper}>
      <div className={styles.post}>
        <div className={styles.number}>№{post.id}</div>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.body}>{post.body}</div>
        <div>
          <Link to="/" state={post.id} className={styles.link}>
            <button>Назад</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DescriptionPost;
