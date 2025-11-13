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
      setNutriScore(scoreMap[data.nutriScore?.toLowerCase()] || 0);
    });
  }, [barcode]);

  if (nutriScore === null) return <p>Loading...</p>;

  const gaugeData = {
    labels: ["A", "B", "C", "D", "E"],
    datasets: [
      {
        data: [1, 1, 1, 1, 1], // equal segments
        backgroundColor: [
          "#00E676", // green
          "#CDDC39", // lime
          "#FFB300", // amber
          "#FF7043", // orange-red
          "#D32F2F", // red
        ],
        borderWidth: 0, // no border
        cutout: "80%",
      },
    ],
  };

  const gaugeOptions = {
    circumference: 180, // half circle
    rotation: 270, // start from bottom
    plugins: {
      legend: { display: false },
      datalabels: { display: false }, // explicitly disable datalabels
    },
  };

  const rotationMap = {
    a: -90,
    b: -45,
    c: 0,
    d: 45,
    e: 90,
  };

  const needleRotation =
    rotationMap[String.fromCharCode(96 + nutriScore)] || 0;

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

      {/* Needle */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) rotate(${needleRotation}deg)`,
          transformOrigin: "bottom center",
          width: "3px",
          height: "55px",
          backgroundColor: "black",
          borderRadius: "2px",
        }}
      ></div>

      {/* Label */}
      <p style={{ fontSize: "20px", fontWeight: "bold", marginTop: "10px" }}>
        Nutri-Score:{" "}
        {nutriScore ? String.fromCharCode(64 + nutriScore) : "Unknown"}
      </p>
    </div>
  );
};

export default GaugeChart;
