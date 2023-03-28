import React from 'react'
import InputElement from '../InputElement/InputElement';
import LoginButton from '../Button/LoginButton';

const MilesSmiles = () => {
  return (
    <div>
        <InputElement type={"text"} name={"membershipNumber"} placeholder={"E-Posta Adresi"}/>
        <InputElement type={"password"} name={"membershipNumber"} placeholder={"Şifre"}/>
        <LoginButton buttonType={"button"} buttonLabel={"Giriş Yap"}/>
    </div>
  )
}

export default MilesSmiles