import React from "react";
import PropTypes from "prop-types";
import useFooterMenuTabStyles from "./FooterMenuTabStyles";
import { menuList } from "./FooterMenuList";

const FooterMenuContext = ({ menuTitle }) => {
  const classes = useFooterMenuTabStyles();
  return (
    <div className={classes.menuWrapper}>
      <div className={classes.menuContextContainer}>
        <div className={classes.menuTitle}>{menuTitle}</div>
        <div className={classes.menulist}>
          {menuList.map((menu) => (
            <div className={classes.menuItem}>
              <div className={classes.submenuTitle}>{menu.menuTitle}</div>
              <div>
                {menu.subMenu.map((submenu) => (
                  <div>
                    <a href={submenu.url}>{submenu.text}</a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

FooterMenuContext.propTypes = {
  menuTitle: PropTypes.string.isRequired,
};

export default FooterMenuContext;
