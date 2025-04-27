// getAlarmingContents.js

const thresholds = {
  sugar: 25, // grams
  saturatedFat: 20, // grams
  cholesterol: 300, // mg
  sodium: 2300, // mg
  calories: 400, // kcal
  fiber: 3, // grams (low fiber is risky)
};

const diseaseMap = {
  sugar: "Diabetes",
  saturatedFat: "Heart Disease",
  cholesterol: "Heart Disease",
  sodium: "Heart Disease",
  calories: "Obesity",
  fiber: "Obesity",
};

const getAlarmingContents = (nutrients) => {
  const alerts = [];

  if (!nutrients) return alerts;

  if (nutrients.sugars > thresholds.sugar) {
    alerts.push(
      `⚠️ Sugar content is ${nutrients.sugars}g, exceeding safe limit (${thresholds.sugar}g). High sugar can cause ${diseaseMap.sugar}.`
    );
  }
  if (nutrients.saturatedFat > thresholds.saturatedFat) {
    alerts.push(
      `⚠️ Saturated fat is ${nutrients.saturatedFat}g, above safe limit (${thresholds.saturatedFat}g). Risk of ${diseaseMap.saturatedFat}.`
    );
  }
  if (nutrients.cholesterol && nutrients.cholesterol > thresholds.cholesterol) {
    alerts.push(
      `⚠️ Cholesterol is ${nutrients.cholesterol}mg, above safe limit (${thresholds.cholesterol}mg). Risk of ${diseaseMap.cholesterol}.`
    );
  }
  if (nutrients.sodium > thresholds.sodium) {
    alerts.push(
      `⚠️ Sodium is ${nutrients.sodium}mg, above safe limit (${thresholds.sodium}mg). Risk of ${diseaseMap.sodium}.`
    );
  }
  if (nutrients.energy > thresholds.calories) {
    alerts.push(
      `⚠️ Calories are ${nutrients.energy}kcal, which is high. Can lead to ${diseaseMap.calories}.`
    );
  }
  if (nutrients.fiber < thresholds.fiber) {
    alerts.push(
      `⚠️ Fiber content is low (${nutrients.fiber}g). Low fiber intake is a risk for ${diseaseMap.fiber}.`
    );
  }

  return alerts;
};

export default getAlarmingContents;
