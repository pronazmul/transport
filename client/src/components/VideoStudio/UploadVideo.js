import React from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import videoFile from "../../assets/video.mp4";
import { BiImageAlt, BiVideo } from "../../constant/icons";

export default function UploadVideo() {
  return (
    <Scrollbars style={{ width: "100%", height: "80vh" }}>
      <div className="pr-5 w-[60%]">
        <h2 className="text-3xl font-semibold">Upload Video</h2>
        <form className="grid grid-cols-2 gap-2 border-b-[.5px] pb-4 mt-2">
          <div className="p-4 rounded-md hover:shadow-lg hover:shadow-gray-100 shadow-sm shadow-gray-100 h-[140px] col-span-1 w-[75%] mx-auto">
            <label
              htmlFor="file"
              className="cursor-pointer flex flex-col items-center border-2 border-dashed border-blue-300 h-full rounded-md"
            >
              <div className="mt-7">
                <BiVideo fontSize={25} className="mx-auto text-blue-400" />
                <p className="font-semibold text-sm text-blue-400">
                  Upload Video
                </p>
              </div>
              <input
                type="file"
                id="file"
                className="opacity-0 hidden h-[.1px] w-[.1px]"
              />
            </label>
          </div>
          <div className="rounded-md col-span-1 -mt-2">
            <div className="border p-2 max-w-fit rounded-md mt-2">
              <video
                width="180px"
                height="100%"
                className="rounded-t-md"
                controls
              >
                <track kind="captions" />
                <source src={videoFile} type="video/mp4" />
              </video>
              <p className="text-xs font-semibold pt-2 px-2">Preview video</p>
            </div>
          </div>
          <div className="p-4 rounded-md hover:shadow-lg hover:shadow-gray-100 shadow-sm shadow-gray-100 h-[140px] col-span-1 w-[75%] mx-auto">
            <label
              htmlFor="file"
              className="cursor-pointer flex flex-col items-center border-2 border-dashed border-blue-300 h-full rounded-md"
            >
              <div className="mt-8">
                <BiImageAlt fontSize={22} className="mx-auto text-blue-400" />
                <p className="font-semibold text-xs text-blue-400">
                  Upload Thumbnail
                </p>
              </div>
              <input
                type="file"
                id="file"
                className="opacity-0 hidden h-[.1px] w-[.1px]"
              />
            </label>
          </div>
          <div />
          <label htmlFor="title" className="flex flex-col col-span-2">
            <span className="mb-2 text-lg font-semibold">Title</span>
            <input
              className="bg-gray-100 rounded-md px-3 py-2"
              placeholder="Add video title"
              type="text"
              id="title"
            />
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
          <label htmlFor="catagory" className="text-sm col-span-1 mb-3">
            <span className="text-sm font-semibold">Catagory</span>
            <select
              id="catagory"
              className="bg-gray-100 mt-2 w-full outline-none block px-2 py-1 font-medium text-gray-500"
            >
              <option className="bg-gray-100" selected>
                People & Blog
              </option>
              <option className="bg-gray-100" value="programming">
                Programming
              </option>
            </select>
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
          <button
            className="py-[6px] max-w-fit text-white font-semibold px-7 rounded-full hover:bg-blue-600 bg-blue-500"
            type="button"
          >
            Post
          </button>
        </form>
      </div>
    </Scrollbars>
  );
}
