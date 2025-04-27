// getAlarmingContents.js

const thresholds = {
  sugar: 25, // grams
  saturatedFat: 20, // grams
  cholesterol: 300, // mg
  sodium: 2300, // mg
  calories: 400, // kcal
  fiber: 3, // grams
  transFat: 2, // grams
  additives: 5, // number of additives
};

const diseaseMap = {
  sugar: "Diabetes",
  saturatedFat: "Heart Disease",
  cholesterol: "Heart Disease",
  sodium: "Heart Disease",
  calories: "Obesity",
  fiber: "Obesity",
  transFat: "Heart Disease",
  additives: "Health complications",
};

const getAlarmingContents = (nutrients) => {
  const alerts = [];

  if (!nutrients) return alerts;

  if (nutrients.sugars > thresholds.sugar) {
    alerts.push(
      `🍬 High Sugar: ${nutrients.sugars}g (limit ${thresholds.sugar}g). Risk of ${diseaseMap.sugar}.`
    );
  }
  if (nutrients.saturatedFat > thresholds.saturatedFat) {
    alerts.push(
      `🥓 High Saturated Fat: ${nutrients.saturatedFat}g (limit ${thresholds.saturatedFat}g). Risk of ${diseaseMap.saturatedFat}.`
    );
  }
  if (nutrients.cholesterol && nutrients.cholesterol > thresholds.cholesterol) {
    alerts.push(
      `🩺 High Cholesterol: ${nutrients.cholesterol}mg (limit ${thresholds.cholesterol}mg). Risk of ${diseaseMap.cholesterol}.`
    );
  }
  if (nutrients.sodium > thresholds.sodium) {
    alerts.push(
      `🧂 High Sodium: ${nutrients.sodium}mg (limit ${thresholds.sodium}mg). Risk of ${diseaseMap.sodium}.`
    );
  }
  if (nutrients.energy > thresholds.calories) {
    alerts.push(
      `🔥 High Calories: ${nutrients.energy}kcal (limit ${thresholds.calories}kcal). Can cause ${diseaseMap.calories}.`
    );
  }
  if (nutrients.fiber < thresholds.fiber) {
    alerts.push(
      `🌾 Low Fiber: ${nutrients.fiber}g (minimum ${thresholds.fiber}g). Risk of ${diseaseMap.fiber}.`
    );
  }
  if (nutrients["trans-fat"] && nutrients["trans-fat"] > thresholds.transFat) {
    alerts.push(
      `🚫 High Trans Fat: ${nutrients["trans-fat"]}g (limit ${thresholds.transFat}g). Major risk for ${diseaseMap.transFat}.`
    );
  }
  if (nutrients.additives_n > thresholds.additives) {
    alerts.push(
      `⚠️ Too Many Additives: ${nutrients.additives_n} additives (recommended < ${thresholds.additives}). Can lead to ${diseaseMap.additives}.`
    );
  }

  return alerts;
};

export default getAlarmingContents;
