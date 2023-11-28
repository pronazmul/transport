/* eslint-disable react/prop-types */
import React, { useState } from "react";
import SinglePost from "./SinglePost";
import TextArea from "./Textarea";
import VideosComponent from "./VideosComponent";
// eslint-disable-next-line react/prop-types
export default function TabbedComponent({ posts, videos }) {
  console.log("The posts: " + posts);
  const [activeTab, setActiveTab] = useState("forYou");
  const openTab = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div className="tab-container">
      {/* Tab buttons */}
      <div className="flex items-start tabs">
        <div className="tab-button basis-[50%]">
          <a
            className={`${activeTab === "forYou" ? "active" : ""}`}
            onClick={() => openTab("forYou")}
          >
            <p className="font-semibold">For You</p>
          </a>
        </div>
        <div className="tab-button basis-[50%]">
          <a
            className={`${activeTab === "following" ? "active" : ""}`}
            onClick={() => openTab("following")}
          >
            <p className="font-semibold">Following</p>
          </a>
        </div>
      </div>
      <TextArea />

      {/* Tab content */}
      <div
        id="forYou"
        className={`tab-content ${activeTab === "forYou" ? "active" : ""}`}
      >
        {videos.map((videoProp) => (
          <VideosComponent videoProp={videoProp} key={videoProp.id} />
        ))}
      </div>
      <div
        id="following"
        className={`tab-content ${activeTab === "following" ? "active" : ""}`}
      >
        {/* post's video and image */}
        {posts.map((post) => (
          <SinglePost post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
}
