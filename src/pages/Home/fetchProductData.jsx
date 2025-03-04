// import  { useEffect, useState } from "react";
// import { Bar } from "react-chartjs-2";
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

const fetchProductData = async (barcode, setData) => {
  try {
    const response = await fetch(
      `https://world.openfoodfacts.org/api/v2/product/${barcode}.json`
    );
    const data = await response.json();

    if (data.status === 1) {
      const product = data.product.nutriments;
      setData({
        energy: product["energy-kcal_100g"] || 0,
        fat: product["fat_100g"] || 0,
        saturatedFat: product["saturated-fat_100g"] || 0,
        carbohydrates: product["carbohydrates_100g"] || 0,
        sugars: product["sugars_100g"] || 0,
        protein: product["proteins_100g"] || 0,
        fiber: product["fiber_100g"] || 0,
        sodium: product["sodium_100g"] ? product["sodium_100g"] * 1000 : 0,
        nutriScore: data.product.nutriscore_grade || "unknown",
        novaGroup: data.product.nova_groups || "unknown",
      });
    } else {
      console.error("Product not found");
    }
  } catch (error) {
    console.error("Error fetching product:", error);
  }
};

export default fetchProductData;
