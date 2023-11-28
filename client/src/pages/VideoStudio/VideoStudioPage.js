/* eslint-disable react/prop-types */
import React from "react";
import Studio from "../../components/VideoStudio/Studio";

export default function VideoStudioPage({ isLoggedIn }) {
  return <Studio isLoggedIn={isLoggedIn} />;
}
