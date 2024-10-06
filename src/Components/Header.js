import React from "react";
import { Link } from "react-router-dom";
import HeaderMenu from "./HeaderMenu";
import Logo from "../images/logo.png";

const Header = () => {
  return (
    <div className="w-full flex justify-center items-center sticky top-0 left-0 bg-white z-10 shadow-md shadow-gray-300 z-50">
      <div className="w-[90%] max-w-[1363px] max-w-screen-2xl flex flex-row flex-nowrap justify-between items-center">
        <div dir="ltr">
          <Link to="/" className="block w-28 sm:w-36">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <HeaderMenu dir="rtl" />
      </div>
    </div>
  );
};

export default Header;
