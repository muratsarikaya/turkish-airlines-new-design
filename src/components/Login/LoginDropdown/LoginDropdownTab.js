import { useState } from "react";
import PropTypes from "prop-types";

import useLoginDropdownStyles from './LoginDropdownStyles'

const LoginDropdownTab = ({ tabMenu, defaultIndex }) => {
const classes = useLoginDropdownStyles();

  const [selectedIndex, setSelectedIndex] = useState(defaultIndex ?? 0);

  const handleClick = (index) => setSelectedIndex(index);
  return (
    <>
      <ul className={classes.dropdownTabWrapper}>
        {tabMenu.map((tab, index) => (
          <li key={`tab-${index}`} onClick={() => handleClick(index)} className={`${selectedIndex === index && "active"}`}>
            <img alt='' />
            <span>{tab.label}</span>
          </li>
        ))}
      </ul>
      <div className={`tabpanel-wrapper`}>
        {tabMenu.map((tab, index) => (
          <section
            style={{ marginTop: "20px" }}
            key={`tabpanel-${index}`}
            hidden={selectedIndex !== index}
          >
            {tab.content}
          </section>
        ))}
      </div>
    </>
  );
};

LoginDropdownTab.propTypes = {
  menuTabsConfig: PropTypes.object.isRequired,
  defaultIndex: PropTypes.number,
};

export default LoginDropdownTab;
