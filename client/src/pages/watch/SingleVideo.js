import React from "react";
import RelatedVideosList from "../../components/Watch/SingleVdeoPage/RelatedVideosList";
import VideoDes from "../../components/Watch/SingleVdeoPage/VideoDes";
import VideoPlayer from "../../components/Watch/SingleVdeoPage/VideoPlayer";

export default function SingleVideo() {
  return (
    <section className="pt-6 pb-20">
      <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        <div className="grid grid-cols-3 gap-2 lg:gap-8">
          <div className="col-span-full w-full space-y-4 lg:col-span-2">
            <VideoPlayer />
            <VideoDes />
          </div>

          <RelatedVideosList />
        </div>
      </div>
    </section>
  );
}
