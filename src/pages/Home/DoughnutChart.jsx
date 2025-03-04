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
              data.fiber + data.protein, // Fruits/Vegetables data is not available in API
            ],
            backgroundColor: [
              "rgba(255, 99, 132, 0.5)",
              "rgba(75, 192, 192, 0.5)",
            ],
          },
        ],
      }}
    />
  );
};

export default DoughnutChart;
