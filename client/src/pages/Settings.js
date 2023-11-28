import React, { useState } from "react";

export default function Settings() {
  const [active, setActive] = useState("Account");

  return (
    <div className="max-w-6xl mx-auto flex items-start justify-center">
      <div className="py-9">
        {[
          "Account",
          "Notifications",
          "Privacy and safety",
          "Billing & Payments Method",
          "Monetization",
          "Additional resources",
        ].map((item) => (
          <div
            key={item}
            onClick={() => setActive(item)}
            className={`text-lg py-2 px-3 mb-1 rounded-md cursor-pointer hover:bg-gray-50 ${
              active === item ? "bg-gray-100" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="basis-[65%] p-9">
        {active === "Account" && (
          <>
            <div>
              <h2 className="text-3xl font-medium mb-2">Account</h2>
              <div className="grid grid-cols-2 gap-y-5 gap-3 border-b-[.5px] pb-4 my-5">
                <label htmlFor="name" className="flex flex-col">
                  <span className="mb-2 text-sm font-semibold">Full name</span>
                  <input className="bg-gray-100 rounded-md px-3 py-2" placeholder="Doe Jhon" type="text" id="name" />
                </label>
                <label htmlFor="id" className="flex flex-col">
                  <span className="mb-2 text-sm font-semibold">User Id</span>
                  <input className="bg-gray-100 rounded-md px-3 py-2" placeholder="@doejhon" type="text" id="id" />
                </label>
                <label htmlFor="email" className="flex flex-col">
                  <span className="mb-2 text-sm font-semibold">Email address</span>
                  <input
                    className="bg-gray-100 rounded-md px-3 py-2"
                    placeholder="doejhon@gmail.com"
                    type="email"
                    id="email"
                  />
                </label>
                <label htmlFor="num" className="flex flex-col">
                  <span className="mb-2 text-sm font-semibold">Phone number</span>
                  <input
                    className="bg-gray-100 rounded-md px-3 py-2"
                    placeholder="91 4433 5555"
                    type="number"
                    id="number"
                  />
                </label>
                <label htmlFor="gender" className="flex items-center gap-2">
                  <span className="text-sm font-semibold">Gender :</span>
                  <input type="radio" name="gender" value="male" />
                  <span>Male</span>
                  <input type="radio" name="gender" value="female" />
                  <span>Female</span>
                </label>
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between border-b-[.5px] pb-4 mb-2">
              <header>
                <h3 className="font-medium text-lg">Delete Accout</h3>
                <p className="text-xs">By deleting your account you will lose your all data</p>
              </header>
              <button type="button" className="p-2 rounded-md text-red-500 bg-red-100 hover:bg-red-200">
                Delete Account...
              </button>
            </div>
          </>
        )}
        <div className="flex justify-end my-7">
          <button type="button" className="py-2 px-3 rounded-md bg-blue-500 text-white">
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
}
