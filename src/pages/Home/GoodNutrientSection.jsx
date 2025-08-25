import { useEffect, useState } from "react";
import fetchProductData from "./fetchProductData";
import getGoodContents from "./getGoodContents"; // <-- you will need this function like getAlarmingContents

const GoodNutrientSection = ({ barcode }) => {
  const [goods, setGoods] = useState([]);

  useEffect(() => {
    const fetchDataAndGenerateGoods = async () => {
      if (barcode) {
        const setData = (data) => {
          const generatedGoods = getGoodContents(data);
          setGoods(generatedGoods);
        };
        await fetchProductData(barcode.split(" ")[0], setData);
      }
    };

    fetchDataAndGenerateGoods();
  }, [barcode]);

  if (!goods || goods.length === 0) return null;

  return (
    <div className="w-full font-poppins bg-green-50 border border-green-300 p-6 rounded-2xl shadow-md">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-green-700 font-libre">
        ✅ Good Nutrient Levels
      </h2>
      <ul className="list-disc pl-5 space-y-3 text-gray-800 text-sm md:text-base">
        {goods.map((good, index) => (
          <li key={index} className="flex items-start gap-2">
            <span>🟢</span>
            <span>{good}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoodNutrientSection;
