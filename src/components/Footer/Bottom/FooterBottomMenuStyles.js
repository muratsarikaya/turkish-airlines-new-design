import { createUseStyles } from "react-jss";

const useFooterBottomMenuStyles = createUseStyles({
  menuBottomWrapper: {
    display:"flex",
    justifyContent: "center",
    margin: "0",
    padding: "30px 0"
  },
  menuBottomItem: {
    fontFamily: "Museo Sans,sans-serif",
    fontSize: "11px",
    listStyle: "none",
    color: "#C3CBD7",
    marginRight: "15px"
  }
  
});

export default useFooterBottomMenuStyles;
