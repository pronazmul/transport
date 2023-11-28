import React from "react";
import StreamPreview from "./StreamPreview";

export default function StreamHeader() {
  return (
    <div className="flex items-start gap-3 mb-3">
      <StreamPreview />
      <header className="flex flex-1 items-start justify-between bg-g py-[12px] px-4">
        <div>
          <div>
            <p className="text-xs mb-1 text-gray-500 font-bold">Title</p>
            <h2 className="mb-3">This is video title</h2>
            <p className="text-xs mb-1 text-gray-500 font-bold">Catagory</p>
            <p className="mb-4">People & Blogs</p>
          </div>
          <div className="flex items-center gap-8">
            <div>
              <p className="text-xs text-gray-500 font-bold">Concurrent Views</p>
              <span>20</span>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-bold">Likes</p>
              <span>10</span>
            </div>
          </div>
        </div>

        <button type="button" className="border-2 px-5 py-1 text-sm">
          Edit
        </button>
      </header>
    </div>
  );
}
