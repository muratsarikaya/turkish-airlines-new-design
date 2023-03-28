import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

import useSelectboxStyles from "./SelectboxStyles";
import OutsideAlerter from "../../Common/OutsideAlerter";

import { motion } from "framer-motion";
import { FaAngleDown } from "react-icons/fa";

const SelecBox = ({ optionsList, name }) => {
  const classes = useSelectboxStyles();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState({ id: 1, text: "Üyelik Numarası" });
  const selectRef = useRef(null);
  const optionRef = useRef(null);

  const clickEvent = (e) => {
    setValue({ ...value, text: e.target.outerText });
    setOpen(false);
  };

  return (
    <OutsideAlerter customRef={selectRef} customSetState={setOpen}>
      <div className={classes.selectWrapper} ref={selectRef}>
        <input
          className={classes.select}
          ref={optionRef}
          type='text'
          name={name}
          value={value.text}
        />
        <button
          type='button'
          className={classes.button}
          onClick={() => setOpen(true)}
        >
          <span>{value.text}</span> <FaAngleDown />
        </button>
        {open && (
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className={classes.dropDownWrapper}>
            {optionsList.map((option) => (
              <div
                key={option.id}
                data-key={option.id}
                value={option.text}
                className={classes.dropdownOption}
                onClick={(e) => clickEvent(e)}
              >
                {option.text}
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </OutsideAlerter>
  );
};

SelecBox.propTypes = {
  optionsList: PropTypes.bool.isRequired,
};

export default SelecBox;
