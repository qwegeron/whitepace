import React from "react";
import { FC } from "react";
import "./post.css";
import { Posts } from "../../entities/types/posts";
import { ReadMoreButton } from "../../features";

interface PostProps {
  post: Posts;
  style?: React.CSSProperties;
}

export const Post: FC<PostProps> = ({ post }) => {
  return (
    <div className="post">
      <strong>
        {post.id}. {post.title}
      </strong>
      <div className="post__text">{post.body}</div>
      <div className="post__btns">
        <ReadMoreButton post={post} />
      </div>
    </div>
  );
};
