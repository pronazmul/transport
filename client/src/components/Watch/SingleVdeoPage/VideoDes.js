import React from "react";
import CommentInput from "../../comments/CommentInput";
import Comments from "../../comments/Comments";
import LikeUnlike from "./LikeUnlike";

export default function VideoDes() {
  return (
    <div>
      <h1 className="text-xl font-semibold tracking-tight mb-4">This is the title</h1>
      <div className="pb-4 flex items-center justify-between border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img className="w-12 h-12 rounded-full" src="https://source.unsplash.com/84E44EdD18o" alt="user" />
            <h3 className="font-semibold">Nazmul Islam</h3>
          </div>
        </div>
        <LikeUnlike />
      </div>
      <div className="mt-4">
        <p className="text-sm font-semibold mb-2">
          51K views <span className="ml-2"> 1 day ago</span>
        </p>
        <p className="text-sm ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nulla facere nobis dolores facilis illo omnis
          quibusdam voluptatum, ratione laborum.
        </p>
      </div>
      <div className="mt-4">
        <CommentInput />
      </div>
      <Comments />
    </div>
  );
}
