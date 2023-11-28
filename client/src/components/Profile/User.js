import React, { useState } from "react";
import posts from "../../constant/Posts";
import PostSection from "../newsfeed/PostSection";
import ProfileHeader from "./ProfileHeader";

export default function User({ existingUser }) {
  const [active, setActive] = useState("posts");

  const existingUserposts = posts.filter((p) => p.userName === existingUser.userName);

  return (
    <div className="max-w-[700px] mx-auto">
      <ProfileHeader existingUser={existingUser} />
      <div className="bg-w">
        <div className="flex items-center pt-4 pb-2 px-4 font-medium gap-5">
          {["posts", "videos", "media", "replies"].map((item) => (
            <button
              key={item}
              className={`border-b-4 ${active === item ? "border-gray-900" : "border-white"}  pb-[2px]`}
              type="button"
              onClick={() => setActive(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
        {active === "posts" ? <PostSection posts={existingUserposts} /> : "about section"}
      </div>
    </div>
  );
}
