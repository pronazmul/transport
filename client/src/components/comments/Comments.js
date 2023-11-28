/* eslint-disable react/prop-types */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiMoreHorizontal, MdOutlineReportProblem } from "../../constant/icons";
import { getTimeAgo } from "../../libraries/getTimeAgo";
import Replies from "./Replies";

export default function Comments({ postID }) {
  const [showMore, setShowMore] = useState(false);
  const [toggleReply, setToggleReply] = useState(false);
  const [comments, setComments] = useState([]);
  const token = sessionStorage.getItem("authToken");

  const handleMore = () => {
    setShowMore(() => !showMore);
  };

  useEffect(() => {
    const fetchComments = async () => {
      try {
        axios.defaults.headers.common["x-auth-token"] = `Bearer ${token}`;
        const response = await axios.get(
          `http://localhost:8000/api/tweet/posts/${postID}/comment/list`
        );

        if (response.status === 200) {
          const commentsData = response.data;
          setComments(commentsData); // Update the comments state with fetched comments
          console.log(commentsData);
        } else {
          console.error("Error fetching comments:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, [postID]);

  return (
    <div className="my-5 pt-4 border-t-[.5px] border-gray-300">
      {comments &&
        comments.length > 0 &&
        comments.map((comment) => (
          <div key={comment._id} className="flex items-start gap-3">
            <div>
              <img
                src="https://source.unsplash.com/ZHvM3XIOHoE"
                className="w-12 h-12 rounded-full"
                alt="d"
              />
            </div>
            <div className="flex-1">
              <div className="bg-gray-100 rounded-lg mt-[3px] pt-2 px-3 pb-3">
                {/* user header */}
                <div className="flex items-center justify-between pt-1">
                  {/* name and username */}
                  <Link to="/users" className="flex items-center gap-1 mb-2 ">
                    <h2 className="font-semibold text-sm hover:underline">
                      {comment.postedBy && comment.postedBy.name}
                    </h2>
                    <p className="text-gray-500 text-xs">
                      <span className="px-1"> · </span>
                      {getTimeAgo(comment.created)}
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
                      {/* <div className="w-max rounded-sm hover:bg-gray-100 px-2 py-[7px] min-w-full ">
                                        <Link to className="text-black text-sm">
                                            <div className="flex items-center">
                                                <div className="mr-2">
                                                    <AiOutlinePushpin fontSize={22} />
                                                </div>
                                                Pin
                                            </div>
                                        </Link>
                                    </div> */}
                      <div className="w-max rounded-sm hover:bg-gray-100 px-2 py-[7px] min-w-full ">
                        <Link to className="text-black text-sm">
                          <div className="flex items-center">
                            <div className="mr-2">
                              <MdOutlineReportProblem fontSize={20} />
                            </div>
                            Report tweet
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-sm mt-1">{comment.content}</p>
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
                <span>·</span>
                <p className="font-normal">{comment.replies.length} Reply</p>
              </div>

              {/* reply */}
              <Replies toggle={toggleReply} replies={comment.replies} />
            </div>
          </div>
        ))}
    </div>
  );
}
