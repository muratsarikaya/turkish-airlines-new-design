import React from "react";
import useHeaderStyles from "./HeaderStyles";
const MainNavigation = (props) => {
  const classes = useHeaderStyles();
  return (
    <nav>
      <a className={classes.navLink} href=''>
        Planla & Uç
      </a>
      <a className={classes.navLink} href=''>
        Seyahat Deneyimi
      </a>
      <a className={classes.navLink} href=''>
        Kefşet
      </a>
      <a className={classes.navLink} href=''>
        Yardım
      </a>
      <a className={classes.navLink} href=''>
        Üye Ol
      </a>
      <a className={classes.navLink} href=''>
        Giriş Yap
      </a>
    </nav>
  );
};

export default MainNavigation;
