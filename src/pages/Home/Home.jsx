import { useNavigate } from "react-router-dom";

import KurkureImg from "../../assets/Home/kurkure/Kurkure-Masala.png";
import kurkureNutriscore from "../../assets/Home/kurkure/kurkure-nutriscore.svg";
import KurkureNova from "../../assets/Home/kurkure/krukure-nova.svg";

const Data = [
  {
    img: KurkureImg,
    name: "Kurkure Masala Munch",
    fullName: "Kurkure Masala Munch 20rs - 78gm",
    barcode: "8901491100519 (EAN / EAN-13)",
    quantity: "78gm",
    packaging: "Plastic",
    brand: "Kurkure",
    categories: ["Snacks", "Salty snacks", "Namkeen"],
    labels: ["Vegetarian"],
    manufacturingPlaces: ["India"],
    productPage: "http://www.pepsicoindia.co.in",
    stores: ["Desi Gourmet"],
    countriesSold: ["France", "India", "Nepal", "Spain"],
    nutriScore: kurkureNutriscore,
    nova: KurkureNova,
  },
  {
    img: KurkureImg,
    name: "Kurkure Masala Munch",
    fullName: "Kurkure Masala Munch 20rs - 78gm",
    barcode: "8901491100519 (EAN / EAN-13)",
    quantity: "78gm",
    packaging: "Plastic",
    brand: "Kurkure",
    categories: ["Snacks", "Salty snacks", "Namkeen"],
    labels: ["Vegetarian"],
    manufacturingPlaces: ["India"],
    productPage: "http://www.pepsicoindia.co.in",
    stores: ["Desi Gourmet"],
    countriesSold: ["France", "India", "Nepal", "Spain"],
    nutriScore: kurkureNutriscore,
    nova: KurkureNova,
  },
  {
    img: KurkureImg,
    name: "Kurkure Masala Munch",
    fullName: "Kurkure Masala Munch 20rs - 78gm",
    barcode: "8901491100519 (EAN / EAN-13)",
    quantity: "78gm",
    packaging: "Plastic",
    brand: "Kurkure",
    categories: ["Snacks", "Salty snacks", "Namkeen"],
    labels: ["Vegetarian"],
    manufacturingPlaces: ["India"],
    productPage: "http://www.pepsicoindia.co.in",
    stores: ["Desi Gourmet"],
    countriesSold: ["France", "India", "Nepal", "Spain"],
    nutriScore: kurkureNutriscore,
    nova: KurkureNova,
  },
  {
    img: KurkureImg,
    name: "Kurkure Masala Munch",
    fullName: "Kurkure Masala Munch 20rs - 78gm",
    barcode: "8901491100519 (EAN / EAN-13)",
    quantity: "78gm",
    packaging: "Plastic",
    brand: "Kurkure",
    categories: ["Snacks", "Salty snacks", "Namkeen"],
    labels: ["Vegetarian"],
    manufacturingPlaces: ["India"],
    productPage: "http://www.pepsicoindia.co.in",
    stores: ["Desi Gourmet"],
    countriesSold: ["France", "India", "Nepal", "Spain"],
    nutriScore: kurkureNutriscore,
    nova: KurkureNova,
  },
  {
    img: KurkureImg,
    name: "Kurkure Masala Munch",
    fullName: "Kurkure Masala Munch 20rs - 78gm",
    barcode: "8901491100519 (EAN / EAN-13)",
    quantity: "78gm",
    packaging: "Plastic",
    brand: "Kurkure",
    categories: ["Snacks", "Salty snacks", "Namkeen"],
    labels: ["Vegetarian"],
    manufacturingPlaces: ["India"],
    productPage: "http://www.pepsicoindia.co.in",
    stores: ["Desi Gourmet"],
    countriesSold: ["France", "India", "Nepal", "Spain"],
    nutriScore: kurkureNutriscore,
    nova: KurkureNova,
  },
];

const Home = () => {
  const navigate = useNavigate();
  const handleNavigate = (item) => {
    navigate("/CardDescription", { state: item });
  };

  return (
    <div className="w-full p-10 grid lg:grid-cols-4 md:grid-cols-3 gap-6">
      {Data.map((item, index) => (
        <div key={index} className="flex flex-col ">
          <div
            onClick={() => handleNavigate(item)}
            className="flex w-full bg-[#e5fcf4] overflow-hidden rounded-xl items-center justify-center h-80"
          >
            <img
              src={item.img}
              alt=""
              className="transition-transform duration-300 ease-in-out transform hover:scale-115 size-60 object-contain cursor-pointer"
            />
          </div>
          <div className="flex flex-col gap-3 py-4">
            <h2 className="text-poppins text-gray-800 text-xl font-semibold">
              {item.name}
            </h2>
            <div className="flex items-start gap-4">
              <img
                src={item.nutriScore}
                alt=""
                className="w-[80px] object-contain"
              />
              <img src={item.nova} alt="" className="w-[25px] object-contain" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
