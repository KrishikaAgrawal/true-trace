import { useLocation } from "react-router-dom";
import BarChart from "./BarChart.jsx";

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

  return (
    <div className="w-full p-5 lg:p-24 lg:pt-14">
      <div className="flex items-center flex-col md:flex-row bg-[#e5fcf4] rounded-2xl">
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

        {/* Details Section */}
        <div className="gap-2 text-[14px] lg:p-10 p-5 md:text-[16px] font-poppins flex flex-col text-gray-800">
          {/* Full Name */}
          {item.fullName && (
            <h1 className="text-2xl mb-4 md:text-4xl font-libre font-extrabold text-[#003d29]">
              {item.fullName}
            </h1>
          )}

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
      <BarChart barcode={item.barcode?.split(" ")[0]} />
    </div>
  );
};

export default CardDescription;
