import React, {useState, useEffect, useRef} from "react";
import Post from "../Post/Post";
import {useFetchAllPostsQuery} from "../../redux/api/postApi";

const ContainerPost = () => {
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
    return 150 * (100 - (setCurrentPostStart + 1));
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
  function scrollHandlerDown() {
    // console.log(e.target.scrollTop);
    setCurrentPostStart(currentPostStart =>currentPostStart + 1);
  }

  function scrollHandlerUp() {
    // console.log(e.target.scrollTop);
    setCurrentPostStart(currentPostStart =>currentPostStart - 2);
  }

  useEffect(() => {
    const div = rootRef.current;
    console.log(div);
    div.addEventListener("scroll", (e) => {
      // if(currentPostStart)
      scrollHandlerDown(e);
    });
    return () => {
      div.removeEventListener("wheel", (e) => {
        scrollHandlerUp(e);
      });
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
      <div ref={rootRef} className="post__list">
        <div  style={{height: `${getTopHeight()}px`}}></div>
        {posts &&
          posts
            .slice(currentPostStart, currentPostStart + 7 + 1)
            .map((post) => (
              <div  key={post.id}>
                <Post post={post} />
              </div>
            ))}
      </div>
      <div style={{height: `${getBottomHeight()}px`}}></div>
      {isLoading && <div>Загрузка данных</div>}
    </div>
  );
};

export default ContainerPost;
