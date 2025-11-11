import { useEffect, useState } from "react";

async function eNumberToName(e) {
  const code = e.toLowerCase().replace(/\s+/g, "").replace(/^e/, "en:e"); 
  const res = await fetch("https://static.openfoodfacts.org/data/taxonomies/additives.json");
  const data = await res.json();
  const node = data[code];
  return (
    node?.name?.en || 
    node?.name?.[Object.keys(node?.name || {})[0]] || 
    e // fallback: show original if no mapping
  );
}

function HarmfulSection({ barcode }) {
  const [riskData, setRiskData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState({ category: null, ingredient: null });
  const [ingredientDetails, setIngredientDetails] = useState("");

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

          const additiveTags = product.additives_tags || [];
          const additiveNames = await Promise.all(
            additiveTags.map(async (a) => {
              const eNumber = a.replace("en:", ""); // "en:e100" → "e100"
              return await eNumberToName(eNumber);
            })
          );

          setRiskData({
            name: product.product_name || "Unknown Product",
            allergens:
              product.allergens_tags?.map((a) => a.replace("en:", "")) || [],
            unhealthy,
            additives: additiveNames, // ✅ now readable names
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
 const fetchIngredientDetails = async (ingredient, category) => {
  // Toggle: if already selected → close
  if (
    selected.category === category &&
    selected.ingredient === ingredient
  ) {
    setSelected({ category: null, ingredient: null });
    setIngredientDetails("");
    return;
  }

  setSelected({ category, ingredient });
  setIngredientDetails("Loading...");

  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": "AIzaSyAVJRb1FLntRFkwzfCQx3cKFBiwNd1qrvU",
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
    console.log("Gemini response:", data);

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
  const renderCategory = (title, items, categoryKey) => (
    <div className="mb-4 font-poppins">
      <h3 className="font-semibold mb-2">{title}:</h3>
      <div className="flex flex-wrap gap-2 items-center">
        {items.length > 0 ? (
          items.map((item, idx) => (
            <button
              key={idx}
              onClick={() => fetchIngredientDetails(item, categoryKey)}
              className={`px-3 py-1 border rounded-lg text-sm transition w-fit
                ${
                  selected.category === categoryKey &&
                  selected.ingredient === item
                    ? "bg-red-400 text-white border-red-700"
                    : "bg-red-200 text-black hover:bg-red-400"
                }`}
            >
              {item}
            </button>
          ))
        ) : (
          <p className="text-gray-500 italic">Not listed</p>
        )}
      </div>

      {selected.category === categoryKey && selected.ingredient && (
        <div className="mt-3 bg-[#fcf6d4] p-3 border rounded font-poppins text-[13px] border-amber-400  ">
          <h4 className="font-semibold">{selected.ingredient}</h4>
          <p className="mt-1 ">{ingredientDetails}</p>
        </div>
      )}
    </div>
  );

  return (
    <div className="p-4  rounded-lg space-y-6 bg-amber-100 mb-16">
      <h2 className="text-xl font-libre font-bold text-red-600">Risk Ingredients</h2>

      {renderCategory("Allergens", riskData.allergens, "allergens")}
      {renderCategory("Unhealthy", riskData.unhealthy, "unhealthy")}
      {renderCategory("Additives", riskData.additives, "additives")}
      {renderCategory("Packaging", riskData.packaging, "packaging")}
    </div>
  );
}

export default HarmfulSection;