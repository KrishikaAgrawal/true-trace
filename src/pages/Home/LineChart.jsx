import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import fetchProductData from "./fetchProductData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ barcode }) => {
  const [novaData, setNovaData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchProductData(barcode, (data) => {
        setNovaData((prev) => [
          ...prev,
          { time: new Date().toLocaleTimeString(), nova: data.novaGroup || 0 },
        ]);
      });
    }, 5000); // Fetch data every 5 seconds

    return () => clearInterval(interval);
  }, [barcode]);

  const chartData = {
    labels: novaData.map((d) => d.time),
    datasets: [
      {
        label: "NOVA Score Over Time",
        data: novaData.map((d) => d.nova),
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "NOVA Score Over Time",
      },
    },
    scales: {
      y: {
        min: 1,
        max: 4,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default LineChart;
