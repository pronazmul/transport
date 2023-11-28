import React, { useState } from "react";
import { Link } from "react-router-dom";
import DotsOptions from "./DotsOptions";

export default function SingleNotification() {
  const [showMore, setShowMore] = useState(false);

  const handleMore = () => {
    setShowMore(() => !showMore);
  };
  return (
    <>
      {/* notification */}
      <div className="rounded-sm hover:bg-gray-50 pb-2 group pt-4 px-2 border-b">
        <div className="text-black text-lg flex items-center gap-2">
          <div className="flex items-start gap-2">
            <Link to className="min-w-[50px]">
              <img className="w-11 h-11 rounded-full" src="https://source.unsplash.com/84E44EdD18o" alt="user" />
            </Link>
            <div>
              <h2 className="text-[17px] leading-[20px]">
                <Link to className="font-medium hover:underline">
                  Jahid hasan
                </Link>{" "}
                commented on your post{" "}
                <Link to className="font-medium hover:underline">
                  Beautify world
                </Link>
              </h2>
              <p className="text-[13px] text-g text-opacity-70 font-medium">138 reactions · 20 comments</p>
              <p className="text-[12.5px] text-g text-opacity-70 font-medium -mt-[8px]">20m ago</p>
            </div>
          </div>
          <DotsOptions showMore={showMore} handleMore={handleMore} />
        </div>
      </div>
      {/* notification */}
      <div className="rounded-sm hover:bg-gray-50 pb-2 pt-4 px-2 border-b group">
        <div className="text-black text-lg flex items-center gap-2">
          <div className="flex items-start gap-2">
            <div className="min-w-[50px]">
              <img className="w-11 h-11 rounded-full" src="https://source.unsplash.com/84E44EdD18o" alt="user" />
            </div>
            <div className="flex items-center gap-3">
              <div>
                <h2 className="text-[17px] leading-[20px]">
                  <span className="font-medium">Jahid hasan</span> uploaded:{" "}
                  <span className="font-medium">What science tell us about the world creation.</span>
                </h2>
                <p className="text-[13px] text-g text-opacity-70 font-medium">138 reactions · 20 comments</p>
                <p className="text-[13px] text-g text-opacity-70 font-medium -mt-[8px]">20m ago</p>
              </div>
              <div className="min-w-[110px] max-w-[110px] h-full">
                <img src="/assets/3.jpg" alt="img" width="100%" height="100%" className="object-cover" />
              </div>
              <DotsOptions showMore={showMore} handleMore={handleMore} />
            </div>
          </div>
        </div>
      </div>
      {/* notification */}
      <div className="rounded-sm hover:bg-gray-50 pb-2 group pt-4 px-2 border-b">
        <div className="text-black text-lg flex items-center gap-2">
          <div className="flex items-start gap-2">
            <div className="min-w-[50px]">
              <img className="w-11 h-11 rounded-full" src="https://source.unsplash.com/84E44EdD18o" alt="user" />
            </div>
            <div>
              <h2 className="text-[17px] leading-[20px]">
                <span className="font-medium">Jahid hasan</span> commented on your post{" "}
                <span className="font-medium">Beautify world</span>
              </h2>
              <p className="text-[13px] text-g text-opacity-70 font-medium">138 reactions · 20 comments</p>
              <p className="text-[13px] text-g text-opacity-70 font-medium -mt-[8px]">20m ago</p>
            </div>
          </div>
          <DotsOptions showMore={showMore} handleMore={handleMore} />
        </div>
      </div>
      {/* notification */}
      <div className="rounded-sm hover:bg-gray-50 pb-2 pt-4 px-2 border-b group">
        <div className="text-black text-lg flex items-center gap-2">
          <div className="flex items-start gap-2">
            <div className="min-w-[50px]">
              <img className="w-11 h-11 rounded-full" src="https://source.unsplash.com/84E44EdD18o" alt="user" />
            </div>
            <div className="flex items-center gap-3">
              <div>
                <h2 className="text-[17px] leading-[20px]">
                  <span className="font-medium">Jahid hasan</span> uploaded:{" "}
                  <span className="font-medium">What science tell us about the world creation.</span>
                </h2>
                <p className="text-[13px] text-g text-opacity-70 font-medium">138 reactions · 20 comments</p>
                <p className="text-[13px] text-g text-opacity-70 font-medium -mt-[8px]">20m ago</p>
              </div>
              <div className="min-w-[110px] max-w-[110px] h-full">
                <img src="/assets/3.jpg" alt="img" width="100%" height="100%" className="object-cover" />
              </div>
              <DotsOptions showMore={showMore} handleMore={handleMore} />
            </div>
          </div>
        </div>
      </div>
      {/* notification */}
      <div className="rounded-sm hover:bg-gray-50 pb-2 group pt-4 px-2 border-b">
        <div className="text-black text-lg flex items-center gap-2">
          <div className="flex items-start gap-2">
            <div className="min-w-[50px]">
              <img className="w-11 h-11 rounded-full" src="https://source.unsplash.com/84E44EdD18o" alt="user" />
            </div>
            <div>
              <h2 className="text-[17px] leading-[20px]">
                <span className="font-medium">Jahid hasan</span> commented on your post{" "}
                <span className="font-medium">Beautify world</span>
              </h2>
              <p className="text-[13px] text-g text-opacity-70 font-medium">138 reactions · 20 comments</p>
              <p className="text-[13px] text-g text-opacity-70 font-medium -mt-[8px]">20m ago</p>
            </div>
          </div>
          <DotsOptions showMore={showMore} handleMore={handleMore} />
        </div>
      </div>
    </>
  );
}
