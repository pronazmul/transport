import React from "react";
import { Link } from "react-router-dom";

export default function Notification({ handleClick }) {
  return (
    <div className="w-max max-w-full rounded-sm hover:bg-gray-50 pb-2 pt-4 px-6 border-b" onClick={handleClick}>
      <Link to className="text-black text-lg flex items-center gap-2">
        <div className="flex items-start">
          <div className="min-w-[50px]">
            <img className="w-10 h-10 rounded-full" src="https://source.unsplash.com/84E44EdD18o" alt="user" />
          </div>
          <div>
            <h2 className="text-[17px] leading-[20px]">
              <span className="font-medium">Jahid hasan</span> commented on your post{" "}
              <span className="font-medium">Beautify world</span>
            </h2>
            <p className="text-[13px] font-medium text-gray-500 -mt-[2px]">20m ago</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
