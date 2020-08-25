import React from "react";
import "./Delivery.scss";
import "../App.scss";
import Countdown from "./new-delivery/Countdown";

const Delivery = () => {
  return (
    <div className="Delivery">
    	<h1>New delivery</h1>
    	<Countdown />
    </div>
  );
};

export default Delivery;
