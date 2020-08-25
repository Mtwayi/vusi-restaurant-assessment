import React from "react";
import Shop from "../../assets/shop.png";
import "../Order.scss";

const Header = () => {
  return (
      <div className="Header-Container">
        <div className="Header-Logo">
          <img className="Logo" src={Shop} alt="logo" /> 
          <span className="Order-Header">Collect the order</span>
        </div>
        <div className="Header-Links">
          <a
            className="Help-link"
            href="/"
            rel="noopener noreferrer"
          >
            Help
          </a>
        </div>
      </div>
  );
};

export default Header;
