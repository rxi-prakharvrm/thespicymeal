import React from "react";
import { Link } from "react-router-dom";
import HeaderMenu from "./HeaderMenu";

import Logo from "../images/logo.png";

const Header = () => {
  return (
    <div className="header-ctr">
      <div className="header-left-ctr">
        <Link to="/" className="logo">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <HeaderMenu />
    </div>
  );
};

export default Header;
