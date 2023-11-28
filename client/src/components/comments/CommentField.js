/* eslint-disable react/prop-types */
import React from "react";
import CommentInput from "./CommentInput";
import Comments from "./Comments";

export default function CommentField({ postID, existingUser }) {
  return (
    <>
      <div className="my-5 pt-4 border-t-[.5px] border-gray-300">
        <CommentInput postID={postID} existingUser={existingUser} />
      </div>
      <Comments postID={postID} existingUser={existingUser} />
    </>
  );
}
