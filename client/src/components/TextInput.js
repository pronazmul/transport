import React from "react";

export default function TextInput({ title, ...rest }) {
  return (
    <>
      <span className="text-sm mb-1 font-semibold">{title}</span>
      <input className="bg-gray-100 rounded-md outline-none px-3 py-2" {...rest} />
    </>
  );
}
