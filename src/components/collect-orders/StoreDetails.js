import React from 'react';
import { Link } from "react-router-dom";
import MenuData from "../../data/MenuData";
import Direction from "../../assets/IconDirections.png";
import Call from "../../assets/IconCall.png";
import "../Order.scss";

const StoreDetails = () => {
	let clickHoldTimer = null;

    const handleMouseDown = () => {
        clickHoldTimer = setTimeout(() => {
            //Action to be performed after holding down mouse
        }, 1000); //Change 1000 to number of milliseconds required for mouse hold
    }

    const handleMouseUp = () => {
        clearTimeout(clickHoldTimer);
    }
	return (
		<>
			<div className="Store-Container">
	        	{
	              	MenuData.Order.map((order) => {
	                    return (
	                    	<>
								<h1 className="Store-Name">{order.StoreName} {order.StoreLocation}</h1>
								<div className="Store-Address">{order.StoreAddress}</div>
								<div className="Store-CalltoAction">
									<div className="Direction"><Link to="/" className="btn transparent-red rounded"><img className="icon" src={Direction} alt="DirectionIcon"/>  Directions</Link></div>
									<div className="Call" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}><Link to="/" className="btn transparent-red rounded"><img className="icon" src={Call} alt="CallIcon"/>  Call</Link></div>
								</div>
							</>
						);
					})
				}
			</div>

			<div className="Store-Ready">
				<Link to="/" className="btn fill-red rounded">Ready To Deliver</Link>
			</div>
		</>
	);
};
export default StoreDetails;