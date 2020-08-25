import React from "react";
import LongPress from "./LongPress";
import "../Delivery.scss";

const CountdownButtons = () => {
  const onLongPress = () => {
        console.log('longpress is triggered');
        window.location.href = "/order";
    };

    const onClick = () => {
        console.log('click is triggered')
    }

    const defaultOptions = {
        shouldPreventDefault: true,
        delay: 2000,
    };
    const longPressEvent = LongPress(onLongPress, onClick, defaultOptions);
  return (
    <div id="decline-accept-container" className="decline-accept-container">
      <div className="decline">
            <button className="round"></button>
        <h2>Decline</h2>
      </div>
      <div className="accept">
        <button className="round" {...longPressEvent}></button>
        <h2>Accept</h2>
      </div>
      <div className="description">Press and hold for a moment to accept</div>
    </div>
  );
};
export default CountdownButtons;
