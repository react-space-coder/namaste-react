import React, { useEffect, useState } from "react";
import { LOGO_LINK } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [buttoName, setButtonName] = useState("Login");
  const handleButton = () => {
    buttoName === "Login" ? setButtonName("LogOut") : setButtonName("Login");
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_LINK} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            {" "}
            <Link to="/">Home</Link>{" "}
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>Cart</li>
          <button className="login-btn" onClick={handleButton}>
            {buttoName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
