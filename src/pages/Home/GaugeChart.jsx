import { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import fetchProductData from "./fetchProductData";

ChartJS.register(ArcElement, Tooltip, Legend);

const GaugeChart = ({ barcode }) => {
  const [nutriScore, setNutriScore] = useState(null);

  useEffect(() => {
    fetchProductData(barcode, (data) => {
      const scoreMap = { a: 1, b: 2, c: 3, d: 4, e: 5 };
      setNutriScore(scoreMap[data.nutriScore] || 0);
    });
  }, [barcode]);

  if (nutriScore === null) return <p>Loading...</p>;

  const gaugeData = {
    labels: ["A", "B", "C", "D", "E"],
    datasets: [
      {
        data: [1, 1, 1, 1, 1], // Equal segments
        backgroundColor: [
          "#00E676",
          "#FFEB3B",
          "#FF9800",
          "#F44336",
          "#D32F2F",
        ],
        borderWidth: 1,
        cutout: "80%", // Makes it look like a gauge
      },
    ],
  };

  const gaugeOptions = {
    circumference: 180, // Only show half of the doughnut (like a gauge)
    rotation: 270, // Rotate to start at the bottom
    plugins: {
      legend: { display: false },
    },
  };

  const needleRotation =
    {
      a: -90,
      b: -45,
      c: 0,
      d: 45,
      e: 90,
    }[String.fromCharCode(96 + nutriScore)] || 0;

  return (
    <div
      style={{
        width: "300px",
        margin: "auto",
        textAlign: "center",
        position: "relative",
      }}
    >
      <Doughnut data={gaugeData} options={gaugeOptions} />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) rotate(${needleRotation}deg)`,
          transformOrigin: "bottom center",
          width: "2px",
          height: "50px",
          backgroundColor: "black",
        }}
      ></div>
      <p style={{ fontSize: "20px", fontWeight: "bold", marginTop: "10px" }}>
        Nutri-Score:{" "}
        {nutriScore ? String.fromCharCode(64 + nutriScore) : "Unknown"}
      </p>
    </div>
  );
};

export default GaugeChart;
