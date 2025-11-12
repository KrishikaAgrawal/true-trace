import { useState } from "react";
import heroImage from "../../assets/Home/heroImage.png";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    location: "",
    gender: "",
    dob: "",
    allergens: "",
    diseases: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userDetails", JSON.stringify(formData));
    alert("Data Saved Successfully!");
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Hero"
        className="w-full h-[200px] lg:h-[500px] -z-10 object-cover fixed top-0"
      />

      {/* Glassmorphism Card */}
      <form
        onSubmit={handleSubmit}
        className="backdrop-blur-lg bg-white/10 border border-white/25 shadow-xl rounded-2xl p-6 w-11/12 max-w-lg mt-48 lg:mt-0"
      >
        <h2 className="text-xl font-bold text-white text-center mb-4">Register</h2>

        {/* Grid Inputs */}
        <div className="grid grid-cols-1 gap-5 text-white">
          {[
            { label: "Username", name: "username", type: "text" },
            { label: "Email", name: "email", type: "email" },
            { label: "Location", name: "location", type: "text" },
            { label: "Gender", name: "gender", type: "text" },
            { label: "Date of Birth", name: "dob", type: "date" },
            { label: "Allergens", name: "allergens", type: "text" },
            { label: "Diseases", name: "diseases", type: "text" },
          ].map((input) => (
            <div className="relative" key={input.name}>
              <input
                type={input.type}
                name={input.name}
                value={formData[input.name]}
                onChange={handleChange}
                required
                className="peer w-full bg-transparent border-b-2 border-white focus:border-blue-300 outline-none py-2"
              />
              <label
                className="absolute left-0 top-2 text-white/70 text-sm transition-all peer-focus:-top-4 peer-valid:-top-4 peer-focus:text-xs peer-valid:text-xs"
              >
                {input.label}
              </label>
            </div>
          ))}
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg shadow-md"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default Login;
