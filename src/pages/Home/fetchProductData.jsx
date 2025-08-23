const fetchProductData = async (barcode, setData) => {
  try {
    const response = await fetch(
      `https://world.openfoodfacts.org/api/v2/product/${barcode}.json`
    );

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();

    if (data.status === 1) {
      const product = data.product;

      // Optional: If charts/nutrition breakdown still needed
      if (setData) {
        const nutriments = product.nutriments || {};
        setData({
          energy: nutriments["energy-kcal_100g"] || 0,
          fat: nutriments["fat_100g"] || 0,
          saturatedFat: nutriments["saturated-fat_100g"] || 0,
          carbohydrates: nutriments["carbohydrates_100g"] || 0,
          sugars: nutriments["sugars_100g"] || 0,
          protein: nutriments["proteins_100g"] || 0,
          fiber: nutriments["fiber_100g"] || 0,
          sodium: nutriments["sodium_100g"]
            ? nutriments["sodium_100g"] * 1000
            : 0,
          nutriScore: product.nutriscore_grade || "unknown",
          novaGroup: product.nova_groups || "unknown",
        });
      }

      // Return raw product so Home.js can decide what to use
      return product;
    } else {
      console.warn("Product not found in API:", barcode);
      return null;
    }
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};

export default fetchProductData;
