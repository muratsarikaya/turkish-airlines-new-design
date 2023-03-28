import React, { useRef, useEffect, useState } from "react";
import useTabStyles from "./TabStyles";

const Datepicker = ({
  placeholderTitle,
  setCalendarStatus,
  children,
  width50,
  date,
  value
}) => {
  const classes = useTabStyles();
  const fromComp = useRef(null);
  const inputValueRef = useRef(null);

  const fromSearch = (e) => {
    fromComp.current.classList.add("open");
    setCalendarStatus && setCalendarStatus(true);
  };

  useOutsideAlerter(fromComp, setCalendarStatus, inputValueRef);

  return (
    <div
      onClick={() => fromSearch()}
      ref={fromComp}
      className={`${classes.inputWidth}`}
      style={width50}
    >
      <label for=''>{placeholderTitle}</label>
      <div className={classes.inputWrapperBg}>
        <input className={classes.datepickerInput} 
          type='text' name=''
          value={value} ref={inputValueRef}/>
        {children}
      </div>
    </div>
  );
};

const useOutsideAlerter = (ref, setCalendarStatus, inputValueRef) => {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        inputValueRef.current.value.length < 1 && ref.current.classList.remove("open");
        setCalendarStatus && setCalendarStatus(false);
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

export default Datepicker;
