import { useLocation } from "react-router-dom";

const CardDescription = () => {
  const location = useLocation();
  const item = location.state || {};

  return (
    <div className="w-full p-5 lg:p-24">
      <div className="flex items-center flex-col md:flex-row bg-[#e5fcf4] rounded-2xl">
        {/* Image Section */}
        <div className="lg:p-10 p-5 flex overflow-hidden">
          <img
            src={item.img}
            alt={item.name}
            className="transition-transform duration-300 ease-in-out transform hover:scale-115 object-contain md:size-96 size-72"
          />
        </div>

        {/* Details Section */}
        <div className="gap-2 text-[14px] lg:p-10 p-5 md:text-[16px] font-poppins flex flex-col text-gray-800">
          <h1 className="text-2xl mb-4 md:text-4xl font-libre font-extrabold text-[#003d29]">
            {item.fullName}
          </h1>

          <p className="font-semibold">
            Barcode: <span className="font-normal">{item.barcode}</span>
          </p>
          <p className="font-semibold">
            Quantity: <span className="font-normal">{item.quantity}</span>
          </p>
          <p className="font-semibold">
            Packaging: <span className="font-normal">{item.packaging}</span>
          </p>
          <p className="font-semibold">
            Brand: <span className="font-normal">{item.brand}</span>
          </p>
          <p className="font-semibold">
            Categories:{" "}
            <span className="font-normal">{item.categories?.join(", ")}</span>
          </p>
          <p className="font-semibold">
            Labels:{" "}
            <span className="font-normal">{item.labels?.join(", ")}</span>
          </p>
          <p className="font-semibold">
            Manufacturing Places:{" "}
            <span className="font-normal">
              {item.manufacturingPlaces?.join(", ")}
            </span>
          </p>
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
          <p className="font-semibold">
            Stores:{" "}
            <span className="font-normal">{item.stores?.join(", ")}</span>
          </p>
          <p className="font-semibold">
            Countries Sold:{" "}
            <span className="font-normal">
              {item.countriesSold?.join(", ")}
            </span>
          </p>

          {/* Nutrition & Nova Score */}
          <div className="flex gap-5 items-center mt-4">
            <img src={item.nutriScore} alt="NutriScore" className="h-12" />
            <img src={item.nova} alt="Nova Score" className="h-12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDescription;
