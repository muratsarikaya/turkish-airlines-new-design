import { createUseStyles } from "react-jss";

const useBookerStyles = createUseStyles({
  bookerWrapper: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "1200px",
    margin: "30px auto 120px",
  },
  bookerBox: {
    display: "flex",
    maxWidth: "314px",
    boxShadow: "0 1px 8px 4px rgb(0 0 0 / 12%)",
    padding: "20px",
    borderRadius: "8px",
  },
  boxIcon: {
    marginRight: "20px",
  },
  boxTitle: {
    fontSize: "16px",
    fontFamily: "Museo Sans,sans-serif",
    lineHeight: "22px",
    color: "#232B38",
  },
  boxDescription: {
    fontSize: "12px",
    fontWeight: "400",
    lineHeight: "22px",
    color: "#647281",
    marginTop: "7px",
  },
});

export default useBookerStyles;
