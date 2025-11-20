import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { LuSearch } from "react-icons/lu";
import { AiOutlineBarcode } from "react-icons/ai";
import { SearchContext } from "../context/SearchContext";
// import { useAuth } from "../context/AuthContext";
// import avatar from "../assets/header/avatar.png";
import BarcodeScanner from "./BarcodeScanner";
import SmartSuggestionModal from "./SmartSuggestionModal";

const Header = () => {
  const { searchQuery, setSearchQuery } = useContext(SearchContext);
  const [isScanning, setIsScanning] = useState(false);

  // get user from context (auto re-renders when updated)
  // const { user } = useAuth();

  // smart suggestion modal state
  const [showModal, setShowModal] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-xl">
      <div className="flex justify-between items-center w-full bg-white py-3 md:px-8 px-5">
        {/* Logo */}
        <NavLink to="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <p className="text-xl lg:text-3xl font-bold text-[#003d29]">
              TrueTrace.
            </p>
          </div>
        </NavLink>

        {/* Search Bar */}
        <div className="flex items-center p-3 py-2 border border-[#EFEEEE] bg-[#FCFCFC] rounded-2xl ml-2 md:ml-0 md:w-1/2 relative">
          <label htmlFor="search" className="flex items-center">
            <LuSearch className="lg:mr-4 mr-2 text-[#003d29]" />
          </label>
          <input
            type="text"
            id="search"
            placeholder="Search by name or barcode"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="focus:outline-none w-full font-semibold bg-[#FCFCFC] text-xs md:text-[16px] pr-8"
          />

          {/* Barcode Scanner Icon */}
          <button
            onClick={() => setIsScanning(true)}
            className="absolute right-4 text-[#003d29] hover:text-[#007B55] transition-all"
          >
            <AiOutlineBarcode size={22} />
          </button>
        </div>

        {/* Barcode Scanner */}
        {isScanning && (
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-white p-4 shadow-lg rounded-lg z-50">
            <BarcodeScanner
              onDetected={(code) => {
                setSearchQuery(code);
                setIsScanning(false);
              }}
            />
            <button
              onClick={() => setIsScanning(false)}
              className="mt-2 text-sm text-red-600 hover:underline"
            >
              Cancel
            </button>
          </div>
        )}

        <div className="flex items-center gap-4">
          {/* Smart Suggestion */}
          <button
            onClick={() => setShowModal(true)}
            className=" bg-emerald-100 text-emerald-800 px-2 py-2 hover:shadow-lg  rounded-lg cursor-pointer active:scale-90 transition-all text-sm font-semibold"
          >
            Smart Suggestion
          </button>
          {/* User Section */}
          {/* {user ? (
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full overflow-hidden border border-[#003d29]">
                <img
                  alt="profile"
                  src={avatar}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col text-left">
                <p className="text-sm font-semibold text-nowrap">
                  {user.username}
                </p>
                <p className="text-xs font-semibold text-[#A0A2A2] text-nowrap">
                  {user.location || "Unknown"}
                </p>
              </div>
            </div>
          ) : (
            <NavLink to="/login">
              <button className="bg-[#003d29] text-gray-6  text-white px-4 py-2 rounded-full hover:bg-[#007B55] cursor-pointer active:scale-90 transition-all text-sm font-semibold">
                Login
              </button>
            </NavLink>
          )} */}
        </div>

        {/* Smart Suggestion Modal */}
        <SmartSuggestionModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
        />
      </div>
    </nav>
  );
};

export default Header;
