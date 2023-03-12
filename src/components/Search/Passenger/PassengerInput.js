import React, { useRef, useEffect, useState } from "react";
import usePassengerStyles from "./PassengerStyles";

import PassengerCounter from "./PassengerCounter";

const PassengerInput = ({ placeholderTitle, children }) => {
  const classes = usePassengerStyles();
  const fromComp = useRef(null);
  const [passenger, setPassenger] = useState({
    adult:1,
    child:0,
    baby:0,
    student:0
  });

  const fromSearch = (e) => {
    fromComp.current.classList.add("open");
  };

  useOutsideAlerter(fromComp);

  return (
    <div onClick={() => fromSearch()} className={`${classes.inputWidth} open`}>
      <label for=''>{placeholderTitle}</label>
      <div className={classes.inputWrapperBg}>
        {children}
        <div className={classes.passengerText}>{
          passenger.adult + passenger.baby + passenger.child + passenger.student
        } Yolcular</div>
        <div className={classes.passengerPackage}>ECO</div>
      </div>
      <div className={classes.passengerOption} ref={fromComp}>
        <div className={classes.passengerOptionTitle}>
          Kabin ve Yolcu Seçimi
        </div>
        <div className={classes.passengerFlightTypeWrapper}>
          <label for='' className={`${classes.passengerFlightType} eco`}>
            <input type='radio' name='flightType' checked />
            Economy Class
          </label>
          <label for='' className={`${classes.passengerFlightType} bussiness`}>
            <input type='radio' name='flightType' />
            Business Class
          </label>
        </div>
        <PassengerCounter 
          title='Yetişkin' 
          info='12 +' 
          passengerType={"adult"} 
          passenger = {passenger} 
          setPassenger={setPassenger} 
        />
        <PassengerCounter 
          title='Çocuk' 
          info='2 - 11'
          passengerType={"child"} 
          passenger = {passenger} 
          setPassenger={setPassenger} 
        />
        <PassengerCounter 
          title='Bebek' 
          info='2 yaş altı'
          passengerType={"baby"} 
          passenger={passenger} 
          setPassenger={setPassenger} 
        />
        <PassengerCounter 
          title='Öğrenci' 
          info='12 - 34'
          passengerType={"student"} 
          passenger={passenger} 
          setPassenger={setPassenger} 
        />
      </div>
    </div>
  );
};

const useOutsideAlerter = (ref) => {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        ref.current.classList.remove("open");
        //setCalendarStatus && setCalendarStatus(false)
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};

export default PassengerInput;
