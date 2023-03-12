import { createUseStyles } from "react-jss";

const useFooterMenuTabStyles = createUseStyles({
  menuWrapper: {
    backgroundColor: "#232B38",
    padding: "30px 0",
  },
  menuTabsWrapper: {
    display: "flex",
    justifyContent: "center",
    "& li": {
      fontFamily: "Museo Sans,sans-serif",
      fontSize: "11px",
      fontWeight: "600",
      listStyle: "none",
      margin: "0 15px",
      color: "#fff",
      cursor: "pointer",
    },
  },
  menuContextContainer: {
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
  },

  menulist: {
    display: "flex",
    flex: "0 0 auto",
    width: "75%",
  },
  menuItem: {
    flex: "0 0 auto",
    width: "33.33333333%",
    "& a": {
      fontFamily: "Museo Sans,sans-serif",
      fontSize: "12px",
      textDecoration: "none",
      color: "#C3CBD7",
    },
  },
  menuTitle: {
    flex: "0 0 auto",
    width: "25%",
    fontFamily: "Museo Sans,sans-serif",
    fontSize: "17px",
    fontWeight: "500",
    color: "#fff",
  },
  submenuTitle: {
    fontFamily: "Museo Sans,sans-serif",
    fontSize: "14px",
    fontWeight: "500",
    color: "#fff",
    marginBottom: "15px",
  },
});

export default useFooterMenuTabStyles;
