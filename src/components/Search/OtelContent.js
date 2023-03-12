import { useState } from "react";
import InputPort from "./InputPort";
import { useTabFromElStyles } from "./TabStyles";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import SearchButton from "./SearchButton";

const FlightContent = () => {
  const classesForm = useTabFromElStyles();
  const [value, onChange] = useState(new Date());
  const [showCalenderFrom, setShowCalendarFrom] = useState(false);
  const [showCalenderTo, setShowCalendarTo] = useState(false);

  return (
    <>
      <div style={{ display: "flex" }}>
        <InputPort placeholderTitle='Nereden' isChecked='checked' />
        <InputPort placeholderTitle='Nereye' />
        <InputPort
          placeholderTitle='Gidiş Tarihi'
          setCalendarStatus={setShowCalendarFrom}
        >
          <Calendar
            selectRange={true}
            className={showCalenderFrom !== false ? "" : "hide"}
            onChange={onChange}
            value={value}
          />
        </InputPort>
        <InputPort
          placeholderTitle='Dönüş Tarihi'
          setCalendarStatus={setShowCalendarTo}
        >
          <Calendar
            selectRange={true}
            className={showCalenderTo !== false ? "" : "hide"}
            onChange={onChange}
            value={value}
          />
        </InputPort>
        <InputPort placeholderTitle='1 Yolcu' />
        <SearchButton />
      </div>
      <div></div>
    </>
  );
};

export default FlightContent;
