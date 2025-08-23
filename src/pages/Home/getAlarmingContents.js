// getAlarmingContents.js

// Thresholds are based on per 100g or per day, as specified
const thresholds = {
  sugarPer100g: 22.5, // grams (NHS high sugar threshold)
  saturatedFatPer100g: 5, // grams
  cholesterol: 300, // mg (daily limit)
  sodium: 2300, // mg (daily limit)
  caloriesPer100g: 250, // calories per 100g
  fiberPer100g: 3, // grams (less than this is low fiber)
  transFatPer100g: 1, // grams (very low limit)
  additives: 5, // number of additives
};

const diseaseMap = {
  sugarPer100g: "Diabetes",
  saturatedFatPer100g: "Heart Disease",
  cholesterol: "Heart Disease",
  sodium: "Heart Disease",
  caloriesPer100g: "Obesity",
  fiberPer100g: "Obesity",
  transFatPer100g: "Heart Disease",
  additives: "Health complications",
};

const getAlarmingContents = (nutrients) => {
  const alerts = [];

  if (!nutrients) return alerts;

  if (nutrients.sugars && nutrients.sugars > thresholds.sugarPer100g) {
    alerts.push(
      `High Sugar: ${nutrients.sugars}g/100g (limit ${thresholds.sugarPer100g}g). Risk of ${diseaseMap.sugarPer100g}.`
    );
  }

  if (
    nutrients.saturatedFat &&
    nutrients.saturatedFat > thresholds.saturatedFatPer100g
  ) {
    alerts.push(
      `High Saturated Fat: ${nutrients.saturatedFat}g/100g (limit ${thresholds.saturatedFatPer100g}g). Risk of ${diseaseMap.saturatedFatPer100g}.`
    );
  }

  if (nutrients.cholesterol && nutrients.cholesterol > thresholds.cholesterol) {
    alerts.push(
      `High Cholesterol: ${nutrients.cholesterol}mg (limit ${thresholds.cholesterol}mg). Risk of ${diseaseMap.cholesterol}.`
    );
  }

  if (nutrients.sodium && nutrients.sodium > thresholds.sodium) {
    alerts.push(
      `High Sodium: ${nutrients.sodium}mg (limit ${thresholds.sodium}mg). Risk of ${diseaseMap.sodium}.`
    );
  }

  if (nutrients.energy && nutrients.serving_size) {
    const weight = parseFloat(nutrients.serving_size); // assuming "78g"
    const energyPer100g = (nutrients.energy / weight) * 100;

    if (energyPer100g > thresholds.caloriesPer100g) {
      alerts.push(
        `High Calories: ${energyPer100g.toFixed(1)} cal/100g (limit ${thresholds.caloriesPer100g} cal). Can cause ${diseaseMap.caloriesPer100g}.`
      );
    }
  }

  if (
    nutrients.fiber !== undefined &&
    nutrients.fiber < thresholds.fiberPer100g
  ) {
    alerts.push(
      `Low Fiber: ${nutrients.fiber}g/100g (minimum ${thresholds.fiberPer100g}g). Risk of ${diseaseMap.fiberPer100g}.`
    );
  }

  if (
    nutrients["trans-fat"] &&
    nutrients["trans-fat"] > thresholds.transFatPer100g
  ) {
    alerts.push(
      `High Trans Fat: ${nutrients["trans-fat"]}g/100g (limit ${thresholds.transFatPer100g}g). Major risk for ${diseaseMap.transFatPer100g}.`
    );
  }

  if (nutrients.additives_n && nutrients.additives_n > thresholds.additives) {
    alerts.push(
      `Too Many Additives: ${nutrients.additives_n} (recommended < ${thresholds.additives}). Can lead to ${diseaseMap.additives}.`
    );
  }

  return alerts;
};

export default getAlarmingContents;
