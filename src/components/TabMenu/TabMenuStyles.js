import { createUseStyles } from "react-jss";

const useTabMenuStyles = createUseStyles({
  tabMenuWrapper: {

  },
  tabMenuLi:{
    position: "relative",
    listStyle: "none",
    
  },
  tabMenuLink:{
    position: "relative",
    display: "inline-block",
    padding:"10px 15px",
    color: "#232b38",
    fontFamily: "Museo Sans,sans-serif",
    textDecoration: "none",
    lineHeight: "30px",
    fontSize: "13px",
    "&:hover":{
        "&:before":{
            content:'""',
            position: "absolute",
            bottom: "0",
            left: "0",
            height: "5px",
            width: "100%",
            backgroundColor: "#E81932"
        }
    },
    
  }
});


export default useTabMenuStyles;
