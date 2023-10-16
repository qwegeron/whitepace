import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Posts } from "../../entities/types/posts";

export interface GetPostParams {
  start?: number;
  limit?: number;
}

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<Posts[], GetPostParams>({
      query: ({ start, limit }) => ({
        url: "posts",
        params: {
          _limit: limit ?? 10,
          _start: start ?? 0,
        },
      }),
    }),
  }),
});

export const postByIdApi = createApi({
  reducerPath: "postByIdApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getPostById: builder.query({
      query: (postId) => `posts/${postId}`,
    }),
  }),
});

export const { useGetPostByIdQuery } = postByIdApi;
export const { useGetPostsQuery } = postsApi;
