import React, { useState, useRef } from "react";
import LoginDropdownTab from "./LoginDropdownTab";
import MilesSmiles from "./MilesSmiles";
import CorporateClub from "./CorporateClub";
import OutsideAlerter from "../../Common/OutsideAlerter";
import useLoginDropdownStyles from "./LoginDropdownStyles";

import { motion } from "framer-motion";

const DropdownTabList = [
  {
    label: "MİLES & SMILES",
    content: <MilesSmiles />,
    icon: "fligth",
  },
  {
    label: "CORPORATE CLUB",
    content: <CorporateClub />,
    icon: "fligth",
  },
];

const LoginDropdown = ({ value }) => {
  const classes = useLoginDropdownStyles();
  const [open, setOpen] = useState(false);

  const loginRef = useRef(null);

  return (
    <OutsideAlerter customRef={loginRef} customSetState={setOpen}>
      <div ref={loginRef}>
        <button
          onClick={() => setOpen(true)}
          className={classes.loginTextButton}
          type=''
        >
          {value}
        </button>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className={classes.loginDropdownWrapper}
          >
            <LoginDropdownTab tabMenu={DropdownTabList} />
          </motion.div>
        )}
      </div>
    </OutsideAlerter>
  );
};

export default LoginDropdown;
