import { useRef, useState } from "react";
import useHeaderStyles from "./HeaderStyles";
import OutsideAlerter from "../Common/OutsideAlerter";

import { motion } from "framer-motion";
  


const MenuItem = ({ MainMenu }) => {
  const [open, setOpen] = useState(false);
  const classes = useHeaderStyles();
  const menuRef = useRef(null);

  const openMenuEvent = () =>{
   // alert("open")
    setOpen(true);
  }


  return (
    <OutsideAlerter customRef={menuRef} customSetState={setOpen}>
      {
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} ref={menuRef}>
          <a
            className={classes.navLink}
            href='javascript:void(0)'
            onClick={() => openMenuEvent()}
          >
            {MainMenu.mainMenuTitle}
          </a>
          {open && (
            <div className={`${classes.subMenuList}`}>
              {MainMenu.subMenu.map((subMenu) => (
                <div style={{flex:"1"}}>
                  <div className={classes.subMenuTitle}>{subMenu.subMenuTitle}</div>
                  <div>
                    <ul>
                      {subMenu.subMenuList.map((item) => (
                        <li className={classes.subMenuItem}>{item.text}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      }
    </OutsideAlerter>
  );
};

export default MenuItem;
