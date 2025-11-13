import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const BarChart = ({ barcode }) => {
  const [nutrients, setNutrients] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNutrientData = async () => {
      try {
        const response = await fetch(
          `https://world.openfoodfacts.org/api/v2/product/${barcode}.json`
        );
        const data = await response.json();

        if (data.status === 1) {
          const product = data.product.nutriments;

          setNutrients({
            energy: product["energy-kcal_100g"] || 0,
            fat: product["fat_100g"] || 0,
            saturatedFat: product["saturated-fat_100g"] || 0,
            carbohydrates: product["carbohydrates_100g"] || 0,
            protein: product["proteins_100g"] || 0,
            sodium: product["sodium_100g"] ? product["sodium_100g"] * 1000 : 0,
          });
        } else {
          console.error("Product not found");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
      setLoading(false);
    };

    fetchNutrientData();
  }, [barcode]);

  if (loading) return <p>Loading chart...</p>;

  const data = {
    labels: [
      "Energy (Cal)",
      "Total Fat (g)",
      "Saturated Fat (g)",
      "Carbohydrates (g)",
      "Protein (g)",
      "Sodium (mg)",
    ],
    datasets: [
      {
        label: "Per 100g",
        data: [
          nutrients.energy,
          nutrients.fat,
          nutrients.saturatedFat,
          nutrients.carbohydrates,
          nutrients.protein,
          nutrients.sodium,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "#2d3748", // darker gray for legend text
          font: { size: 13 },
          generateLabels: () => [
            {
              text: "Per 100g",
              fillStyle: "rgba(211, 211, 211, 0.9)",
            },
          ],
        },
      },
      title: {
        display: true,
        text: "Nutrient Composition per 100g",
        color: "#1a202c", // darker title color
        font: {
          size: 20, // increased title size
          weight: "bold",
        },
      },
      datalabels: {
        anchor: "end",
        align: "top",
        offset: -4,
        color: "#4a5568",
        font: {
          weight: "bold",
          size: 12,
        },
        formatter: (value) => value.toFixed(1),
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#2d3748", // darker color for x-axis labels
          font: { size: 13 },
        },
        grid: {
          color: "rgba(200, 200, 200, 0.2)",
        },
      },
      y: {
        ticks: {
          color: "#2d3748", // darker color for y-axis labels
          font: { size: 13 },
        },
        grid: {
          color: "rgba(200, 200, 200, 0.2)",
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
