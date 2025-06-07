import React, { useContext, useState } from "react";
import { LOGO_LINK } from "../utils/constants";
import UserDetails from "../utils/UserContext";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [buttoName, setButtonName] = useState("Login");
  const handleButton = () => {
    buttoName === "Login" ? setButtonName("LogOut") : setButtonName("Login");
  };
const {loggedInUser}=useContext(UserDetails)
const cardItems=useSelector((store)=>store.cart.items)
  return (
    <div className="flex justify-around bg-pink-200 my-10">
      <div>
        <img className="logo" src={LOGO_LINK} height={100} width={100} />
      </div>
      <div>
        <ul className="flex justify-between items-center space-x-4 p-8 cursor-pointer underline">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="font-bold">
            <Link to='/cart'>Cart - {cardItems.length}</Link>
            </li>
          <li>
            <button className="login-btn ml-4 cursor-pointer underline" onClick={handleButton}>
              {buttoName}
            </button>
          </li>
          <label className="pl-4">{loggedInUser}</label>
        </ul>
      </div>
    </div>
  );
};
export default Header;
