import heroImage from "../../assets/Home/heroImage.png";

const Hero = () => {
  return (
    <div className="relative w-full h-[200px] lg:h-[500px] overflow-hidden">
      {/* Hero Image with Blur */}
      <img src={heroImage} alt="Hero" className="w-full h-full object-cover" />

      {/* Dark Overlay for Better Contrast */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}

      {/* Content (Centered Over the Image) */}
      <div className="absolute inset-0 flex flex-col lg:gap-4 font-poppins backdrop-blur-xs items-center justify-center text-center text-white bg-emerald-900/50 px-6">
        <h1 className="text-xl font-bold lg:text-5xl lg:w-2/3">
          {" "}
          Experience a New Level of Wellness With Our Website
        </h1>
        <p className="mt-2 text-sm font-light lg:text-lg lg:w-1/2">
          Your health, your way! TrueTrace empowers you with real-time product
          health insights, ensuring a safer and healthier lifestyle.
        </p>
      </div>
    </div>
  );
};

export default Hero;
