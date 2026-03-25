"use client"

import { useParams } from "next/navigation";

const Post = () => {
  const params = useParams<{ id: string }>();

  return <p>Post: {params.id}</p>;
};

export default Post;
