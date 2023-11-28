/* eslint-disable react/prop-types */
import React from "react";

export default function Button({ type, title, ...rest }) {
  return (
    <button
      type={type}
      className=" hover:bg-blue-600 py-2 bg-blue-500 text-white rounded-md"
      {...rest}
    >
      {title}
    </button>
  );
}
