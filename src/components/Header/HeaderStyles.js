import { createUseStyles } from "react-jss";

const useHeaderStyles = createUseStyles({
  headerTopWrapper: {
    backgroundColor: "#2b3947",
    height: "30px",
  },
  navLink: {
    fontFamily: "Museo Sans,sans-serif",
    fontWeight: "900",
    fontSize: "13px",
    color: "#fff",
    textDecoration: "none",
    padding: "15px",
    textTransform: "uppercase",
    borderRight: "1px solid #fff",
    "&:last-child": {
      border: "1px solid #fff",
      borderRadius: "26px",
      marginLeft: "15px",
      transition: ".3s linear",
      "&:hover": {
        backgroundColor: "#fff",
        color: "#232b38",
      },
    },
  },
});

export default useHeaderStyles;
