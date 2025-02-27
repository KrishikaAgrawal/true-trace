import { NavLink } from "react-router-dom";
import { BiBell, BiHeart } from "react-icons/bi";
import { LuSearch } from "react-icons/lu";
import { RiDiscountPercentFill } from "react-icons/ri";
// import { useSearch } from "../context/SearchContext";
import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

import avatar from "../assets/header/avatar.png";
const Header = () => {
  const { searchQuery, setSearchQuery } = useContext(SearchContext);
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-xl">
      {/* logo */}
      <div className="flex justify-between items-center w-full bg-white py-3  px-8">
        <NavLink to="/">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            {/* <p className="bg-[#003d29] text-white w-10 h-10 flex justify-center items-center rounded-full text-xl lg:text-3xl">
            T
          </p> */}
            <p className="text-xl lg:text-3xl font-bold text-[#003d29]">
              TrueTrace.
            </p>
          </div>
        </NavLink>
        {/* search */}
        <div className="flex items-center p-3 py-2 border border-[#EFEEEE] bg-[#FCFCFC] rounded-2xl w-1/2">
          <label htmlFor="designer" className="flex items-center">
            <LuSearch className="lg:mr-4 mr-2 text-[#003d29]" />
          </label>
          <input
            type="text"
            id="designer"
            placeholder="Search"
            value={searchQuery} // Bind input value
            onChange={(e) => setSearchQuery(e.target.value)} // Update search query
            className="focus:outline-none w-full font-semibold bg-[#FCFCFC]"
          />
        </div>

        {/* User Button Stack */}
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
            {/* <NavLink to="/SpecialOffer"> */}
            <RiDiscountPercentFill size={20} />
            {/* </NavLink> */}
          </div>

          {/* Profile */}
          <div className="flex gap-4 items-center ml-4 ">
            <div className="w-9 h-9 rounded-full overflow-hidden">
              {/* <NavLink to="/Profile"> */}
              <img alt="profile" src={avatar} />
              {/* </NavLink> */}
            </div>
            <div className="hidden lg:flex flex-col ">
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
