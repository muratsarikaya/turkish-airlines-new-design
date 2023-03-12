import { createUseStyles } from "react-jss";

const useSocialMediaStyles = createUseStyles({
  iconWrapper: {
    display: "flex",
    justifyContent: "center",
    margin: "0",
    padding: "20px 0",
    backgroundColor: "#232B38",
    "& li": {
      fontSize: "18px",
      listStyle: "none",
      margin: "0 15px",
      color: "#C3CBD7",
    },
  },
});

export default useSocialMediaStyles;
