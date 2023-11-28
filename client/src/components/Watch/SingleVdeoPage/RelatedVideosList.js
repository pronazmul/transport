import React from "react";
import RelatedVideo from "./RelatedVideo";

export default function RelatedVideosList() {
  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      <RelatedVideo />
      <RelatedVideo />
      <RelatedVideo />
      <RelatedVideo />
    </div>
  );
}
