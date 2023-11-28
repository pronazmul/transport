import React from "react";
import Conversation from "./Conversation";

export default function Conversations() {
  return (
    <div className="w-[100px] border-r border-t-0 border-gray-300 lg:col-span-1 md:w-full">
      <div className="h-[65px] text-center text-grey-500 p-4 border-b border-gray-300 flex md:justify-start justify-center">
        <h2 className="font-bold text-xl">Conversations</h2>
      </div>
      <div className="overflow-auto">
        <div>
          <Conversation />
        </div>
      </div>
    </div>
  );
}
