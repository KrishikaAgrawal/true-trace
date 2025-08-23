import { useEffect, useState } from "react";

function HarmfulSection({ barcode }) {
  const [riskData, setRiskData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedIngredient, setSelectedIngredient] = useState(null);
  const [ingredientDetails, setIngredientDetails] = useState(null);

  // === Fetch harmful product data from OpenFoodFacts ===
  useEffect(() => {
    const fetchRiskData = async () => {
      try {
        const response = await fetch(
          `https://world.openfoodfacts.org/api/v2/product/${barcode}.json`
        );
        const data = await response.json();

        if (data.status === 1) {
          const product = data.product;
          const ingredientsText = product.ingredients_text?.toLowerCase() || "";

          // Detect unhealthy ingredients not already in additives
          const unhealthy = [];
          if (ingredientsText.includes("palm")) unhealthy.push("Palm oil");
          if (ingredientsText.includes("hydrogenated"))
            unhealthy.push("Hydrogenated oil / Trans fats");
          if (
            ingredientsText.includes("high fructose corn syrup") ||
            ingredientsText.includes("hfcs")
          )
            unhealthy.push("High fructose corn syrup");
          if (
            ingredientsText.includes("monosodium glutamate") ||
            ingredientsText.includes("msg")
          )
            unhealthy.push("Monosodium Glutamate (MSG)");
          if (ingredientsText.includes("maltodextrin"))
            unhealthy.push("Maltodextrin");

          setRiskData({
            name: product.product_name || "Unknown Product",
            allergens:
              product.allergens_tags?.map((a) => a.replace("en:", "")) || [],
            unhealthy,
            additives:
              product.additives_tags?.map((a) => a.replace("en:", "")) || [],
            packaging:
              product.packaging_tags?.map((p) => p.replace("en:", "")) || [],
          });
        } else {
          setRiskData(null);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    if (barcode) fetchRiskData();
  }, [barcode]);

  // === Fetch ingredient detail from Gemini ===
  const fetchIngredientDetails = async (ingredient) => {
    setSelectedIngredient(ingredient);
    setIngredientDetails("Loading...");

    try {
      const response = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-goog-api-key": "AIzaSyCppgoA0oNP6iu0Ioi6LczavsAt96yFECE",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `Explain in 2 lines and simple terms: What is ${ingredient}, why is it used in ${riskData.name}, and how can it be harmful to health?`,
                  },
                ],
              },
            ],
          }),
        }
      );

      const data = await response.json();
      const explanation =
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "No details available.";
      setIngredientDetails(explanation);
    } catch (error) {
      console.error("Error fetching Gemini details:", error);
      setIngredientDetails("Error loading details.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!riskData) return <p>No risk details found.</p>;

  // === Shared renderer for each category ===
  const renderCategory = (title, items) => (
    <div className="mb-4">
      <h3 className="font-semibold mb-2">{title}:</h3>
      <div className="flex flex-wrap gap-2">
        {items.length > 0 ? (
          items.map((item, idx) => (
            <div key={idx} className="w-full">
              <button
                onClick={() =>
                  selectedIngredient === item
                    ? setSelectedIngredient(null) // close if clicked again
                    : fetchIngredientDetails(item)
                }
                className={`px-3 py-1 border rounded-lg text-sm transition w-fit
                  ${
                    selectedIngredient === item
                      ? "bg-blue-100 border-blue-400"
                      : "hover:bg-gray-100"
                  }`}
              >
                {item}
              </button>

              {/* Inline explanation box under the clicked ingredient */}
              {selectedIngredient === item && (
                <div className="mt-2 p-3 border rounded bg-gray-50">
                  <h4 className="font-semibold">{item}</h4>
                  <p className="mt-1">{ingredientDetails}</p>
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-500">None</p>
        )}
      </div>
    </div>
  );

  return (
    <div className="p-4 border rounded-lg space-y-6">
      <h2 className="text-xl font-bold">Risk Ingredients</h2>

      {renderCategory("Allergens", riskData.allergens)}
      {renderCategory("Unhealthy", riskData.unhealthy)}
      {renderCategory("Additives", riskData.additives)}
      {renderCategory("Packaging", riskData.packaging)}
    </div>
  );
}

export default HarmfulSection;
