import React, { useState } from "react";
import PostSection from "../components/newsfeed/PostSection";
import posts from "../constant/Posts";

export default function Discover() {
  const [active, setActive] = useState("For you");
  return (
    <div className="max-w-[700px] mx-auto">
      <div className="flex items-center sticky top-[73px] bg-w z-10 justify-between pt-4 pb-2 px-4 font-medium">
        {["For you", "Trending", "US Election", "News", "Sports", "Entertainment"].map((item) => (
          <button
            key={item}
            className={`border-b-4 hover:border-blue-300 ${
              active === item ? "border-blue-500" : "border-[#ffffff00]"
            }  pb-[2px]`}
            type="button"
            onClick={() => setActive(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div>
        <PostSection posts={posts} />
      </div>
    </div>
  );
}
