import React from "react";
import { Link } from "react-router-dom";

export default function PostAnalytic() {
  const analyticsDetails = [
    {
      id: 1,
      title: "Impression",
      count: "4,567",
      className: "col-span-2",
    },
    {
      id: 2,
      title: "Engagements",
      count: "454",
    },
    {
      id: 3,
      title: "Detail expands",
      count: "30",
    },
    {
      id: 4,
      title: "New Followers",
      count: "4",
    },
    {
      id: 5,
      title: "Profile visits",
      count: "4,567",
    },
  ];
  return (
    <div className="border mt-10 py-7 px-8">
      <h2 className="text-3xl font-semibold mb-7">Post Analytics</h2>
      <div className="grid grid-cols-2 gap-4 mb-10">
        {analyticsDetails.map(({ className, title, id, count }) => (
          <div key={id} className={`${className}`}>
            <p className="">{title}</p>
            <p className="text-2xl font-bold">{count}</p>
          </div>
        ))}
      </div>
      <Link to="/subscriptions">
        <button type="button" className="py-[6px] px-6 rounded-full bg-blue-600 text-white">
          Switch to professional
        </button>
      </Link>
    </div>
  );
}
