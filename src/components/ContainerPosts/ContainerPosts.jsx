import React from "react";
import Post from "../Post/Post";
import {useGetPostsQuery} from "../../redux/api/postApi";
import {FixedSizeList} from "react-window";

const ContainerPosts = () => {
  const {data = [], isLoading} = useGetPostsQuery();

  return (
    <div>
      <FixedSizeList
        height={930}
        width={1900}
        itemSize={230}
        itemCount={data.length}
        itemData={data}
      >
        {({data, index, style}) => {
          return (
            <div style={style}>
              <Post key={data[index].id} posts={data} index={index} />
              {isLoading && <div>Загрузка данных</div>}
            </div>
          );
        }}
      </FixedSizeList>
    </div>
  );
};

export default ContainerPosts;
