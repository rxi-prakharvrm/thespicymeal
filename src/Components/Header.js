import React from "react";
import { Link } from "react-router-dom";
import HeaderMenu from "./HeaderMenu";
import Logo from "../images/logo.png";

const Header = () => {
  return (
    <div className="w-full flex justify-center items-center shadow-md shadow-gray-200">
      <div className="w-full px-36 max-w-screen-2xl flex flex-row flex-nowrap justify-between items-center">
        <div dir="ltr">
          <Link to="/" className="block w-36">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <HeaderMenu dir="rtl" />
      </div>
    </div>
  );
};

export default Header;
