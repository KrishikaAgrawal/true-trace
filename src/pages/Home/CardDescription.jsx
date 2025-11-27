import { useLocation } from "react-router-dom";
import BarChart from "./BarChart.jsx";
import DoughnutChart from "./DoughnutChart.jsx";
import GaugeChart from "./GaugeChart.jsx";
// import LineChart from "./LineChart.jsx";
import AlertSection from "./AlertSection";
import GoodNutrientSection from "./GoodNutrientSection.jsx";
import HarmfulSection from "./HarmfulSection.jsx";
import veg from "../../assets/Home/veg.jpg";
import nonveg from "../../assets/Home/non-veg.jpg";
// import unknown from "../../assets/Home/unknown.png";

const CardDescription = () => {
  const location = useLocation();
  const item = location.state || {};

  // Function to conditionally render a field if it has a value
  const renderField = (label, value) => {
    if (!value || (Array.isArray(value) && value.length === 0)) return null;
    return (
      <p className="font-semibold">
        {label}:{" "}
        <span className="font-normal">
          {Array.isArray(value) ? value.join(", ") : value}
        </span>
      </p>
    );
  };

  const labelsString = Array.isArray(item.labels)
    ? item.labels.join(" ").toLowerCase()
    : (item.labels || "").toLowerCase();

  return (
    <div className="w-full p-5 lg:p-24 lg:pt-14 bg-amber-50">
      <div className="flex items-center flex-col mb-10 md:flex-row">
        {/* Image Section */}
        {item.img && (
          <div className="lg:p-10 p-5 flex overflow-hidden">
            <img
              src={item.img}
              alt={item.name}
              className="transition-transform duration-300 ease-in-out transform hover:scale-115 object-contain md:size-96 size-72"
            />
          </div>
        )}
        <div className="flex flex-col gap-5 ">
          {/* Full Name */}
          {item.fullName && (
            <h1 className="text-2xl mb-4 md:text-4xl font-libre font-extrabold text-[#003d29]">
              {item.fullName}
            </h1>
          )}

          {/* Alarming Content Section */}
          {item.barcode && (
            <div className="flex items-center justify-center w-full">
              <AlertSection barcode={item.barcode?.split(" ")[0]} />
            </div>
          )}
          {item.barcode && (
            <div className="flex items-center justify-center">
              <GoodNutrientSection barcode={item.barcode?.split(" ")[0]} />
            </div>
          )}

          {/* Nutrition & Nova Score */}
          <div className="flex gap-5 items-center">
            {item.nutriScore && (
              <img src={item.nutriScore} alt="NutriScore" className="h-12" />
            )}
            {item.nova && (
              <img src={item.nova} alt="Nova Score" className="h-12" />
            )}
            {/* Veg / Non-Veg Detection */}
            {labelsString && (
              <>
                {labelsString.includes("vegan") ||
                labelsString.includes("vegetarian") ? (
                  <div className="flex flex-col items-center">
                    <span className="text-green-700 font-semibold text-[10px]">
                      VEG
                    </span>
                    <img
                      src={veg}
                      className="h-7 w-7 pulseScale"
                      alt="Veg"
                    />
                  </div>
                ) : labelsString.includes("non-vegetarian") ||
                  labelsString.includes("non vegetarian") ? (
                  <div className="flex flex-col items-center">
                    <img
                      src={nonveg}
                      className="h-7 w-7 pulseScale"
                      alt="Non-Veg"
                    />
                    <span className="text-red-700 font-semibold text-[10px]">
                      Non-Veg
                    </span>
                  </div>
                ) : null}
              </>
            )}
          </div>
        </div>
      </div>
      <div>
        <HarmfulSection barcode={item.barcode?.split(" ")[0]} />
      </div>
      <div className="flex items-center justify-center bg-emerald-100 rounded-2xl mb-10 p-5 h-[450px]">
        <BarChart barcode={item.barcode?.split(" ")[0]} />
      </div>
      <div className="grid md:grid-cols-2 items-center flex-col mb-10 gap-10 md:flex-row overflow-hidden">
        <div className="items-center flex justify-center bg-emerald-100 rounded-2xl p-5 h-[450px]">
          <DoughnutChart barcode={item.barcode?.split(" ")[0]} />
        </div>
        <div className="items-center flex justify-center bg-emerald-100 rounded-2xl p-5 h-[450px]">
          <GaugeChart barcode={item.barcode?.split(" ")[0]} />
        </div>
      </div>
      <div className="flex items-center flex-col mb-10 md:flex-row bg-[#e5fcf4] rounded-2xl">
        {/* Details Section */}
        <div className="gap-2 text-[14px] lg:p-10 p-5 md:text-[16px] font-poppins flex flex-col text-gray-800">
          {/* Conditionally Rendered Fields */}
          {renderField("Barcode", item.barcode)}
          {renderField("Common Name", item.commonName)}
          {renderField("Quantity", item.quantity)}
          {renderField("Packaging", item.packaging)}
          {renderField("Brand", item.brand)}
          {renderField("Categories", item.categories)}
          {renderField("Labels", item.labels)}
          {renderField("Manufacturing Places", item.manufacturingPlaces)}
          {renderField("Origin", item.origin)}
          {renderField("Origin of Ingredients", item.originOfIngredients)}
          {renderField("Traceability Code", item.traceabilityCode)}

          {/* Product Page Link */}
          {item.productPage && (
            <p className="font-semibold">
              Product Page:{" "}
              <a
                href={item.productPage}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                {item.productPage}
              </a>
            </p>
          )}

          {renderField("Stores", item.stores)}
          {renderField("Countries Sold", item.countriesSold)}

          {/* Nutrition & Nova Score */}
          <div className="flex gap-5 items-center mt-4">
            {item.nutriScore && (
              <img src={item.nutriScore} alt="NutriScore" className="h-12" />
            )}
            {item.nova && (
              <img src={item.nova} alt="Nova Score" className="h-12" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDescription;
