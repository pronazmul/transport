import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiSettings, MdOutlineNotifications } from "../../../constant/icons";
import Notification from "./Notification";

export default function NotificationDropDown({ watchPage }) {
  const [dropDown, setDropDown] = useState(false);
  const handleClick = () => {
    setDropDown(() => !dropDown);
  };

  return (
    <div
      className={`p-2 rounded-full cursor-pointer relative mr-[2px] ${watchPage ? "text-white" : "hover:bg-gray-100"}`}
      onClick={handleClick}
    >
      <MdOutlineNotifications fontSize={27} />
      <span className="absolute w-4 h-4 top-[8px] right-[6px] bg-red-500 rounded-full text-[10px] font-semibold grid place-content-center text-white">
        2
      </span>
      <div
        className={`absolute top-[109%] min-w-[300px] max-w-[400px] hover:scale-100 right-0 ${
          dropDown ? "flex opacity-100" : "hidden opacity-0"
        } flex-col  bg-white shadow-sm shadow-gray-300 opacity-1`}
      >
        <div
          className={`py-3 px-6 flex items-center justify-between cursor-default border-b ${
            watchPage ? "text-black" : ""
          }`}
        >
          <p className="font-semibold text-lg">Notifications</p>
          <FiSettings fontSize={21} className="cursor-pointer hover:rotate-6" />
        </div>
        <Notification handleClick={handleClick} />
        <Notification handleClick={handleClick} />
        <Notification handleClick={handleClick} />
        <Notification handleClick={handleClick} />
        <div className="pb-4 pt-3 px-6 border-t cursor-default">
          <Link to="notifications" className="text-blue-600 hover:text-blue-500 cursor-pointer">
            View all notifications
          </Link>
        </div>
      </div>
    </div>
  );
}
