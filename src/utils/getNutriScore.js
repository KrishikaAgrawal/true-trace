import NutriA from "../assets/Home/nutri-score/Nutri-score-A.svg.png";
import NutriB from "../assets/Home/nutri-score/Nutri-score-B.svg.png";
import NutriC from "../assets/Home/nutri-score/Nutri-score-C.svg.png";
import NutriD from "../assets/Home/nutri-score/Nutri-score-D.svg.png";
import NutriE from "../assets/Home/nutri-score/Nutri-score-E.svg.png";

const nutriImages = {
  a: NutriA,
  b: NutriB,
  c: NutriC,
  d: NutriD,
  e: NutriE,
};

// utility: find latest nutri-score
export const getNutriScore = (product) => {
  let latestYear = 0;
  let latestTag = null;

  Object.keys(product).forEach((key) => {
    const match = key.match(/^nutriscore_(\d+)_tags$/);
    if (match) {
      const year = parseInt(match[1], 10);
      if (
        year > latestYear &&
        Array.isArray(product[key]) &&
        product[key].length > 0
      ) {
        latestYear = year;
        latestTag = product[key][0]; // e.g. "a", "b", etc.
      }
    }
  });

  return latestTag ? nutriImages[latestTag.toLowerCase()] : null;
};
