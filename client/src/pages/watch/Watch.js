import React from "react";
import Cards from "../../components/Watch/Cards";
import Slider from "../../components/Watch/Slider";

export default function Watch() {
  return (
    <div>
      <Slider />
      <div className="max-w-[1380px] mx-auto mt-8">
        <Cards />
      </div>
    </div>
  );
}
