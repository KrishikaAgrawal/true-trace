import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import heroImage from "../../assets/Home/heroImage.png";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
    // auth context
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    location: "",
    gender: "",
    dob: "",
    allergens: "",
    diseases: "",
  });

  const navigate = useNavigate();


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);

    toast.success("Registered successfully!", {
      position: "top-right",
      autoClose: 1500,
      theme: "colored",
      onClose: () => navigate("/"), 
    });
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Hero Image */}
      <img
        src={heroImage}
        alt="Hero"
        className="w-full h-screen -z-10 object-cover fixed"
      />

      {/* Toast Container */}
      <ToastContainer />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col lg:gap-4 font-poppins items-center justify-center text-center text-white bg-emerald-900/50 px-6">
        <form
          onSubmit={handleSubmit}
          className="backdrop-blur-sm bg-emerald-900/40 border border-white/25 shadow-xl rounded-2xl p-6 w-full max-w-lg"
        >
          <h2 className="text-xl font-semibold text-white text-center mb-6">
            Register Yourself
          </h2>

          {/* Grid Inputs */}
          <div className="grid grid-cols-1 gap-6 text-white">
            {[
              { label: "Username", name: "username", type: "text" },
              { label: "Email", name: "email", type: "text" },
              { label: "Location", name: "location", type: "text" },
              { label: "Gender", name: "gender", type: "text" },
              { label: "Date of Birth", name: "dob", type: "text" },
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
                  className="peer w-full pl-1 bg-transparent border-b border-white focus:border-blue-300 outline-none "
                />
                <label className="absolute left-0 top-1 text-white/70 text-sm transition-all peer-focus:-top-4 peer-valid:-top-3 peer-focus:text-xs peer-valid:text-xs">
                  {input.label}
                </label>
              </div>
            ))}
          </div>

          <button
            type="submit"
            className="mt-6 px-5 bg-emerald-900 hover:bg-emerald-950 text-white py-2 rounded-lg shadow-md"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
