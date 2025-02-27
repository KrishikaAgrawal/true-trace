import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext"; // ✅ Import Context Correctly
import HeroSection from "./Hero";
import Data from "./Data";

const Home = () => {
  const { searchQuery } = useContext(SearchContext); // ✅ Use useContext instead of useSearch

  // Filter items based on search query (case-insensitive)
  const filteredItems = Data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const navigate = useNavigate();
  const handleNavigate = (item) => {
    navigate("/CardDescription", { state: item });
  };

  return (
    <>
      <HeroSection />
      <div className="bg-white w-full p-10 grid lg:grid-cols-4 md:grid-cols-3 gap-6">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <div key={index} className="flex flex-col">
              <div
                onClick={() => handleNavigate(item)}
                className="flex w-full bg-[#e5fcf4] overflow-hidden rounded-xl items-center justify-center h-80 cursor-pointer"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="transition-transform duration-300 ease-in-out transform hover:scale-115 size-60 object-contain"
                />
              </div>
              <div className="flex flex-col gap-3 py-4">
                <h2 className="text-poppins text-gray-800 text-xl font-semibold">
                  {item.name}
                </h2>
                <div className="flex items-start gap-4">
                  <img
                    src={item.nutriScore}
                    alt="NutriScore"
                    className="w-[80px] object-contain"
                  />
                  <img
                    src={item.nova}
                    alt="Nova Score"
                    className="w-[25px] object-contain"
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No items found</p>
        )}
      </div>
    </>
  );
};

export default Home;
