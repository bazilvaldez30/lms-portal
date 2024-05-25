"use client";

import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register the necessary chart components
ChartJS.register(ArcElement, Tooltip, Legend);

// Define the data object with appropriate TypeScript types
export const data = {
  labels: ["Boy", "Girls"],
  datasets: [
    {
      label: "Number of students",
      data: [115, 115],
      backgroundColor: ["#133782", "#BC434F"],
      borderColor: ["#133782", "#BC434F"],
    },
  ],
};

// Define the options object with appropriate TypeScript types
const options: ChartOptions<"doughnut"> = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: "top",
    },
  },
  maintainAspectRatio: false,
  cutout: "80%",
};

// Define the component with appropriate TypeScript types
export function StudentDonutGraph(): JSX.Element {
  return <Doughnut data={data} options={options} />;
}
