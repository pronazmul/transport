import React from "react";
import { Link } from "react-router-dom";

export default function Card({ video }) {
  return (
    <Link to={`/watch/${video.id}`}>
      <div className="h-[193px] w-full">
        <img className="rounded-md object-cover h-full w-full" src={video.thumbnail} alt="sea" />
      </div>
      <header className="mt-3">
        <div className="flex items-start">
          <div className="min-w-[50px]">
            <img className="w-10 h-10 rounded-full" src="https://source.unsplash.com/84E44EdD18o" alt="user" />
          </div>
          <div>
            <h2 className="text-lg roboto leading-5 font-semibold">{video.description}</h2>
            <h3 className="text-[14px] roboto mt-[3px] font-medium text-gray-700">{video.name}</h3>
            <p className="text-[13px] roboto font-medium text-gray-700">{video.views} views · 4 month ago</p>
          </div>
        </div>
      </header>
    </Link>
  );
}
