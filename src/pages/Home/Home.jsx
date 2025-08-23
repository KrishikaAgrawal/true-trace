import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { SearchContext } from "../../context/SearchContext";
import HeroSection from "./Hero";
import Data from "./Data";
import fetchProductData from "./fetchProductData";

import { getNutriScore } from "../../utils/getNutriScore";
import { getNovaScore } from "../../utils/getNovaScore";

const Home = () => {
  const { searchQuery } = useContext(SearchContext);
  const [products, setProducts] = useState(Data); // default: local Data
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const navigate = useNavigate();
  const handleNavigate = (item) => {
    navigate("/CardDescription", { state: item });
  };

useEffect(() => {
  const fetchData = async () => {
    if (!searchQuery) {
      setProducts(Data);
      setNotFound(false);
      return;
    }

    const localMatch = Data.filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.barcode.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (localMatch.length > 0) {
      setProducts(localMatch);
      setNotFound(false);
    } else {
      try {
        setLoading(true);
        const product = await fetchProductData(searchQuery);
        setLoading(false);

        if (product) {
          const {
            product_name: name = "Unknown Product",
            product_name_en,
            image_front_url,
           
            code,
          } = product;

          const newProduct = {
            img: image_front_url || "https://via.placeholder.com/150",
            name: product_name_en || name,
            barcode: code || searchQuery,
            nutriScore: getNutriScore(product),
            nova: getNovaScore(product),
          };

          setProducts([newProduct]);
          setNotFound(false);
        } else {
          setProducts([]);
          setNotFound(true);
        }
      } catch (err) {
        console.error(err);
        setLoading(false);
        setProducts([]);
        setNotFound(true);
      }
    }
  };

  fetchData();
}, [searchQuery]);


  console.log("Fetched products:", products);

  return (
    <>
      <HeroSection />
      <div className="bg-white w-full p-10 grid lg:grid-cols-4 md:grid-cols-3 gap-6">
        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : products.length > 0 ? (
          products.map((item, index) => (
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
                  {item.nutriScore && (
                    <img
                      src={item.nutriScore}
                      alt="NutriScore"
                      className="w-[80px] object-contain"
                    />
                  )}
                  {item.nova && (
                    <img
                      src={item.nova}
                      alt="Nova Score"
                      className="w-[25px] object-contain"
                    />
                  )}
                </div>
              </div>
            </div>
          ))
        ) : notFound ? (
          <p className="text-red-500">No product found</p>
        ) : (
          <p className="text-gray-500">No items found</p>
        )}
      </div>
    </>
  );
};

export default Home;

// import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { SearchContext } from "../../context/SearchContext"; // Import Search Context
// import HeroSection from "./Hero";
// import Data from "./Data";

// const Home = () => {
//   const { searchQuery } = useContext(SearchContext); // Get search query

//   // Filter items based on name OR barcode (case-insensitive)
//   const filteredItems = Data.filter(
//     (item) =>
//       item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       item.barcode.toLowerCase().includes(searchQuery.toLowerCase()) // ✅ Search by barcode
//   );

//   const navigate = useNavigate();
//   const handleNavigate = (item) => {
//     navigate("/CardDescription", { state: item });
//   };

//   return (
//     <>
//       <HeroSection />
//       <div className="bg-white w-full p-10 grid lg:grid-cols-4 md:grid-cols-3 gap-6">
//         {filteredItems.length > 0 ? (
//           filteredItems.map((item, index) => (
//             <div key={index} className="flex flex-col">
//               <div
//                 onClick={() => handleNavigate(item)}
//                 className="flex w-full bg-[#e5fcf4] overflow-hidden rounded-xl items-center justify-center h-80 cursor-pointer"
//               >
//                 <img
//                   src={item.img}
//                   alt={item.name}
//                   className="transition-transform duration-300 ease-in-out transform hover:scale-115 size-60 object-contain"
//                 />
//               </div>
//               <div className="flex flex-col gap-3 py-4">
//                 <h2 className="text-poppins text-gray-800 text-xl font-semibold">
//                   {item.name}
//                 </h2>
//                 {/* <p className="text-gray-600 text-sm">Barcode: {item.barcode}</p> */}
//                 <div className="flex items-start gap-4">
//                   <img
//                     src={item.nutriScore}
//                     alt="NutriScore"
//                     className="w-[80px] object-contain"
//                   />
//                   <img
//                     src={item.nova}
//                     alt="Nova Score"
//                     className="w-[25px] object-contain"
//                   />
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-500">No items found</p>
//         )}
//       </div>
//     </>
//   );
// };

// export default Home;
