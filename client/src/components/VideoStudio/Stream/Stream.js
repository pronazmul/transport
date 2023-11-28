import React from "react";
import StreamHeader from "./StreamHeader";
import StreamOptions from "./StreamOptions";

export default function Stream() {
  return (
    <div className="bg-[#161616] text-white">
      <div className="max-w-6xl w-[95%] mx-auto">
        <StreamHeader />
        <StreamOptions />
      </div>
    </div>
  );
}
