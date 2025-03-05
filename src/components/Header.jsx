 import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { BiBell, BiHeart } from "react-icons/bi";
import { LuSearch } from "react-icons/lu";
import { RiDiscountPercentFill } from "react-icons/ri";
import { AiOutlineBarcode } from "react-icons/ai"; // Barcode icon
import { SearchContext } from "../context/SearchContext";

import avatar from "../assets/header/avatar.png";
import BarcodeScanner from "./BarcodeScanner";

const Header = () => {
  const { searchQuery, setSearchQuery } = useContext(SearchContext);
  const [isScanning, setIsScanning] = useState(false); // Control scanner visibility

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-xl">
      {/* logo */}
      <div className="flex justify-between items-center w-full bg-white py-3 md:px-8 px-5">
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
            className="absolute right-4 text-[#003d29] hover:text-[#007B55] transition-all "
          >
            <AiOutlineBarcode size={22} />
          </button>
        </div>

        {/* Barcode Scanner (Visible only when activated) */}
        {isScanning && (
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-white p-4 shadow-lg rounded-lg z-50">
            <BarcodeScanner
              onDetected={(code) => {
                setSearchQuery(code); // Set detected barcode as search query
                setIsScanning(false); // Close scanner after detection
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

        {/* User Icons */}
        <div className="gap-4 hidden lg:flex">
          <NavLink to="/Wishlist">
            <div className="bg-[#c6fcea] text-[#003d29]  w-9 h-9 flex justify-center items-center rounded-full hover:bg-[#003d29] hover:text-white cursor-pointer active:scale-90 transition-all">
              <BiHeart size={20} />
            </div>
          </NavLink>
          <NavLink to="/Notification">
            <div className="bg-[#c6fcea] text-[#003d29] w-9 h-9 flex justify-center items-center rounded-full hover:bg-[#003d29] hover:text-white cursor-pointer active:scale-90 transition-all">
              <BiBell size={20} />
            </div>
          </NavLink>
          <div className="bg-[#c6fcea] text-[#003d29] w-9 h-9 flex justify-center items-center rounded-full hover:bg-[#003d29] hover:text-white cursor-pointer active:scale-90 transition-all">
            <RiDiscountPercentFill size={20} />
          </div>

          {/* Profile */}
          <div className="flex gap-4 items-center ml-4">
            <div className="w-9 h-9 rounded-full overflow-hidden">
              <img alt="profile" src={avatar} />
            </div>
            <div className="hidden lg:flex flex-col">
              <p className="text-sm font-semibold text-nowrap">User</p>
              <p className="text-xs font-semibold text-[#A0A2A2] text-nowrap">
                New Delhi, Delhi
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
