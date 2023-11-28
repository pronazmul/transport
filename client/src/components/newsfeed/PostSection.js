/* eslint-disable react/prop-types */
import React from "react";

import TabbedComponent from "./TabbedComponent";

export default function PostSection({ posts, videos }) {
  return (
    <div>
      <TabbedComponent posts={posts} videos={videos} />
    </div>
  );
}
