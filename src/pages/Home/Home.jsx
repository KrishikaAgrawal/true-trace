import { useNavigate } from "react-router-dom";
import HeroSection from "./Hero";

import KurkureImg from "../../assets/Home/kurkure/Kurkure-Masala.png";
import kurkureNutriscore from "../../assets/Home/kurkure/kurkure-nutriscore.svg";
import KurkureNova from "../../assets/Home/kurkure/krukure-nova.svg";

import laysSaltedImg from "../../assets/Home/lays-salted/lays-salted.png";
import laysSaltedNutriscore from "../../assets/Home/lays-salted/lays-salted-nutriscore.svg";
import laysSaltedNova from "../../assets/Home/lays-salted/lays-salted-nova.svg";

import milkyBarImg from "../../assets/Home/milky-bar/milky-bar.png";
import milkyBarNutriscore from "../../assets/Home/milky-bar/milky-bar-nutriscore.svg";
import milkyBarNova from "../../assets/Home/milky-bar/milky-bar-nova.svg";

import nutellaImg from "../../assets/Home/nutella/nutella.png";
import nutellaNutriscore from "../../assets/Home/nutella/nutella-nutriscore.svg";
import nutellaNova from "../../assets/Home/nutella/nutella-nova.svg";

import oreoImg from "../../assets/Home/oreo/oreo.png";
import oreoNutriscore from "../../assets/Home/oreo/oreo-nutriscore.svg";
import oreoNova from "../../assets/Home/oreo/oreo-nova.svg";

import butterImg from "../../assets/Home/butter/butter.png";
import butterNutriscore from "../../assets/Home/butter/butter-nutriscore.svg";
import butterNova from "../../assets/Home/butter/butter-nova.svg";

import chocosImg from "../../assets/Home/chocos/chocos.jpg";
import chocosNutriscore from "../../assets/Home/chocos/chocos-nutriscore.svg";
import chocosNova from "../../assets/Home/chocos/chocos-nova.svg";

import lassiImg from "../../assets/Home/lassi/lassi.jpg";
import lassiNutriscore from "../../assets/Home/lassi/lassi-nutriscore.svg";
import lassiNova from "../../assets/Home/lassi/lassi-nova.svg";

import doritosImg from "../../assets/Home/doritos/doritos.png";
import doritosNutriscore from "../../assets/Home/doritos/doritos-nutriscore.svg";
import doritosNova from "../../assets/Home/doritos/doritos-nova.svg";

import dairyMilkImg from "../../assets/Home/dairy-milk/dairy-milk.png";
import dairyMilkNutriscore from "../../assets/Home/dairy-milk/dairy-milk-nutriscore.svg";
import dairyMilkNova from "../../assets/Home/dairy-milk/dairy-milk-nova.svg";

import cocacolaImg from "../../assets/Home/cocacola/cocacola.png";
import cocacolaNutriscore from "../../assets/Home/cocacola/cocacola-nutriscore.svg";
import cocacolaNova from "../../assets/Home/cocacola/cocacola-nova.svg";

