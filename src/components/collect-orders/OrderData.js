import React from 'react';
import MenuData from "../../data/MenuData";
import Tick from "../../assets/accept-icon.png";
import "../Order.scss";

const OrderData = () => {
	return (
		<div>
        	{
              	MenuData.Order.map((order) => {
                    return (
                    	<>
				            <div className="Order-Number">
								<div className="BoxChecked"><img className="Tick" src={Tick} alt="TickIcon"/></div> 
								<h1 className="Order-Title">Collect order #{order.OrderID}</h1>
							</div>
							<div className="Order-Instructions">
								<div className="SubTitle">Pick up instructions</div>
								<div className="Title">Go to counter 1 on the left where the sign for 'all pickups' is</div>
							</div>
							<ul className="Menus">
								{
		                            order.Menus.map((orderDetail) => {
		                              	return (
		                                  	<li key={orderDetail.ID}>
		                                  		{orderDetail.Meal} <br />
		                                  		<span>{orderDetail.Sides}</span>
		                                  	</li>
		                              	);
		                            })
	                          	}
							</ul>
						</>
					);
				})
			}
		</div>
	);
}; 
export default OrderData;