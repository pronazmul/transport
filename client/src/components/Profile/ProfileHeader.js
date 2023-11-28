/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable camelcase */
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
    BsPatchCheckFill,
    FiMoreHorizontal,
    HiOutlineMail,
    MdLink,
    MdOutlineBlock,
    MdOutlineLocationOn,
    MdOutlineNotificationAdd,
    MdOutlineNotificationsActive,
    MdWork,
} from "../../constant/icons";

export default function ProfileHeader({ existingUser }) {
  const followBtnRef = useRef(null);
  const [showMore, setShowMore] = useState(false);
  const handleMore = () => {
    setShowMore(() => !showMore);
  };
  const [activeNotification, setActiveNotification] = useState(false);
  const [follow, setFollow] = useState(false);
  const loggedInUserName = "@Mohammadali003";
  const { name, img, bio, userName, work_title, city, country, following, followers, linkString } = existingUser;

  const randomUser = loggedInUserName === userName;
  const image = false;

  const handleMouseEnter = () => {
    if (followBtnRef.current.innerText === "Following") {
      followBtnRef.current.innerText = "Unfollow";
    }
  };
  const handleMouseLeave = () => {
    if (followBtnRef.current.innerText === "Unfollow") {
      followBtnRef.current.innerText = "Following";
    }
  };

  return (
    <>
      <div>
        {image ? (
          <div className="h-[150px] overflow-hidden">
            <img
              className="object-cover"
              src="https://source.unsplash.com/3_MEgdUNMH0"
              alt="bg"
              height="150px"
              width="100%"
            />
          </div>
        ) : (
          <div className="h-[150px] bg-gradient-to-r from-cyan-300 to-blue-400" />
        )}
      </div>
      <div className="pl-7 border-b-[.5px]">
        {/* profile img */}
        <div className="flex items-end justify-between">
          <img className="h-32 w-32 rounded-full mt-[-70px] border-[4px] border-white" src={img} alt="user" />
          <div className="flex items-center gap-3">
            {!randomUser ? (
              <>
                {follow && (
                  <div
                    onClick={() => setActiveNotification(!activeNotification)}
                    className="p-2 rounded-full border hover:bg-gray-50 cursor-pointer"
                  >
                    {!activeNotification ? (
                      <MdOutlineNotificationAdd fontSize={23} />
                    ) : (
                      <MdOutlineNotificationsActive fontSize={23} />
                    )}
                  </div>
                )}
                <button className="p-2 hover:bg-gray-50 border rounded-full" type="button">
                  <HiOutlineMail fontSize={23} />
                </button>
                <button
                  onClick={() => setFollow(!follow)}
                  ref={followBtnRef}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className={`py-[7px] rounded-full tracking-wide border border-blue-100 ${
                    !follow
                      ? "bg-blue-600 w-[90px] font-medium text-white hover:bg-blue-500"
                      : "text-blue-500 font-bold hover:bg-red-100 hover:text-red-500 hover:border-red-100 w-[108px]"
                  } text-[16px]`}
                  type="button"
                >
                  {!follow ? "Follow" : "Following"}
                </button>
                <div className="flex items-center border hover:bg-gray-100 rounded-full relative cursor-pointer">
                  <div className="p-2 grid place-content-center" onClick={handleMore}>
                    <FiMoreHorizontal fontSize={23} />
                  </div>
                  <div
                    className={`absolute z-[5] top-[105%] min-w-[150px] right-0 ${
                      showMore ? "flex opacity-100" : "hidden opacity-0"
                    } flex-col  bg-white shadow-sm shadow-gray-300 opacity-1`}
                  >
                    {/* {existingUser === loggedInUser ? ( */}
                    {/* <div className="w-max rounded-sm hover:bg-gray-100 px-2 py-[7px] min-w-full ">
                                        <Link to className="text-black text-sm">
                                            <div className="flex items-center">
                                                <div className="mr-2">
                                                    <AiOutlineDelete fontSize={22} />
                                                </div>
                                                Delete
                                            </div>
                                        </Link>
                                    </div> */}
                    {/* ) : ( */}
                    <div className="w-max rounded-sm hover:bg-gray-100 px-2 py-[7px] min-w-full ">
                      <Link to className="text-black text-sm">
                        <div className="flex items-center">
                          <div className="mr-2">
                            <MdOutlineBlock fontSize={20} />
                          </div>
                          Block
                        </div>
                      </Link>
                    </div>
                    {/* <div className="w-max rounded-sm hover:bg-gray-100 px-2 py-[7px] min-w-full ">
                                        <Link to className="text-black text-sm">
                                            <div className="flex items-center">
                                                <div className="mr-2">
                                                    <RiUserUnfollowLine fontSize={20} />
                                                </div>
                                                Follow
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="w-max rounded-sm hover:bg-gray-100 px-2 py-[7px] min-w-full ">
                                        <Link to className="text-black text-sm">
                                            <div className="flex items-center">
                                                <div className="mr-2">
                                                    <MdOutlineReportProblem fontSize={20} />
                                                </div>
                                                Report
                                            </div>
                                        </Link>
                                    </div> */}
                    {/* )} */}
                  </div>
                </div>
              </>
            ) : (
              <Link
                to="/edit"
                type="button"
                className="py-[6px] px-4 border-2 font-medium tracking-[.015em] border-blue-600 text-blue-600 hover:bg-gray-50 cursor-pointer rounded-full"
              >
                Edit Profile
              </Link>
            )}
          </div>
        </div>
        <header className="pt-4">
          <h2 className="font-semibold text-xl flex items-center gap-2">
            {name} <BsPatchCheckFill fontSize={15} className="text-blue-600" />
          </h2>

          <p className="text-sm text-gray-500">{userName}</p>
          <p className="py-2">{bio}</p>
        </header>
        <div className="flex flex-wrap gap-x-5 gap-y-1 mb-4">
          <div className="flex items-center text-sm gap-2">
            <MdWork fontSize={22} />
            <p>{work_title}</p>
          </div>
          {/* <div className="flex items-center text-sm gap-2">
                        <GoCalendar fontSize={19} />
                        <p>Joined April 2022</p>
                    </div> */}
          <div className="flex items-center text-sm gap-2">
            <MdOutlineLocationOn fontSize={20} />
            <p>
              {city}, {country}
            </p>
          </div>
          <div className="flex basis-full items-center mt-1 gap-2">
            <MdLink fontSize={22} />
            <Link className="text-sm text-blue-600" to="https://sites333.netlify.app/">
              {linkString}
            </Link>
          </div>
          <div className="flex basis-full items-center gap-2 mt-[8px]">
            <p className="text-black">{following} Following</p>
            <span>·</span>
            <p className="text-black">{followers} Followers</p>
          </div>
        </div>
      </div>
    </>
  );
}
