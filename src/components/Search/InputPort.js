import React, { useRef, useEffect, useState } from "react";
import useTabStyles from "./TabStyles";
import getTripCity from "../../service/getTripCity";


const InputPort = ({
  placeholderTitle,
  setCalendarStatus,
  children,
  width50,
  date,
  value,
  icon
}) => {

  const classes = useTabStyles();
  const fromComp = useRef(null);
  const inputValueRef = useRef(null);
  const searchList = useRef(null);
  const airportName = useRef(null);
  const [port, setPort] = useState([]);

  const fromSearch = (e) => {
    fromComp.current.classList.add("open");
    setCalendarStatus && setCalendarStatus(true);
    inputValueRef.current.focus();
  };

  const inputOnChange = async (e) => {
    const resultPort = await getTripCity(e.target.value);
    setPort(resultPort);
  };

  const selectEvent = (e)=>{
    alert();
    /* console.log(e.target)
    const airport = airportName.current.value; */
    //const airportText = e.target
  }

  useOutsideAlerter(fromComp, setCalendarStatus, inputValueRef, searchList);


  return (
    <div style={{position: "relative"}}>
      <div
        onClick={() => fromSearch()}
        ref={fromComp}
        className={`${classes.inputWidth}`}
        style={width50}
      >
        <label for=''>{placeholderTitle}</label>
        <div className={classes.inputWrapperBg}>
          <input
            onChange={(e) => inputOnChange(e)}
            className={classes.cityName}
            type='text'
            name=''
            value={value}
            ref={inputValueRef}
          />
          {children}
          <div className={classes.airportName} ref={airportName}>
            Airport
          </div>
        </div>
      </div>
      <div ref={searchList} className={`${classes.searchListWrapper} ${port.Countries ? 'show' : "hide"}`}>
        {port.Countries &&
          port.Countries.map((country) =>
            country.Ports.map((port, index) => (
              <div key={index} onClick={selectEvent} className={classes.searchListItem} data-value={`${port.Airport.CityName} Havalimanı`}>{icon} {port.PortName}</div>
            ))
          )}
      </div>
    </div>
  );
};

const useOutsideAlerter = (ref, setCalendarStatus, inputValueRef, searchList) => {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        inputValueRef.current.value.length < 1 &&
        ref.current.classList.remove("open");
        setCalendarStatus && setCalendarStatus(false);
        searchList.current.classList.remove("show")
        searchList.current.classList.add("hide")
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

export default InputPort;
