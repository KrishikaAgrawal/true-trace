import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import fetchProductData from "./fetchProductData";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ barcode }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchProductData(barcode, setData);
  }, [barcode]);

  if (!data) return <p>Loading...</p>;

  return (
    <Doughnut
      data={{
        labels: [
          "Negative (Energy, Sugars, Sat. Fat, Sodium)",
          "Positive (Fiber, Protein, Fruits/Vegetables)",
        ],
        datasets: [
          {
            data: [
              data.energy + data.sugars + data.saturatedFat + data.sodium,
              data.fiber + data.protein,
            ],
            backgroundColor: ["#F44336", "#4CAF50"],
            borderWidth: 0, // no borders
          },
        ],
      }}
      options={{
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              color: "#333",
              font: { size: 14 },
            },
          },
          datalabels: {
            display: false, // explicitly disables datalabels if the plugin is globally registered
          },
        },
      }}
    />
  );
};

export default DoughnutChart;
