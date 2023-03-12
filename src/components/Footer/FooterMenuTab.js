import useFooterMenuTabStyles from "./FooterMenuTabStyles";

import { useState } from "react";
import PropTypes from "prop-types";

const FooterMenuTab = ({ menuTabsConfig, defaultIndex }) => {
  const classes = useFooterMenuTabStyles();

  const [selectedIndex, setSelectedIndex] = useState(defaultIndex ?? 0);

  const handleClick = (index) => setSelectedIndex(index);
  return (
    <>
      <ul className={classes.menuTabsWrapper}>
        {menuTabsConfig.map((tab, index) => (
          <li key={`tab-${index}`} onClick={() => handleClick(index)}>
            <img alt='' />
            <span>{tab.label}</span>
          </li>
        ))}
      </ul>
      <div className={`tabpanel-wrapper`}>
        {menuTabsConfig.map((tab, index) => (
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

FooterMenuTab.propTypes = {
  menuTabsConfig: PropTypes.object.isRequired,
  defaultIndex: PropTypes.number,
};

export default FooterMenuTab;
