import { useState } from "react";
import InputPort from "./InputPort";
import { useTabFromElStyles } from "./TabStyles";
import "react-calendar/dist/Calendar.css";
import SearchButton from "./SearchButton";

const widthClass = {
  maxWidth: "50%",
  width: "50%",
};

const CheckinContent = () => {
  const classesForm = useTabFromElStyles();
  return (
    <>
      <div style={{ display: "flex" }}>
        <InputPort
          placeholderTitle='Bilet yada Rezervasyon Kodu (PNR)'
          width50={widthClass}
        />
        <InputPort placeholderTitle='Yolcunun Soyadı' width50={widthClass} />
        <SearchButton />
      </div>
      <div></div>
    </>
  );
};

export default CheckinContent;
