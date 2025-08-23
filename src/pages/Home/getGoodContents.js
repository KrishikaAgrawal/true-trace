// getGoodContents.js

// Thresholds are based on per 100g values
const thresholds = {
  proteins: 10, // grams
  fiber: 5, // grams
  salt: 0.3, // grams
  fat: 3, // grams
  saturatedFat: 1.5, // grams
  sugars: 5, // grams
  caloriesPer100g: 120, // calories (not kcal), per 100g
  fruitsVegetablesNuts: 40, // percentage
  vitaminC: 15, // mg
  calcium: 100, // mg
  iron: 2, // mg
  novaGroup: 2, // processing level
};

const benefitMap = {
  proteins: "supports muscle growth",
  fiber: "aids digestion and gut health",
  salt: "supports healthy blood pressure",
  fat: "good for heart health",
  saturatedFat: "helps manage cholesterol",
  sugars: "helps prevent diabetes and weight gain",
  caloriesPer100g: "supports weight management",
  fruitsVegetablesNuts: "boosts vitamins and minerals",
  vitaminC: "supports strong immunity",
  calcium: "strengthens bones and teeth",
  iron: "helps prevent anemia",
  novaGroup: "is minimally processed and healthier",
};

const getGoodContents = (nutrients) => {
  const goods = [];

  if (!nutrients) return goods;

  if (nutrients.proteins && nutrients.proteins > thresholds.proteins) {
    goods.push(
      `High Protein (${nutrients.proteins}g) — ${benefitMap.proteins}.`
    );
  }
  if (nutrients.fiber && nutrients.fiber > thresholds.fiber) {
    goods.push(`Good Fiber (${nutrients.fiber}g) — ${benefitMap.fiber}.`);
  }
  if (nutrients.salt && nutrients.salt < thresholds.salt) {
    goods.push(`Low Salt (${nutrients.salt}g) — ${benefitMap.salt}.`);
  }
  if (nutrients.fat && nutrients.fat < thresholds.fat) {
    goods.push(`Low Fat (${nutrients.fat}g) — ${benefitMap.fat}.`);
  }
  if (
    nutrients.saturatedFat &&
    nutrients.saturatedFat < thresholds.saturatedFat
  ) {
    goods.push(
      `Low Saturated Fat (${nutrients.saturatedFat}g) — ${benefitMap.saturatedFat}.`
    );
  }
  if (nutrients.sugars && nutrients.sugars < thresholds.sugars) {
    goods.push(`Low Sugar (${nutrients.sugars}g) — ${benefitMap.sugars}.`);
  }
  if (nutrients.energy && nutrients.energy < thresholds.caloriesPer100g) {
    goods.push(
      `Low Calorie (${nutrients.energy} cal) — ${benefitMap.caloriesPer100g}.`
    );
  }
  if (
    nutrients["fruits-vegetables-nuts-estimate"] &&
    nutrients["fruits-vegetables-nuts-estimate"] >
      thresholds.fruitsVegetablesNuts
  ) {
    goods.push(
      `Rich in Fruits & Veggies (${nutrients["fruits-vegetables-nuts-estimate"]}%) — ${benefitMap.fruitsVegetablesNuts}.`
    );
  }
  if (nutrients["vitamin-c"] && nutrients["vitamin-c"] > thresholds.vitaminC) {
    goods.push(
      `Good Vitamin C (${nutrients["vitamin-c"]}mg) — ${benefitMap.vitaminC}.`
    );
  }
  if (nutrients["calcium"] && nutrients["calcium"] > thresholds.calcium) {
    goods.push(
      `Rich in Calcium (${nutrients["calcium"]}mg) — ${benefitMap.calcium}.`
    );
  }
  if (nutrients["iron"] && nutrients["iron"] > thresholds.iron) {
    goods.push(`Good Iron (${nutrients["iron"]}mg) — ${benefitMap.iron}.`);
  }
  if (
    nutrients["nova-group"] &&
    nutrients["nova-group"] <= thresholds.novaGroup
  ) {
    goods.push(
      `Minimal Processing (NOVA Group ${nutrients["nova-group"]}) — ${benefitMap.novaGroup}.`
    );
  }

  return goods;
};

export default getGoodContents;
