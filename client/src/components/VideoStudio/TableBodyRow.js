import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineDelete, AiOutlineEyeInvisible, FaRegEdit, MdOutlinePlaylistPlay } from "../../constant/icons";

export default function TableBodyRow({ playlists }) {
  return (
    <tr className="group">
      <td className="flex gap-2">
        <div className="relative w-[120px] duration-300 hover:scale-[1.02]">
          <Link to="/">
            <img src="/assets/3.jpg" className="object-cover rounded-sm" alt="Some video title" />
          </Link>
          {!playlists ? (
            <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">12:10</p>
          ) : (
            <p className="absolute right-0 bottom-0 w-[30%] h-full bg-opacity-70 grid place-content-center bg-gray-900 text-gray-100 text-xs px-1 py">
              <MdOutlinePlaylistPlay fontSize={23} />
            </p>
          )}
        </div>
        <div className="">
          <a href="/">
            <p className="text-sm font-semibold">Some video title</p>
          </a>
          <div className="flex opacity-0 group-hover:opacity-100 items-center mt-2 ml-2 gap-1">
            <FaRegEdit fontSize={25} className="p-1 hover:text-green-500 cursor-pointer" />
            <AiOutlineDelete fontSize={26} className="p-1 hover:text-red-500 cursor-pointer" />
          </div>
        </div>
      </td>

      <td>
        <div className="flex items-center gap-1">
          <AiOutlineEyeInvisible fontSize={19} />
          <p>Private</p>
        </div>
      </td>
      <td>Jul 23, 2022</td>
      <td>41</td>
      {!playlists && (
        <>
          <td>2</td>
          <td>41</td>
          <td>15</td>
        </>
      )}
    </tr>
  );
}
