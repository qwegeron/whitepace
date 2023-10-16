import React, { useEffect, useState } from "react";
import { FixedSizeList, ListOnScrollProps } from "react-window";
import "./postList.css";
import { postsApi } from "../../shared/api/postsApi";
import { Post } from "../post";
import { Posts } from "../../entities/types/posts";

export const PostList: React.FC = () => {
  const [params, setParams] = useState({ limit: 10, start: 0 });
  const { data, isLoading } = postsApi.useGetPostsQuery(params);
  const [posts, setPosts] = useState<Posts[]>([]);
  useEffect(() => {
    if (data) setPosts((p) => [...p, ...data]);
  }, [data]);
  const handleScroll = (e: ListOnScrollProps) => {
    if (e.scrollOffset % 500 === 0) {
      setParams({ limit: 10, start: params.start + 10 });
    }
  };

  if (isLoading) return <h1>loading...</h1>;

  return (
    <>
      <h1 className="h1">Posts List</h1>
      {posts && posts.length > 0 && (
        <FixedSizeList
          onScroll={handleScroll}
          height={500}
          width={550}
          itemCount={posts.length}
          itemSize={100}
        >
          {({ index, style }) => (
            <div style={style}>
              <Post post={posts[index]} key={posts[index].id} />
            </div>
          )}
        </FixedSizeList>
      )}
    </>
  );
};
