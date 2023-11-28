/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMoreHorizontal } from "../../constant/icons";
import users from "../../constant/users";
import videos from "../../constant/videos";
import CommentField from "../comments/CommentField";
import DotsOptions from "./DotsOptions";
import ReactionIcons from "./ReactionIcons";
import VideosComponent from "./VideosComponent";

export default function Media({ post, singlePage }) {
  const { userName, name, time } = post;
  const [showPopUp, setShowPopUp] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const handleMore = () => {
    setShowMore(() => !showMore);
    setShowPopUp(false);
  };
  const handlePopup = () => {
    setShowPopUp(() => !showPopUp);
    setShowMore(false);
  };

  const existingUser = users.find((u) => u.userName === userName);
  return (
    <div className="flex items-start p-4 gap-2">
      {/* profile picture of all users */}
      <div className="basis-[10%]">
        <Link to={`/users/${userName}`}>
          <img src={existingUser.img} alt="n" className=" w-12 rounded-full" />
        </Link>
      </div>
      <div className="basis-[90%]">
        <div className="flex items-center justify-between">
          {videos.map((videoProp) => (
            <VideosComponent videoProp={videoProp} key={videoProp.id} />
          ))}
          <header className="mt-1">
            <div className="flex items-center justify-between">
              {/* name and username */}
              <Link
                to={`/users/${userName}`}
                className="flex items-start -mt-[2px] mb-1 leading-3 flex-col"
              >
                <h2 className="font-bold text-lg hover:underline">{name}</h2>
                <p className="text-gray-500 text-sm mt-[-4px]">
                  {userName}
                  <span> · </span>
                  {time}
                </p>
              </Link>

              <div className="flex mt-[-10px] items-center gap-2 group relative cursor-pointer">
                <div
                  className="ml-auto p-2 hover:bg-gray-100 grid place-content-center rounded-full"
                  onClick={handleMore}
                >
                  <FiMoreHorizontal fontSize={23} />
                </div>
                <DotsOptions showMore={showMore} existingUser={existingUser} />
              </div>
            </div>
          </header>
          {/* react comment share retweet in a post */}
          <ReactionIcons
            handlePopup={handlePopup}
            post={post}
            existingUser={existingUser}
            showPopUp={showPopUp}
          />
          {/* comment input box */}
          {singlePage && <CommentField />}
        </div>
      </div>
    </div>
  );
}
