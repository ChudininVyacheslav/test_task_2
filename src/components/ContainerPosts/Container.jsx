import React, {useState, useEffect, useRef} from "react";
import Post from "../Post/Post";
import {useFetchAllPostsQuery} from "./../../redux/api/postApi";

const Container = () => {
  const rootRef = useRef();
  const [currentPostStart, setCurrentPostStart] = useState(0);
  const {data: posts, isLoading} = useFetchAllPostsQuery({
    limit: 7,
    start: currentPostStart,
  });
  function getTopHeight() {
    return 150 * setCurrentPostStart;
  }
  function getBottomHeight() {
    return 150 * setCurrentPostStart;
  }

  //   const [isMyFetching, setIsFetchingDown] = useState(false);
  //     const [isMyFetchingUp, setIsMyFetchingUp] = useState(false);

  // useEffect(() => {
  // if (isMyFetching) {
  //     setCurrentPostStart((prev) => {
  //     return prev < 93 ? prev + 1 : prev;
  //   });
  //   setIsFetchingDown(false);
  // }
  // }, [isMyFetching]);

  //   useEffect(() => {
  //     if (isMyFetchingUp) {
  //       setCurrentPostStart((prev) => {
  //         return prev > 0 ? prev - 1 : prev;
  //       });
  //       setIsMyFetchingUp(false);
  //     }
  //   }, [isMyFetchingUp]);
  function scrollHandler(e) {
    console.log(1111);
    setCurrentPostStart(Math.floor(e.target.scrollTop / 150));
  }

  useEffect(() => {
    const div = rootRef.current;
    div.addEventListener("scroll", scrollHandler);
    return () => {
      div.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  //     const scrollHandler = (e) => {
  //         if (e.target.documentElement.scrollTop < 50) {
  //       setIsMyFetchingUp(true);
  //     }
  //     if (
  //       e.target.documentElement.scrollHeight -
  //         e.target.documentElement.scrollTop -
  //         window.innerHeight <
  //       50
  //     ) {
  //       setIsFetchingDown(true);
  //       window.scrollTo(
  //         0,(
  //         e.target.documentElement.scrollHeight +
  //           e.target.documentElement.scrollTop)
  //       );
  //     }
  //   };
  return (
    <div>
      <div className="post__list">
        <div style={{height: getTopHeight()}} ref={rootRef}></div>
        {posts &&
          posts
            .slice(currentPostStart, currentPostStart + 5 + 1)
            .map((post) => <Post post={post} />)}
      </div>
      <div style={{height: getBottomHeight()}} ref={rootRef}></div>
      {isLoading && <div>Загрузка данных</div>}
    </div>
  );
};

export default Container;
