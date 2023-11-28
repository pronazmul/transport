import React from "react";
import { MdModeEditOutline } from "../../constant/icons";

export default function EditProfile() {
  return (
    <div className="bg-white px-5 py-5">
      <form>
        {/* change profile and cover picture */}
        <div className="flex h-32 items-center relative overflow-hidden justify-center py-3 border-b-[.5px] mb-4">
          <img className="absolute z-1" src="./assets/2.jpg" alt="cover" />
          <img
            className="h-24 w-24 z-[2] absolute rounded-full"
            src="https://source.unsplash.com/WNoLnJo7tS8"
            alt="user"
          />
          <div className="absolute z-20 bottom-[17px] ml-[71px]">
            <button type="button" className="py-2 px-2 rounded-full hover:opacity-40 bg-black opacity-60 text-white">
              <label htmlFor="file" className="cursor-pointer">
                <MdModeEditOutline fontSize={16} />
                <input type="file" id="file" accept="image/*" className="opacity-0 hidden h-[.1px] w-[.1px]" />
              </label>
            </button>
          </div>
          <div>
            <button
              type="button"
              className="py-2 px-2 absolute top-2 right-2 rounded-full hover:opacity-40 bg-black opacity-60 text-white"
            >
              <label htmlFor="file" className="cursor-pointer">
                <MdModeEditOutline fontSize={16} />
                <input type="file" id="file" accept="image/*" className="opacity-0 hidden h-[.1px] w-[.1px]" />
              </label>
            </button>
          </div>
        </div>
        {/* change others field */}
        <div className="grid grid-cols-2 gap-2">
          <label className="flex flex-col col-span-2" htmlFor="name">
            <span className="text-sm mb-1 font-semibold">Full Name</span>
            <input
              className="bg-gray-100 placeholder:text-black border-1 border-black rounded-md px-3 py-2"
              type="text"
              id="name"
              placeholder="Mohammah Ali"
            />
          </label>
          {/* <label className="flex flex-col col-span-2" htmlFor="email">
                        <span className="text-sm mb-1 font-semibold">Email address</span>
                        <input
                            className="bg-gray-100 placeholder:text-black border-1 border-black rounded-md px-3 py-2"
                            type="email"
                            id="email"
                            placeholder="mohammah@gmail.com"
                        />
                    </label> */}
          <label className="flex flex-col col-span-2" htmlFor="work">
            <span className="text-sm mb-1 font-semibold">Profession</span>
            <input
              className="bg-gray-100 placeholder:text-black border-1 border-black rounded-md px-3 py-2"
              type="text"
              id="work"
              placeholder="Student"
            />
          </label>
          <label className="flex flex-col" htmlFor="city">
            <span className="text-sm mb-1 font-semibold">City</span>
            <input
              className="bg-gray-100 placeholder:text-black border-1 border-black rounded-md px-3 py-2"
              type="text"
              id="city"
              placeholder="Dhaka, Bangladesh"
            />
          </label>
          <label className="flex flex-col" htmlFor="country">
            <span className="text-sm mb-1 font-semibold">Country</span>
            <input
              className="bg-gray-100 placeholder:text-black border-1 border-black rounded-md px-3 py-2"
              type="text"
              id="country"
              placeholder="Bangladesh"
            />
          </label>
          <label className="flex items-center gap-2 col-span-2" htmlFor="website">
            <span className="text-sm mb-1 bg-gray-300 font-semibold py-[8.9px] px-5">Website</span>
            <input
              className="bg-gray-100 placeholder:text-black border-1 border-black w-full rounded-md px-3 py-2"
              type="url"
              id="website"
              placeholder="Bangladesh"
            />
          </label>
          <label className="flex flex-col col-span-2" htmlFor="textarea">
            <span className="text-sm mb-1 font-semibold">Update bio</span>
            <textarea
              rows="3"
              placeholder="What's on your mind"
              className="focus rounded-md resize-none py-2 bg-gray-100 placeholder:text-black border-1 border-black px-3"
            />
          </label>
          <button type="button" className="col-span-2 hover:bg-blue-600 py-2 bg-blue-500 text-white rounded-md">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
