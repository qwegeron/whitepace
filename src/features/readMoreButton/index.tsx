import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Posts } from "../../entities/types/posts";

interface MyButtonProps {
  post: Posts;
}

export const ReadMoreButton: FC<MyButtonProps> = ({ post: Posts }) => {
  const router = useNavigate();

  return <button onClick={() => router(`/post/${Posts.id}`)}>Read more</button>;
};
