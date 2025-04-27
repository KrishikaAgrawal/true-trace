import { useEffect, useState } from "react";
import fetchProductData from "./fetchProductData";
import getAlarmingContents from "./getAlarmingContents";

const AlertSection = ({ barcode }) => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const fetchDataAndGenerateAlerts = async () => {
      if (barcode) {
        const setData = (data) => {
          const generatedAlerts = getAlarmingContents(data);
          setAlerts(generatedAlerts);
        };
        await fetchProductData(barcode.split(" ")[0], setData);
      }
    };

    fetchDataAndGenerateAlerts();
  }, [barcode]);

  if (!alerts || alerts.length === 0) return null;

  return (
    <div className="w-full bg-red-50 border border-red-300 p-6  rounded-2xl shadow-md">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-red-700 font-libre">
        🚨 Alarming Nutrient Levels
      </h2>
      <ul className="list-disc pl-5 space-y-3 text-gray-800 text-sm md:text-base">
        {alerts.map((alert, index) => (
          <li key={index} className="flex items-start gap-2">
            <span>🔴</span>
            <span>{alert}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlertSection;
