import React, { useState } from "react";
import ProfileHeader from "../components/Profile/ProfileHeader";
import PostSection from "../components/newsfeed/PostSection";
import posts from "../constant/Posts";
import users from "../constant/users";

export default function Profile() {
  const [active, setActive] = useState("posts");
  const loggedInUserName = "@Mohammadali003";
  const existingUser = users.find((user) => user.userName === loggedInUserName);

  const post = posts.filter((p) => p.userName === loggedInUserName);

  return (
    <div className="max-w-[700px] mx-auto">
      <ProfileHeader existingUser={existingUser} />
      {/* post videos media replies */}
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
        {/* user's own post */}
        {active === "posts" ? <PostSection posts={post} /> : "about section"}
      </div>
    </div>
  );
}
