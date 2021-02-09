import React from "react";
import "./style.css";
import logo from "../../assets/images/logo.png";
import logoName from "../../assets/images/logoName.png";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <div className="nav-bar-container">
        <div className="images">
          <img src={logo} alt="logo" />
          <img src={logoName} alt="logoName" />
        </div>
        <nav>
          <a href="">Why Vyorius?</a>
          <a href="">Solution</a>
          <a href="">Product</a>
          <a href="">Use Cases</a>
          <a href="">Team</a>
          <a href="">Partners</a>
          <a href="">Contact Us</a>
        </nav>
      </div>
      <div className="nav-bar-button">
        <Button name="Launch Vyorius  >" />
      </div>
    </header>
  );
};
export default Header;
