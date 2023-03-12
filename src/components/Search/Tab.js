import { useState } from "react";
import useTabStyles from "./TabStyles";

const Tab = ({ tabsConfig, defaultIndex }) => {
  const classes = useTabStyles();

  const [selectedIndex, setSelectedIndex] = useState(defaultIndex ?? 0);

  const handleClick = (index) => setSelectedIndex(index);
  return (
    <>
      <div className={classes.tabButtonWrapper}>
        {tabsConfig.map((tab, index) => (
          <button
            className={`${classes.tabButton} ${selectedIndex === index && "active"}`}
            key={`tab-${index}`}
            onClick={() => handleClick(index)}
          >
            {tab.icon}
            <span className={classes.tabButtonText}>{tab.label}</span>
          </button>
        ))}
      </div>
      <div className={`${classes.tabContent} tabpanel-wrapper`}>
        {tabsConfig.map((tab, index) => (
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

export default Tab;
