import React from "react";
import { Link } from "react-router-dom";
import {
    AiOutlineDelete,
    AiOutlineEye,
    AiOutlinePushpin,
    MdOutlineBlock,
    MdOutlineNotificationsOff,
    MdOutlineReportProblem,
    RiUserUnfollowLine,
    TbReportOff,
} from "../../constant/icons";

export default function DotsOptions({ showMore, existingUser }) {
  const loggedInUser = "@Mohammadali003";
  // const location = useLocation();

  return (
    <div
      className={`absolute z-[5] top-full min-w-[150px] right-0 ${
        showMore ? "flex opacity-100" : "hidden opacity-0"
      } flex-col  bg-white shadow-sm shadow-gray-300 opacity-1 p-2`}
    >
      {existingUser.userName === loggedInUser ? (
        <>
          <div className="w-max rounded-sm hover:bg-gray-100 px-2 py-[7px] min-w-full ">
            <Link to className="text-black text-sm">
              <div className="flex items-center">
                <div className="mr-2">
                  <AiOutlinePushpin fontSize={22} />
                </div>
                Pin
              </div>
            </Link>
          </div>
          <div className="w-max rounded-sm hover:bg-gray-100 px-2 py-[7px] min-w-full ">
            <Link to className="text-black text-sm">
              <div className="flex items-center">
                <div className="mr-2">
                  <AiOutlineDelete fontSize={22} />
                </div>
                Delete
              </div>
            </Link>
          </div>
          {/* {location.pathname === `/users/${loggedInUser}` && ( */}
          <div className="w-max rounded-sm hover:bg-gray-100 px-2 py-[7px] min-w-full ">
            <Link to className="text-black text-sm">
              <div className="flex items-center">
                <div className="mr-2">
                  <AiOutlineEye fontSize={22} />
                </div>
                Who can reply?
              </div>
            </Link>
          </div>
          {/* )} */}
        </>
      ) : (
        <>
          <div className="w-max rounded-sm hover:bg-gray-100 px-2 py-[7px] min-w-full ">
            <Link to className="text-black text-sm">
              <div className="flex items-center">
                <div className="mr-2">
                  <MdOutlineNotificationsOff fontSize={22} />
                </div>
                Mute
              </div>
            </Link>
          </div>
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
          <div className="w-max rounded-sm hover:bg-gray-100 px-2 py-[7px] min-w-full ">
            <Link to className="text-black text-sm">
              <div className="flex items-center">
                <div className="mr-2">
                  <RiUserUnfollowLine fontSize={20} />
                </div>
                Follow {existingUser.userName}
              </div>
            </Link>
          </div>
          <div className="w-max rounded-sm hover:bg-gray-100 px-2 py-[7px] min-w-full ">
            <Link to className="text-black text-sm">
              <div className="flex items-center">
                <div className="mr-2">
                  <TbReportOff fontSize={20} />
                </div>
                Not interested in this Post
              </div>
            </Link>
          </div>
          <div className="w-max rounded-sm hover:bg-gray-100 px-2 py-[7px] min-w-full ">
            <Link to className="text-black text-sm">
              <div className="flex items-center">
                <div className="mr-2">
                  <MdOutlineReportProblem fontSize={20} />
                </div>
                Report Post
              </div>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
