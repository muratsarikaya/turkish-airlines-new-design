import { useState } from "react";
import { useTabFromElStyles } from "./TabStyles";

import InputPort from "./InputPort";
import Calendar from "react-calendar";
import SearchButton from "./SearchButton";
import PassengerInput from "./Passenger/PassengerInput";

import "react-calendar/dist/Calendar.css";
import "./customCalenderStyle.css";
import Datepicker from "./Datepicker";
import {
  FaPlaneDeparture,
  FaPlaneArrival
} from "react-icons/fa";

const FlightContent = () => {
  const classesForm = useTabFromElStyles();
  const [dateValue, setDateValue] = useState({
    day: "",
    month: "",
    dayString: "",
  });

  const [dateToValue, setDateToValue] = useState({
    day: "",
    month: "",
    dayString: "",
  });
  const [inputValue, setInputValue] = useState({
    from: "",
    to: "",
    fromDate: "",
    toDate: "",
    passenger: "",
  });
  const [showCalenderFrom, setShowCalendarFrom] = useState(false);
  const [showCalenderTo, setShowCalendarTo] = useState(false);

  const onChangeFrom = (value) => {
    const dayNumber = value.toLocaleString("default", { day: "numeric" });
    const month = value.toLocaleString("default", { month: "long" });
    const monthNumeric = value.toLocaleString("default", { month: "numeric" });
    const weekday = value.toLocaleString("default", { weekday: "long" });
    const year = value.toLocaleString("default", { year: "numeric" });
    setShowCalendarFrom(false);
    setInputValue({
      ...inputValue,
      fromDate: `${dayNumber}/${monthNumeric}/${year}`,
    });
    setDateValue({
      ...dateValue,
      day: dayNumber,
      month: month,
      dayString: weekday,
    });
    //setValue({...value, from: `${dayNumber} ${month} ${weekday}` })
  };
  const onChangeTo = (value) => {
    const dayNumber = value.toLocaleString("default", { day: "numeric" });
    const month = value.toLocaleString("default", { month: "long" });
    const monthNumeric = value.toLocaleString("default", { month: "numeric" });
    const weekday = value.toLocaleString("default", { weekday: "long" });
    const year = value.toLocaleString("default", { year: "numeric" });
    setShowCalendarTo(false);
    setInputValue({
      ...inputValue,
      toDate: `${dayNumber}/${monthNumeric}/${year}`,
    });
    setDateToValue({
      ...dateToValue,
      day: dayNumber,
      month: month,
      dayString: weekday,
    });
  };

  return (
    <>
      <div style={{ marginBottom: "40px", display: "flex" }}>
        <label
          for='oneDirection'
          className={classesForm.tripTypeLabel}
          style={{ marginRight: "15px" }}
        >
          <input
            className={classesForm.tripTypeStyleRadio}
            id='oneDirection'
            type='radio'
            name='tripType'
            checked
          />{" "}
          <span>Tek Yön</span>
        </label>
        <label for='doubleDirection' className={classesForm.tripTypeLabel}>
          <input
            className={classesForm.tripTypeStyleRadio}
            id='doubleDirection'
            type='radio'
            name='tripType'
          />
          <span>Gidiş Dönüş</span>
        </label>
      </div>
      <div style={{ display: "flex" }}>
        <InputPort icon={<FaPlaneDeparture/>} placeholderTitle='Nereden' isChecked='checked' />
        <InputPort icon={<FaPlaneArrival/>} placeholderTitle='Nereye' />
        <Datepicker
          placeholderTitle='Gidiş Tarihi'
          setCalendarStatus={setShowCalendarFrom}
          value={inputValue.fromDate}
        >
          <div className={classesForm.dateStringWrapper}>
            <div>
              <span>{dateValue.day}</span>
              <span> {dateValue.month}</span>
            </div>
            <div>
              <span className={classesForm.dateDay}>{dateValue.dayString}</span>
            </div>
          </div>
          <Calendar
            showDoubleView={true}
            selectRange={false}
            className={showCalenderFrom !== false ? "" : "hide"}
            onChange={onChangeFrom}
            //value={value.from}
            minDate={new Date()}
            //onClick={(value) => alert('New date is: ', value)}
          />
        </Datepicker>
        <Datepicker
          placeholderTitle='Dönüş Tarihi'
          setCalendarStatus={setShowCalendarTo}
          value={inputValue.toDate}
        >
          <div className={classesForm.dateStringWrapper}>
            <div>
              <span>{dateToValue.day}</span>
              <span> {dateToValue.month}</span>
            </div>
            <div>
              <span className={classesForm.dateDay}>
                {dateToValue.dayString}
              </span>
            </div>
          </div>
          <Calendar
            showDoubleView={true}
            selectRange={false}
            className={showCalenderTo !== false ? "" : "hide"}
            onChange={onChangeTo}
            minDate={new Date()}
            // value={value.to}
          />
        </Datepicker>
        <PassengerInput placeholderTitle='Yolcular' />
        <SearchButton />
      </div>
      <div></div>
    </>
  );
};

export default FlightContent;
