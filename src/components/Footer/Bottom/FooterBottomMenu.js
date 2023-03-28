import React from "react";
//import PropTypes from "prop-types";
import useFooterBottomMenuStyles from "./FooterBottomMenuStyles";

const bottomMenu = [
  "Bilgi Toplumu Hizmetleri",
  "Erişilebilirlik",
  "Gizlilik ve Çerez Politikası",
  "Yasal Uyarı",
  "Yolcu Hakları",
  "Çerez Ayarlarını Değiştir",
  "Türk Hava Yolları A.O. Her hakkı saklıdır. © 1996 - 2023",
];

const FooterBottomMenu = (props) => {
  const classes = useFooterBottomMenuStyles();
  return (
    <div>
      <div >
        <ul className={classes.menuBottomWrapper}>
          {bottomMenu.map((item) => (
            <li className={classes.menuBottomItem}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

FooterBottomMenu.propTypes = {};

export default FooterBottomMenu;
