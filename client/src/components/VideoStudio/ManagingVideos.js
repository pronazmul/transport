import React, { useState } from "react";

import "./managingVideos.css";
import TableBodyRow from "./TableBodyRow";

export default function ManagingVideos() {
  const [active, setActive] = useState("Videos");

  return (
    <>
      <div className="flex items-center gap-6 px-[10px] mb-3 border-bottom font-bold">
        <div
          className={`cursor-pointer border-b-4 py-2 ${active === "Videos" ? "border-black" : "border-[#ffffff00]"}`}
          onClick={() => setActive("Videos")}
        >
          Videos
        </div>
        <div
          className={`border-b-4 cursor-pointer py-2 ${active === "Playlists" ? "border-black" : "border-[#ffffff00]"}`}
          onClick={() => setActive("Playlists")}
        >
          Playlists
        </div>
      </div>
      {active === "Videos" && (
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th>Video</th>
              <th>Visibility</th>
              <th>Upload Date</th>
              <th>Views</th>
              <th>Comments</th>
              <th>Likes</th>
              <th>DisLikes</th>
            </tr>
          </thead>
          <tbody>
            <TableBodyRow />
            <TableBodyRow />
            <TableBodyRow />
            <TableBodyRow />
          </tbody>
        </table>
      )}
      {active === "Playlists" && (
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th>Playlist</th>
              <th>Visibility</th>
              <th>Last Updated</th>
              <th>Video count</th>
            </tr>
          </thead>
          <tbody>
            <TableBodyRow playlists />
            <TableBodyRow playlists />
            <TableBodyRow playlists />
            <TableBodyRow playlists />
          </tbody>
        </table>
      )}
    </>
  );
}
