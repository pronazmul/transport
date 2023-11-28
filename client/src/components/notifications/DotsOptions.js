import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineDelete, AiOutlineEye, FiMoreHorizontal } from "../../constant/icons";

export default function DotsOptions({ handleMore, showMore }) {
  return (
    <div className="flex mt-[-10px] group-hover:visible ml-auto invisible items-center gap-2 group relative cursor-pointer">
      <div className="ml-auto p-2 hover:bg-gray-100 grid place-content-center rounded-full" onClick={handleMore}>
        <FiMoreHorizontal className="rotate-90" fontSize={23} />
      </div>
      <div
        className={`absolute z-[5] top-full min-w-[150px] right-0 ${
          showMore ? "flex opacity-100" : "hidden opacity-0"
        } flex-col  bg-white shadow-lg shadow-gray-300 opacity-1`}
      >
        <div className="w-max rounded-sm hover:bg-gray-100 px-4 py-3 min-w-full ">
          <Link to className="text-black text-sm">
            <div className="flex items-center text-[17px]">
              <div className="mr-2">
                <AiOutlineDelete fontSize={22} />
              </div>
              Delete this notification
            </div>
          </Link>
        </div>
        <div className="w-max rounded-sm hover:bg-gray-100 px-4 py-3 min-w-full ">
          <Link to className="text-black text-sm">
            <div className="flex items-center text-[17px]">
              <div className="mr-2">
                <AiOutlineEye fontSize={22} />
              </div>
              Turn of all from <span className="font-medium ml-2"> Jahid hasan</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
