import React from "react";
import SingleNotification from "../components/notifications/SingleNotification";
import { BsCheckAll } from "../constant/icons";

export default function Notifications() {
  return (
    <div className="max-w-[600px] mx-auto">
      <div className="flex items-center justify-between px-6 py-3 border-b">
        <p className="font-medium text-xl">All notifications</p>
        <button type="button" className="flex items-center gap-2 text-blue-600">
          <BsCheckAll /> Mark as read
        </button>
      </div>
      <div>
        <SingleNotification />
      </div>
    </div>
  );
}
