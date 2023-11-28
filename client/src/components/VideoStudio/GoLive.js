/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiImageAlt, GoCalendar } from "../../constant/icons";

export default function GoLive() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="w-[60%]">
      <h2 className="text-3xl font-bold">New Stream</h2>
      <form className="grid grid-cols-2 gap-y-3 gap-x-2 border-b-[.5px] pb-4 mt-3">
        <label htmlFor="title" className="flex flex-col col-span-2">
          <span className="mb-2 text-sm font-semibold">Title</span>
          <input className="bg-gray-100 rounded-md px-3 py-2" placeholder="Add video title" type="text" id="title" />
        </label>
        <label htmlFor="visibility" className="text-sm col-span-1">
          <span className="text-sm font-semibold">Visibility</span>
          <select
            id="visibility"
            className="bg-gray-100 mt-2 w-full outline-none block px-2 py-1 font-medium text-gray-500"
          >
            <option className="bg-gray-100" selected>
              Private
            </option>
            <option className="bg-gray-100" value="US">
              Public
            </option>
          </select>
        </label>
        <label htmlFor="catagory" className="text-sm col-span-1">
          <span className="text-sm font-semibold">Catagory</span>
          <select
            id="catagory"
            className="bg-gray-100 mt-2 w-full outline-none block px-2 py-1 font-medium text-gray-500"
          >
            <option className="bg-gray-100" selected>
              People & Blog
            </option>
            <option className="bg-gray-100" value="US">
              Programming
            </option>
          </select>
        </label>
        <label className="flex items-center col-span-2 my-2 mr-2" htmlFor="check">
          <span className="text-sm flex-1 flex items-center gap-2 font-semibold">
            <GoCalendar fontSize={24} />
            <span>Schedule for later</span>
          </span>
          <div className="flex items-center bg-[#bbb] w-[2rem] h-[1.1rem] rounded-full relative">
            <input id="default-checkbox" type="checkbox" className="invisible" />
            <label
              htmlFor="default-checkbox"
              onClick={() => setToggle(!toggle)}
              className={`absolute top-[-2px] cursor-pointer ${toggle ? "left-[15px]" : "left-[-5px]"}`}
            >
              <div className="h-[1.3rem] w-[1.3rem] rounded-full bg-blue-500" />
            </label>
          </div>
        </label>
        <label htmlFor="id" className="flex flex-col col-span-2">
          <span className="mb-2 text-sm font-semibold">Description</span>
          <textarea
            className="bg-gray-100 rounded-md px-3 py-2 resize-none"
            placeholder="Add video description"
            type="text"
            id="id"
          />
        </label>
        <div className="p-4 rounded-md hover:shadow-lg hover:shadow-gray-100 shadow-sm shadow-gray-100 h-[140px] col-span-1 w-[75%]">
          <label
            htmlFor="file"
            className="cursor-pointer flex flex-col items-center border-2 border-dashed border-blue-300 h-full rounded-md"
          >
            <div className="mt-8">
              <BiImageAlt fontSize={22} className="mx-auto text-blue-400" />
              <p className="font-semibold text-xs text-blue-400">Upload Thumbnail</p>
            </div>
            <input type="file" id="file" className="opacity-0 hidden h-[.1px] w-[.1px]" />
          </label>
        </div>
        <Link
          to="stream"
          className="py-[6px] col-span-2 max-w-fit text-white font-semibold px-6 rounded-full hover:bg-blue-600 bg-blue-500"
          type="button"
        >
          Create Stream
        </Link>
      </form>
    </div>
  );
}
