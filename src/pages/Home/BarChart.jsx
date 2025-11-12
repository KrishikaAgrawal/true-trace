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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
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
            energy: product["energy-kcal_100g"] || 0, // Use kcal and interpret as Cal
            fat: product["fat_100g"] || 0,
            saturatedFat: product["saturated-fat_100g"] || 0,
            carbohydrates: product["carbohydrates_100g"] || 0,
            protein: product["proteins_100g"] || 0,
            sodium: product["sodium_100g"] ? product["sodium_100g"] * 1000 : 0, // Convert g to mg
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
      "Energy (Cal)", // kcal shown as Cal (food calorie)
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
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
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
        generateLabels: () => [
          {
            text: "Per 100g",
            fillStyle: "rgba(211, 211, 211, 0.9)",
            strokeStyle: "rgba(169, 169, 169, 1)",
            lineWidth: 1,
          },
        ],
      },
    },
    title: {
      display: true,
      text: "Nutrient Composition per 100g",
    },
  },
};


  return <Bar data={data} options={options} />;
};

export default BarChart;
