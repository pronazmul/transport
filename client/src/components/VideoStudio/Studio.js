/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import {
  AiOutlineCloudUpload,
  BsBarChart,
  CgMediaLive,
  CiStreamOn,
  MdContentPaste,
  MdMonitor,
} from "../../constant/icons";
import GoLive from "./GoLive";
import ManagingVideos from "./ManagingVideos";
import Monitization from "./Monitization";
import Stream from "./Stream/Stream";
import UploadVideo from "./UploadVideo";
import Analytics from "./analytics/Analytics";

export default function Studio({ isLoggedIn }) {
  const location = useLocation();
  const studioItems = [
    { path: "go-live", title: "Go Live", icon: <CgMediaLive fontSize={23} /> },
    {
      path: "upload-video",
      title: "Upload Video",
      icon: <AiOutlineCloudUpload fontSize={23} />,
    },
    {
      path: "analytics",
      title: "Analytics",
      icon: <BsBarChart fontSize={23} />,
    },
    {
      path: "monetization",
      title: "Monetized Content",
      icon: <MdMonitor fontSize={23} />,
    },
  ];

  let content;

  switch (location.pathname) {
    case "/studio/content":
      content = <ManagingVideos />;
      break;
    case "/studio/stream-manager":
      content = <Stream />;
      break;
    case "/studio/upload-video":
      content = isLoggedIn ? <UploadVideo /> : <Navigate to="/login" />;
      break;
    case "/studio/go-live":
      content = <GoLive />;
      break;
    case "/studio/analytics":
      content = <Analytics />;
      break;
    case "/studio/monetization":
      content = <Monitization />;
      break;
    default:
      break;
  }

  return (
    <div
      className={`${
        location.pathname === "/studio/stream-manager" &&
        "bg-[#161616] min-h-[calc(100vh_-_76px)]"
      }`}
    >
      <div className="max-w-[1340px] mx-auto flex items-start">
        <div className="py-9 pl-9 basis-[300px]">
          <Link
            to="/studio/content"
            className={`flex items-center gap-3 py-2 px-3 mb-1 rounded-sm cursor-pointer hover:bg-gray-50 ${
              location.pathname === "/studio/content" ? "bg-gray-100" : ""
            } ${
              location.pathname === "/studio/stream-manager"
                ? "text-white hover:bg-g"
                : ""
            }`}
          >
            <div>
              <MdContentPaste fontSize={23} />
            </div>
            Content
          </Link>
          <Link
            to="/studio/stream-manager"
            className={`flex items-center gap-3 py-2 px-3 mb-1 rounded-sm cursor-pointer hover:bg-gray-50 ${
              location.pathname === "/studio/stream-manager"
                ? "bg-[#1f1f1f] hover:bg-g text-white"
                : ""
            }`}
          >
            <div>
              <CiStreamOn fontSize={23} />
            </div>
            Stream Manager
          </Link>
          {studioItems.map((item) => (
            <Link
              to={`/studio/${item.path}`}
              key={item.path}
              className={`flex items-center gap-3 py-2 px-3 mb-1 rounded-sm cursor-pointer hover:bg-gray-50 ${
                location.pathname === `/studio/${item.path}`
                  ? "bg-gray-100"
                  : ""
              } ${
                location.pathname === "/studio/stream-manager"
                  ? "text-white hover:bg-g"
                  : ""
              }`}
            >
              <div>{item.icon}</div>
              {item.title}
            </Link>
          ))}
        </div>
        <div className="flex-1 p-9">{content}</div>
      </div>
    </div>
  );
}
