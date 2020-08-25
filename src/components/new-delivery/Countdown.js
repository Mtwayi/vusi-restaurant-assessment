import React from 'react';
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import CountdownButtons from "./CountdownButtons";
import "../Delivery.scss";  

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
  
    document.getElementById("decline-accept-container").classList.add("disabled");
    return <div className="timer">Too late...</div>
  }

  return (
    <div className="timer">
      <div className="text"></div>
      <div className="value">{remainingTime}</div>
      <div className="text">To accept</div>
    </div>
  );
};

const Countdown = ({ remainingTime }) => {
  return (
  <>
    <div className="timer-container">
      <CountdownCircleTimer
          isPlaying
          duration={30}
          colors={[["#00c853", 0.40], ["#ffac00", 0.60], ["#ff0000"]]}
          onComplete={() => [false, 1000]}
        >
        {renderTime}
      </CountdownCircleTimer>
    </div>
    <CountdownButtons />
  </>
  );
};

export default Countdown;
