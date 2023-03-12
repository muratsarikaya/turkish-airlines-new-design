import { createUseStyles } from "react-jss";

const useAdvantagesStyles = createUseStyles({
  advantagesImage: {
    width: "100%",
    borderRadius: "8px",
  },
  advantagesTitle: {
    height: "44px",
    margin: "20px 0",
    fontFamily: "Museo Sans,sans-serif",
    fontSize: "18px",
    fontWeight: "700",
    color: "#212529",
    textAlign: "center",
  },
  advantagesDescription: {
    height: "80px",
    fontFamily: "Museo Sans,sans-serif",
    fontSize: "12px",
    fontWeight: "400",
    color: "#2125299e",
    lineHeight: "1.5",
    letterSpacing: "1px",
    textAlign: "center",
    marginBottom: "20px",
  },
  advantagesButton: {
    margin: "0 auto",
    color: "#E81932",
    fontWeight: "600",
    textAlign: "center",
    cursor: "pointer",

    "& > span": {
      border: "1px solid #E81932",
      padding: "10px 15px",
      borderRadius: "8px",
      display: "inline-block",
    },
    "&:hover": {
      color: "#fff",
      "& > span": {
        background: "#E81932",
      },
    },
  },
});

export default useAdvantagesStyles;
