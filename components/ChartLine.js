import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const ChartLine = ({ data }) => {
  return (
    <>
      <Line data={data} />
    </>
  );
};

export default ChartLine;
