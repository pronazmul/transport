/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { Link } from "react-router-dom";
import { MdOutlineBlock } from "../../constant/icons";
import { getTimeAgo } from "../../libraries/getTimeAgo";
import CommentInput from "./CommentInput";

export default function Replies({ toggle, replies }) {
  // const loggedInUser = '@Mohammadali003';
  // const existingUser = '@Mohammadali003';
  const [toggleReply, setToggleReply] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const handleMore = () => {
    setShowMore(() => !showMore);
  };

  useEffect(() => {
    setToggleReply(toggle);
  }, [toggle]);

  return (
    <div className="my-5">
      {replies &&
        replies.length > 0 &&
        replies.map((reply) => (
          <div key={reply._id} className="flex items-start gap-3">
            <div>
              <img
                src="https://source.unsplash.com/iEEBWgY_6lA"
                className="w-12 h-12 rounded-full"
                alt="d"
              />
            </div>
            <div className="flex-1 ">
              <div className="bg-gray-100 rounded-lg mt-[3px] pt-2 px-3 pb-3">
                {/* user header */}
                <div className="flex items-center justify-between pt-1">
                  {/* name and username */}
                  <Link to="/users" className="flex items-center gap-1 mb-2 ">
                    <h2 className="font-semibold text-sm hover:underline">
                      {reply.postedBy.name}
                    </h2>
                    <p className="text-gray-500 text-xs">
                      <span className="px-1"> · </span>{" "}
                      {getTimeAgo(reply.created)}
                    </p>
                  </Link>

                  <div className="flex mt-[-10px] items-center gap-2 group relative cursor-pointer">
                    <div
                      className="ml-auto p-2 hover:bg-gray-100 grid place-content-center rounded-full"
                      onClick={handleMore}
                    >
                      <FiMoreHorizontal fontSize={23} />
                    </div>
                    <div
                      className={`absolute z-[5] top-full min-w-[150px] right-0 ${
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
                </div>
                <p className="text-sm mt-1">{reply.content}</p>
              </div>
              <div className="text-xs flex items-center gap-3 mt-2 font-semibold text-gray-600">
                <button
                  type="button"
                  className="hover:bg-gray-100 rounded-sm px-1 py-[.5px]"
                >
                  like
                </button>
                <button
                  type="button"
                  onClick={() => setToggleReply(!toggleReply)}
                  className="hover:bg-gray-100 rounded-sm px-1 py-[.5px]"
                >
                  Reply
                </button>
              </div>
              {toggleReply && (
                <div className="mt-4">
                  <CommentInput reply />
                </div>
              )}
            </div>
          </div>
        ))}
    </div>
  );
}
