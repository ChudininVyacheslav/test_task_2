import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "http://localhost:3000/",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    fetchAllPosts: builder.query({
      query: ({limit = 5, start = 0}) => ({   //под вопросом
        url: "/posts/",
      }),
    }),
    fetchFerstPost: builder.query({
      query: (id = 1) =>  ({
        url: `/posts/${id}`
      })
    })
  }),
});

export const {useFetchAllPostsQuery} = postApi;
