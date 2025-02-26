import KurkureImg from "../../assets/Home/kurkure/Kurkure-Masala.jpg";
import kurkureNutriscore from "../../assets/Home/kurkure/kurkure-nutriscore.svg";
import KurkureNova from "../../assets/Home/kurkure/krukure-nova.svg";

const Data = [
  {
    img: KurkureImg,
    name: "Kurkure Masala Munch",
    nutriScore: kurkureNutriscore,
    nova: KurkureNova,
  },
  {
    img: KurkureImg,
    name: "Kurkure Masala Munch",
    nutriScore: kurkureNutriscore,
    nova: KurkureNova,
  },
  {
    img: KurkureImg,
    name: "Kurkure Masala Munch",
    nutriScore: kurkureNutriscore,
    nova: KurkureNova,
  },
  {
    img: KurkureImg,
    name: "Kurkure Masala Munch",
    nutriScore: kurkureNutriscore,
    nova: KurkureNova,
  },
];

const Home = () => {
  return (
    <div className="w-full p-10 grid lg:grid-cols-4 gap-6">
      {Data.map((item, index) => (
        <div key={index} className="flex flex-col ">
          <div className="flex w-full bg-[#e5fcf4] rounded-xl">
            <img
              src={item.img}
              alt=""
              className="transition-transform duration-300 ease-in-out transform hover:scale-115"
            />
          </div>
          <div className="flex flex-col gap-4 py-3">
            <h2 className="text-poppins text-gray-800 text-xl font-semibold">
              {item.name}
            </h2>
            <div className="flex items-start gap-2">
              <img
                src={item.nutriScore}
                alt=""
                className="w-[100px] object-contain"
              />
              <img src={item.nova} alt="" className="w-[30px] object-contain" />
            </div>
          </div>
        </div>
      ))}
      {/* <div className="flex flex-col lg:w-1/4 ">
        <div className="flex w-full bg-[#e5fcf4] rounded-xl">
          <img src={KurkureImg} alt="" className="" />
        </div>
        <div className="flex flex-col gap-4 py-3">
          <h2 className="text-poppins text-gray-800 text-xl font-semibold">
            Kurkure Masala Munch
          </h2>
          <div className="flex items-start gap-2">
            <img
              src={kurkureNutriscore}
              alt=""
              className="w-[100px] object-contain"
            />
            <img src={KurkureNova} alt="" className="w-[30px] object-contain" />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
