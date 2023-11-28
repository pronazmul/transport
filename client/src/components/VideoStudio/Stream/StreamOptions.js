import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "../../../constant/icons";
import CustomCheckbox from "./CustomCheckbox";

export default function StreamOptions() {
  // const navigate = useNavigate();
  const [active, setActive] = useState("settings");
  const [showKey, setShowKey] = useState(false);

  const handleChange = () => {};

  return (
    <div className="bg-g px-4 pt-3 pb-6">
      <div className="flex items-center gap-6 mb-4 font-bold">
        <button
          type="button"
          className={`uppercase font-medium text-sm tracking-wider border-b-2 py-1 ${
            active === "settings" ? "border-white" : "border-[#ffffff00]"
          }`}
          onClick={() => setActive("settings")}
        >
          Stream settings
        </button>
        <button
          type="button"
          className={`border-b-2 uppercase font-medium text-sm tracking-wider py-1 ${
            active === "health" ? "border-white" : "border-[#ffffff00]"
          }`}
          onClick={() => setActive("health")}
        >
          Stream health
        </button>
      </div>
      <div className="flex gap-10">
        <div className="basis-[40%]">
          <h2 className="mb-2 text-gray-400 font-bold">Stream key</h2>
          <label htmlFor="streamKey" className="text-sm font-semibold text-gray-500">
            Select stream key
            <select
              onChange={handleChange}
              id="streamKey"
              className="bg-g border w-[50%] mt-1 text-white outline-none block px-2 py-1 font-medium"
            >
              <option className="h-[20px]" defaultValue="Auto-generated key">
                Auto-generated key
              </option>
              <option className="h-[20px]" value="Manual">
                Manual
              </option>
            </select>
          </label>
          <label className="flex flex-col mt-3" htmlFor="key">
            <span className="text-xs font-semibold text-gray-500">Stream key</span>
            <div className="flex items-center gap-4 relative">
              <input
                onChange={handleChange}
                className="bg-g w-full border-b outline-none pl-[2px] pt-1 pb-[3px]"
                type={showKey ? "text" : "password"}
                id="key"
                value="this is secret key"
              />
              <button
                type="button"
                onClick={() => setShowKey(!showKey)}
                className="absolute top-1/2 -translate-y-1/2 right-24
                            "
              >
                {showKey ? (
                  <div className="cursor-pointer">
                    <AiOutlineEye fontSize={20} />
                  </div>
                ) : (
                  <div className="cursor-pointer">
                    <AiOutlineEyeInvisible fontSize={20} />
                  </div>
                )}
              </button>
              <button type="button" className="border-2 text-sm px-5 py-1 ">
                Copy
              </button>
            </div>
          </label>
          <label className="flex flex-col mt-3" htmlFor="key">
            <span className="text-xs font-semibold text-gray-500">Stream url</span>
            <div className="flex items-center gap-4">
              <input
                onChange={handleChange}
                className="bg-g w-full border-b outline-none pl-[2px] pt-1 pb-[3px]"
                type="text"
                id="key"
                value="https://yourdomain.com/url"
              />
              <button type="button" className="border-2 text-sm px-5 py-1 ">
                Copy
              </button>
            </div>
          </label>
          <label className="flex flex-col mt-3" htmlFor="key">
            <span className="text-xs font-semibold text-gray-500">Backup server url</span>
            <div className="flex items-center gap-4">
              <input
                onChange={handleChange}
                className="bg-g w-full border-b outline-none pl-[2px] pt-1 pb-[3px]"
                type="text"
                id="key"
                value="https://yourdomain.com/url"
              />
              <button type="button" className="border-2 text-sm px-5 py-1 ">
                Copy
              </button>
            </div>
          </label>
        </div>
        <div className="basis-[45%]">
          <h2 className="mb-2 text-gray-400 font-bold">Additional Settings</h2>
          <CustomCheckbox />
          <CustomCheckbox />
          <CustomCheckbox />
          <CustomCheckbox />
          {/* <div className="mt-11 flex justify-end">
                        <button
                            type="button"
                            onClick={() => navigate(-1)}
                            className="border-2 text-sm px-5 py-1 "
                        >
                            Back to the Studio
                        </button>
                    </div> */}
        </div>
      </div>
    </div>
  );
}
