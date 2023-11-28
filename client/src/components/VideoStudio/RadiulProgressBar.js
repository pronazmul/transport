import React from "react";
import "./radialprogress.css";

export default function RadiulProgressBar() {
  return (
    <div className="pie-wrapper progress-45 style-2">
      <span className="label">
        45<span className="smaller">%</span>
      </span>
      <div className="pie">
        <div className="left-side half-circle" />
        <div className="right-side half-circle" />
      </div>
      <div className="shadow" />
    </div>
  );
}
