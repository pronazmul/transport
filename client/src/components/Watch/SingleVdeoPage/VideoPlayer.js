import React, { useRef, useState } from "react";
import videoFile from "../../../assets/video.mp4";
import { FaPlay } from "../../../constant/icons";

export default function VideoPlayer() {
  const videoRef = useRef(null);
  const [hideThumbnail, setHideThumbnail] = useState(false);
  const handleClick = () => {
    videoRef.current.play();
    setHideThumbnail(true);
  };
  return (
    <div className="relative overflow-hidden">
      <video ref={videoRef} width="100%" controls>
        <track kind="captions" />
        <source src={videoFile} type="video/mp4" />
      </video>
      {!hideThumbnail && (
        <>
          <div className="absolute inset-0">
            <img src="/assets/1.jpg" alt="thumnail" />
          </div>
          <div
            className="absolute flex items-center cursor-pointer justify-center bg-opacity-20 bg-black inset-0 z-[4]"
            onClick={handleClick}
          >
            <div className="bg-black grid place-content-center bg-opacity-30 rounded-full h-20 w-20">
              <FaPlay fontSize={30} color="white" className="mr-[-5px]" />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
