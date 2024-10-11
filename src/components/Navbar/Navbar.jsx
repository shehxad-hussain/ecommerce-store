import React from "react";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div>
      {/* Upper Navbar */}
      <div className=" bg-primary/40 py-3 sm:py-0">
        <div className=" container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo"  className="w-10"/> Shopsh
            </a>
          </div>
          {/* search bar for order button */}
          <div>
            <div className="group">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800  "
              />
            </div>
          </div>
        </div>
      </div>
      {/* Lower Navbar */}
      <div></div>
    </div>
  );
};

export default Navbar;
