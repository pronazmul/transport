import React from "react";
import { useParams } from "react-router-dom";
import SinglePost from "../components/newsfeed/SinglePost";
import posts from "../constant/Posts";

export default function SinglePostView() {
  const userId = useParams();
  const existingPost = posts.find((post) => post.id.toString() === userId.id);

  return (
    <div className="max-w-[700px] mx-auto">
      <SinglePost post={existingPost} singlePage />
    </div>
  );
}
