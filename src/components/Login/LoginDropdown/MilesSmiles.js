import React from 'react'
import SelecBox from '../Selectbox/SelecBox';
import InputElement from '../InputElement/InputElement';
import LoginButton from '../Button/LoginButton';

const OptionsList=[
    {id:1, text:"Üyelik Numarası"},
    {id:2, text:"E-posta adresi"},
    {id:3, text:"TC kimlik numarası"},
    {id:4, text:"Cep telefonu"},
  ]

const MilesSmiles = () => {
  return (
    <div>
        <SelecBox optionsList={OptionsList} name="loginPreference"/>
        <InputElement type={"text"} name={"membershipNumber"} placeholder={"Üyelik Numarası"}/>
        <InputElement type={"password"} name={"membershipNumber"} placeholder={"Şifre"}/>
        <LoginButton buttonType={"button"} buttonLabel={"Giriş Yap"}/>
    </div>
  )
}

export default MilesSmiles