import React from "react";
import { useGetPostByIdQuery } from "../../shared/api/postsApi";
import { useParams } from "react-router-dom";
import { BackButton } from "../../features";

export const PostDetail: React.FC = () => {
  const postId = useParams();
  const { data: post, isLoading } = useGetPostByIdQuery(Number(postId.id));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Post Details</h1>
      {post && (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <p>Post ID: {post.id}</p>
          <BackButton />
        </div>
      )}
    </div>
  );
};
