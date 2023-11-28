import React from "react";
import { AiOutlineDislike, AiOutlineLike } from "../../../constant/icons";

export default function LikeUnlike() {
  return (
    <div className="flex gap-10 w-48">
      <div className="flex items-center gap-1">
        <button type="button" className="shrink-0 cursor-pointer">
          <AiOutlineLike fontSize={22} />
        </button>
        <div className="text-lg leading-[1.7142857]">40</div>
      </div>
      <div className="flex items-center gap-1">
        <button type="button" className="shrink-0 cursor-pointer">
          <AiOutlineDislike fontSize={22} />
        </button>
        <div className="text-lg leading-[1.7142857]">30</div>
      </div>
    </div>
  );
}
