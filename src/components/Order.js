import React from "react";
// import IconCall from "../assets/IconCall.png";
// import IconDirections from "../assets/IconDirections.png";
// import Shop from "../assets/shop.png";
import Header from "./collect-orders/Header";
import TimeRemaining from "./collect-orders/TimeRemaining";

const Order = () => {
  return (
    <div className="Order">
      <Header />
      <TimeRemaining />
    </div>
  );
};

export default Order;
