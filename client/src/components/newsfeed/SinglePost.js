/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMoreHorizontal } from "../../constant/icons";
import CommentField from "../comments/CommentField";
import DotsOptions from "./DotsOptions";
import ReactionIcons from "./ReactionIcons";

export default function SinglePost({ post }) {
  // const { name, img, userName, description, time, video } = post || {};
  const storedUserData = sessionStorage.getItem("userData");

  // Parse the JSON string back to an object
  const userData = storedUserData ? JSON.parse(storedUserData) : null;

  // const [uploadedPhotoUrl, setUploadedPhotoUrl] = useState("");

  const [showPopUp, setShowPopUp] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [showCommentInput, setShowCommentInput] = useState(false);

  const handleMore = () => {
    setShowMore(() => !showMore);
    setShowPopUp(false);
  };
  const handlePopup = () => {
    setShowPopUp(() => !showPopUp);
    setShowMore(false);
  };

  const handleCommentClick = () => {
    setShowCommentInput(!showCommentInput); // Toggle comment input visibility
    setShowMore(false); // Close more options when clicking comment
  };

  return (
    <div className="flex items-start p-4 gap-2">
      {/* profile picture of all users */}
      <div className="basis-[10%]">
        <Link to={`/users/${post.user.name}`}>
          <img
            src={
              userData.image
                ? userData.image
                : process.env.PUBLIC_URL + "/assets/avatar.png"
            }
            alt="n"
            className="h-12 w-12 rounded-full"
          />
        </Link>
      </div>
      {/* content */}
      <div className="basis-[90%]">
        <header className="mt-1">
          <div className="flex items-center justify-between">
            {/* name and username */}
            <Link
              to={`/users/${post.user.name}`}
              className="flex items-start -mt-[2px] mb-1 leading-3 flex-col"
            >
              <h2 className="font-bold text-lg hover:underline">
                {post.user.name}
              </h2>
              <p className="text-gray-500 text-sm mt-[-4px]">
                {post.user.name}
                <span> · </span>
                {new Date(post.timestamp).toDateString()}
              </p>
            </Link>

            <div className="flex mt-[-10px] items-center gap-2 group relative cursor-pointer">
              <div
                className="ml-auto p-2 hover:bg-gray-100 grid place-content-center rounded-full"
                onClick={handleMore}
              >
                <FiMoreHorizontal fontSize={23} />
              </div>
              <DotsOptions showMore={showMore} existingUser={userData} />
            </div>
          </div>
          <p className="text-gray-900 w-full">{post.content}</p>
          {post.media && (
            <div className="rounded-3xl overflow-hidden mt-3 w-fit">
              <img
                src={`http://localhost:8000/uploads/images/${post.media[0]}`}
                alt=""
                className="max-h-[420px] max-w-[420px]"
              />
            </div>
          )}
        </header>

        {/* react comment share retweet in a post */}
        <ReactionIcons
          handlePopup={handlePopup}
          handleCommentClick={handleCommentClick}
          post={post}
          existingUser={userData}
          postCreator={post.user._id}
          showPopUp={showPopUp}
        />
        {/* comment input box */}
        {showCommentInput && (
          <CommentField postID={post._id} existingUser={userData} />
        )}
      </div>
    </div>
  );
}
