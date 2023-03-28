import React from "react";
import useHeaderStyles from "./HeaderStyles";
import MenuItem from "./MenuItem";
import LoginDropdown from "../Login/LoginDropdown/LoginDropdown";

import MenulistData from "./MenuListData";


const MainNavigation = (props) => {
  const classes = useHeaderStyles();
  return (
    <nav style={{ display: "flex", alignItems: "center" }}>
      {/* <MenuItem MainMenu={OnlyMenu} /> */}
      {MenulistData.map((menu) => (
        <MenuItem MainMenu={menu} />
      ))}
      <a className={classes.navLink} href=''>
        Üye Ol
      </a>
      <LoginDropdown value={"Giriş Yap"}/>
    </nav>
  );
};

export default MainNavigation;
