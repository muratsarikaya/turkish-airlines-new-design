//import { useState } from "react";
//import InputPort from "./InputPort";
import { useTabFromElStyles } from "./TabStyles";
import "react-calendar/dist/Calendar.css";
//import SearchButton from "./SearchButton";
import SelecBox from "../Login/Selectbox/SelecBox";

/* const widthClass = {
  maxWidth: "50%",
  width: "50%",
}; */
const OptionsList=[
  {id:1, text:"Üyelik Numarası"},
  {id:2, text:"E-posta adresi"},
  {id:3, text:"TC kimlik numarası"},
  {id:4, text:"Cep telefonu"},
]
const CheckinContent = () => {
  //const classesForm = useTabFromElStyles();
  return (
    <>
      <div style={{ display: "flex" }}>
        <SelecBox optionsList={OptionsList} name="loginPreference"/>
        {/* <InputPort
          placeholderTitle='Bilet yada Rezervasyon Kodu (PNR)'
          width50={widthClass}
        />
        <InputPort placeholderTitle='Yolcunun Soyadı' width50={widthClass} />
        <SearchButton /> */}
      </div>
      <div></div>
    </>
  );
};

export default CheckinContent;
