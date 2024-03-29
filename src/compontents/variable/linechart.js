import React from "react";
import { Line } from "react-chartjs-2";

export default function LineChart({ chartData }) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Line Chart</h2>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2024",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
}
