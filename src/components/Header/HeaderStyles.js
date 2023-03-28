import { createUseStyles } from "react-jss";

const useHeaderStyles = createUseStyles({
  headerTopWrapper: {
    backgroundColor: "#2b3947",
    height: "30px",
    textAlign:"right"
  },
  navLink: {
    display: "inline-block",
    fontFamily: "Museo Sans,sans-serif",
    fontWeight: "900",
    fontSize: "13px",
    color: "#fff",
    textDecoration: "none",
    padding: "15px",
    textTransform: "uppercase",
    borderRight: "1px solid #fff",
/*     "&:last-child": {
      border: "1px solid #fff",
      borderRadius: "26px",
      marginLeft: "15px",
      transition: ".3s linear",
      "&:hover": {
        backgroundColor: "#fff",
        color: "#232b38",
      },
    }, */
  },
  subMenuList:{
    position: "absolute",
    display: "flex",
    minWidth: "700px",
    top: "calc(100% + 10px)",
    right:"5%",
    background: "rgba(43,57,71, 0.95)"
  },
  subMenuTitle:{
    background: "#232b38",
    padding: "15px",
    color: "#fff",
    fontFamily: "Museo Sans,sans-serif"
  },
  subMenuItem:{
    fontFamily: "Museo Sans,sans-serif",
    fontSize: "13px",
    lineHeight: "1",
    padding: "10px 0",
    color: "rgba(225,225,225,.75)"
  },
  navLinkTop: {
    color: "#C3CBD7",
    display: "inline-block",
    lineHeight: "1",
    fontSize: "11px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    fontWeight: "400",
    padding: "5px 8px",
    borderLeft: "1px dotted #fff"
  }
});

export default useHeaderStyles;
