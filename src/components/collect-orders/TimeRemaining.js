import React, { useEffect, useState } from "react";
import OrderData from "./OrderData";
import StoreDetails from "./StoreDetails";
import "../Order.scss";

const TimeRemaining = (props:any) => {
  const {initialMinute = 15,initialSeconds = 0,perc = 0} = props;
  const [ minutes, setMinutes ] = useState(initialMinute);
  const [seconds, setSeconds ] =  useState(initialSeconds);
  const [percentage, setPercentage ] =  useState(perc);
  useEffect(()=>{
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval)
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      } 
      const percentage = (minutes * 100) / initialMinute;
      setPercentage(percentage);
    }, 1000)
    return ()=> {
      clearInterval(myInterval);
    };
  });
  const mystyle = {
    width: percentage+`%`
  };
  return (
    <>
      <div className="Remaining-Container">
        <div className="Time">
          { minutes === 0 && seconds === 0
            ? <h1 className="Time-Remaining">0:00</h1>
            : <h1 className="Time-Remaining"> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
          }
          <span className="Minutes-Remaining">Minutes Remaining</span>
          <div className="Progress-border">
            <div className="Progress-current" style={mystyle}></div>
          </div>
        </div>
      </div>
      <div className="Order-Container">
        <OrderData />
      </div>
      <StoreDetails />
    </>
  );
}
export default TimeRemaining;