import React from "react";
import Conversations from "../../components/Messages/Conversations";
import MessagesBox from "../../components/Messages/MessagesBox";

export default function Messages() {
  return (
    <div>
      <div className="max-w-6xl mx-auto -mt-1">
        <div className="min-w-full h-[calc(100vh_-_73px)] border rounded flex lg:grid lg:grid-cols-3">
          <Conversations />
          <MessagesBox />
        </div>
      </div>
    </div>
  );
}