import cornflakesImg from "../../assets/Home/cornflakes/cornflakes.png";
import cornflakesNutriscore from "../../assets/Home/cornflakes/cornflakes-nutriscore.svg";
import cornflakesNova from "../../assets/Home/cornflakes/cornflakes-nova.svg";

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
    img: laysSaltedImg,
    name: "Lays Classics Salted",
    fullName: "Lays Classics Salted 20rs - 50g",
    barcode: "8901491101837 (EAN / EAN-13)",
    quantity: "50g",
    packaging: "Plastic",
    brand: "Lay's",
    categories: [
      "Plant-based foods and beverages",
      "Plant-based foods",
      "Snacks",
      "Cereals and potatoes",
      "Salty snacks",
      "Appetizers",
      "Chips and fries",
      "Crisps",
      "Potato crisps",
    ],
    labels: ["Vegetarian"],
    manufacturingPlaces: ["India"],
    productPage: "http://www.pepsicoindia.co.in",
    stores: ["Desi Gourmet"],
    countriesSold: ["India"],
    nutriScore: laysSaltedNutriscore,
    nova: laysSaltedNova,
  },
  {
    img: nutellaImg,
    name: "Nutella",
    fullName: "Nutella - Ferrero - 1 kg",
    barcode: "3017620425035 (EAN / EAN-13)",
    commonName: "Spread with hazelnuts",
    quantity: "1 kg",
    packaging: [
      "Composite material",
      "Plastic",
      "Cardboard",
      "Glass",
      "PP 5 - Polypropylene",
      "Clear Glass",
      "Non-corrugated cardboard",
      "Paper and fibreboard/aluminium",
      "82 C/PAP",
      "Bocal",
    ],
    brand: "Ferrero",
    categories: [
      "Breakfasts",
      "Spreads",
      "Sweet spreads",
      "Hazelnut spreads",
      "Chocolate spreads",
      "Cocoa and hazelnuts spreads",
    ],
    labels: [
      "No gluten",
      "No preservatives",
      "No colorings",
      "No hydrogenated fats",
      "Triman",
    ],
    origin: "France",
    manufacturingPlaces: ["China", "France"],
    productPage: "https://www.nutella.com/fr/fr/produits/n...",
    stores: ["Auchan", "E. Leclerc", "Carrefour"],
    countriesSold: [
      "Algeria",
      "Belgium",
      "Bulgaria",
      "France",
      "Germany",
      "Guadeloupe",
      "India",
      "Italy",
      "Luxembourg",
      "Martinique",
      "Morocco",
      "Réunion",
      "Spain",
      "Switzerland",
      "Tunisia",
      "United Kingdom",
      "United States",
    ],
    nutriScore: nutellaNutriscore,
    nova: nutellaNova,
  },
  {
    img: milkyBarImg,
    name: "Milky Bar",
    fullName: "Milky Bar - Nestlé - 42g",
    barcode: "8901058861921 (EAN / EAN-13)",
    commonName: "Milk based confectionary",
    quantity: "42g",
    packaging: ["Metal", "Recyclable Metals", "Aluminium", "Cardboard box"],
    brand: "Nestlé",
    categories: [
      "Snacks",
      "Sweet snacks",
      "Cocoa and its products",
      "Confectioneries",
      "Chocolates",
      "Milk chocolates",
      "Milk chocolate bar",
    ],
    labels: ["Vegetarian", "Green Dot India"],
    origin: "India",
    manufacturingPlaces: ["India"],
    countriesSold: ["India"],
    nutriScore: milkyBarNutriscore,
    nova: milkyBarNova,
  },
  {
    img: oreoImg,
    name: "Oreo Original",
    fullName: "Oreo Original - 66g",
    barcode: "7622300541491 (EAN / EAN-13)",
    quantity: "66g",
    packaging: ["Plastic", "Other-plastics"],
    brand: "Oreo",
    categories: [
      "Snacks",
      "Sweet snacks",
      "Biscuits and cakes",
      "Biscuits and crackers",
      "Biscuits",
      "Chocolate biscuits",
    ],
    labels: ["Vegetarian", "Cocoa Life", "Green Dot"],
    countriesSold: ["Bulgaria", "Germany", "Romania", "France", "Switzerland"],
    nutriScore: oreoNutriscore,
    nova: oreoNova,
  },
  {
    img: chocosImg,
    name: "Choco Pops Cereals",
    fullName: "Choco Pops Cereals - Kellogg's - 430g",
    barcode: "5059319021218 (EAN / EAN-13)",
    quantity: "430g",
    brand: "Kellogg's",
    categories: [
      "Plant-based foods and beverages",
      "Plant-based foods",
      "Breakfasts",
      "Cereals and potatoes",
      "Cereals and their products",
      "Breakfast cereals",
      "Chocolate cereals",
      "Extruded cereals",
      "Chocolate wheat shells",
    ],
    labels: ["Kosher"],
    countriesSold: ["United Kingdom"],
    nutriScore: chocosNutriscore,
    nova: chocosNova,
  },
  {
    img: butterImg,
    name: "Amul Pasteurized Butter",
    fullName: "Amul Pasteurized Butter - 100g",
    barcode: "8901262010016 (EAN / EAN-13)",
    commonName: "Butter",
    quantity: "100g",
    packaging: ["Paper"],
    brand: "Amul",
    categories: [
      "Dairies",
      "Fats",
      "Spreads",
      "Spreadable fats",
      "Animal fats",
      "Dairy spreads",
      "Milkfat",
      "Butters",
    ],
    labels: ["Vegetarian", "Green Dot India"],
    origin: "Made in India",
    originOfIngredients: "India",
    manufacturingPlaces: ["Gujarat, India"],
    traceabilityCode: "FSSAI 10012021000071",
    productPage: "http://www.amul.com",
    countriesSold: [
      "Bahrain",
      "Hong Kong",
      "India",
      "Kuwait",
      "Malaysia",
      "New Zealand",
      "Oman",
      "Qatar",
      "Singapore",
      "Sri Lanka",
      "United Arab Emirates",
      "United States",
    ],
    nutriScore: butterNutriscore,
    nova: butterNova,
  },
  {
    img: lassiImg,
    name: "Amul Lassi",
    fullName: "Amul Lassi 180ml TPK - 250ml",
    barcode: "8901262151696 (EAN / EAN-13)",
    quantity: "250ml",
    brand: "Amul",
    categories: [
      "Beverages",
      "Dairies",
      "Fermented foods",
      "Fermented milk products",
      "Desserts",
      "Dairy desserts",
      "Dairy drinks",
      "Fermented dairy desserts",
      "Fermented drinks",
      "Yogurts",
      "Fermented milk drinks",
      "Drinkable-yogurts",
      "Dairy based drink",
    ],
    labels: ["Vegetarian", "Green Dot India"],
    traceabilityCode: "FSC-C014047",
    countriesSold: ["India"],
    nutriScore: lassiNutriscore,
    nova: lassiNova,
  },
  {
    img: dairyMilkImg,
    name: "Cadbury Dairy Milk",
    fullName: "Cadbury Dairy Milk - Mondelez - 13.2g",
    barcode: "8901233030548 (EAN / EAN-13)",
    commonName: "Chocolate bar with milk",
    quantity: "13.2g",
    brand: "Mondelez",
    categories: [
      "Snacks",
      "Sweet snacks",
      "Cocoa and its products",
      "Confectioneries",
      "Chocolates",
      "Milk chocolates",
    ],
    labels: ["Vegetarian", "Green Dot India"],
    countriesSold: ["India"],
    nutriScore: dairyMilkNutriscore,
    nova: dairyMilkNova,
  },
  {
    img: doritosImg,
    name: "Chilli Heatwave Tortilla Chips",
    fullName: "Chilli Heatwave Tortilla Chips - Doritos - 180g",
    barcode: "5000328741901 (EAN / EAN-13)",
    quantity: "180g",
    packaging: ["Mixed plastic-bag"],
    brand: "Doritos",
    categories: [
      "Snacks",
      "Salty snacks",
      "Appetizers",
      "Chips and fries",
      "Crisps",
      "Corn chips",
    ],
    labels: ["Vegetarian", "Vegan"],
    countriesSold: ["France", "United Kingdom"],
    nutriScore: doritosNutriscore,
    nova: doritosNova,
  },
  {
    img: cornflakesImg,
    name: "Corn Flakes",
    fullName: "Corn Flakes - Kellogg's - 375g",
    barcode: "8010265640202 (EAN / EAN-13)",
    quantity: "375g",
    packaging: ["Cardboard"],
    brand: "Kellogg's",
    categories: [
      "Plant-based foods and beverages",
      "Plant-based foods",
      "Breakfasts",
      "Cereals and potatoes",
      "Cereals and their products",
      "Breakfast cereals",
      "Flakes",
      "Cereal flakes",
      "Extruded cereals",
      "Extruded flakes",
      "Corn flakes",
    ],
    labels: ["Vegetarian", "Vegan", "No palm oil"],
    manufacturingPlaces: ["EU"],
    productPage: "http://www.kellogs.com",
    stores: ["Coop"],
    countriesSold: ["France", "Greece", "Italy", "Spain"],
    nutriScore: cornflakesNutriscore,
    nova: cornflakesNova,
  },
  {
    img: cocacolaImg,
    name: "Coca-Cola Original Taste",
    fullName: "Coca-Cola Original Taste - 1.5L",
    barcode: "5449000000439 (EAN / EAN-13)",
    commonName: "Coke",
    quantity: "1.5L",
    packaging: [
      "Tethered cap",
      "Bouchon",
      "Bouchon ou couvercle",
      "Bouteille",
      "Bouteille ou Flacon",
      "PET bottle",
      "Plastic label",
      "Plastique",
    ],
    brand: "Coca-Cola",
    categories: [
      "Beverages and beverages preparations",
      "Beverages",
      "Carbonated drinks",
      "Sodas",
      "Colas",
      "Cola with sugar",
      "Sweetened beverages",
    ],
    labels: ["Green Dot", "Made in Swiss"],
    productPage: "https://www.coca-cola-france.fr/nos-marq...",
    stores: [
      "Cora",
      "E.leclerc",
      "Auchan",
      "Lidl",
      "Carrefour Market",
      "Magasin U",
      "Monoprix",
      "Métro",
      "Spar",
    ],
    countriesSold: [
      "Albania",
      "Algeria",
      "Austria",
      "Belgium",
      "Croatia",
      "Czech Republic",
      "Democratic Republic of the Congo",
      "France",
      "Georgia",
      "Germany",
      "Greece",
      "Italy",
      "Madagascar",
      "Morocco",
      "Poland",
      "Réunion",
      "Slovenia",
      "South Africa",
      "Sweden",
      "Switzerland",
      "Tunisia",
      "Ukraine",
      "United Kingdom",
    ],
    nutriScore: cocacolaNutriscore,
    nova: cocacolaNova,
  },
];

const Home = () => {
  const navigate = useNavigate();
  const handleNavigate = (item) => {
    navigate("/CardDescription", { state: item });
  };

  return (
    <>
      <HeroSection />
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
                <img
                  src={item.nova}
                  alt=""
                  className="w-[25px] object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
