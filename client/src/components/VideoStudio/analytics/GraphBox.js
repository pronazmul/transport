/* eslint-disable import/no-unresolved */
import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  aspectRatio: 4 / 1,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        color: "white",
        borderColor: "white",
        drawBorder: true,
      },
    },
    y: {
      grid: {
        drawBorder: true,
      },
    },
  },
  ticks: {
    maxTicksLimit: 8,
    display: false,
    maxRotation: 0,
    minRotation: 0,
  },
};

const labels = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 4, 11, 12, 13, 14, 15, 16, 7, 8, 9, 4, 11, 12, 13, 6, 24, 25, 26, 27, 28, 29, 30,
];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 4, 11, 12, 13, 14, 15, 16, 7, 8, 9, 4, 11, 12, 13, 6, 24, 25, 26, 27, 28, 29, 30,
      ],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export default function GraphBox() {
  return (
    <div className="h-[300px] max-w-[968px] mt-8">
      <Line options={options} data={data} />
    </div>
  );
}
