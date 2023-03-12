import { createUseStyles } from "react-jss";

const usePassengerStyles = createUseStyles({
  inputWidth: {
    position: "relative",
    fontFamily: "Museo Sans,sans-serif",
    width: "192px",
    textAlign: "left",
    cursor: "pointer",
    marginRight: "10px",
    "& >label": {
      fontSize: "16px",
      fontWeight: "600",
      color: "#647281",
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      left: "15px",
      transition: ".3s linear",
    },
    "&.open >label": {
      fontSize: "14px",
      left: "0",
      transform: "translateY(-50px)",
    },
  },
  inputWrapperBg: {
    backgroundColor: "#F4F6F8",
    padding: "10px 0 10px 15px",
    borderRadius: "6px",
  },
  passengerText: {
    fontFamily: "Museo Sans,sans-serif",
    fontSize: "16px",
    color: "#232B38",
    fontWeight: 600,
  },
  passengerPackage: {
    fontSize: "11px",
    color: "#232b38",
    fontFamily: "Museo Sans",
    fontWeight: 600,
    lineHeight: "19px",
  },
  passengerOption: {
    display: "none",
    position: "absolute",
    top: "115%",
    right: "0",
    boxShadow: "0 6px 12px rgb(0 0 0 / 18%)",
    width: "380px",
    backgroundColor: "#fff",
    padding: "15px",
    zIndex: "2",
    "&.open": {
      display: "block",
    },
  },
  passengerOptionTitle: {
    marginBottom: "0",
    color: "#96979a",
    fontSize: "18px",
    fontWeight: "700",
  },
  passengerFlightTypeWrapper: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px 0",
  },
  passengerFlightType: {
    width: "100%",
    fontFamily: "Museo Sans,sans-serif",
    fontSize: "13px",
    fontWeight: "600",
    padding: "20px",
    display: "inline-block",
    marginRight: "12px",
    borderRadius: "3px",
    boxShadow: "2px 4px 10px 4px rgb(0 0 0 / 15%)",
    color: "#96979a",
    "&:last-child": {
      marginRight: "0",
    },
    "&.eco": {
      borderTop: "3px solid #647281",
    },
    "&.bussiness": {
      borderTop: "3px solid #C5724E",
    },
  },
  passengerCounter: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 0",
    borderBottom: "1px solid #e6e8ee",
  },
  passengerCounterType: {
    color: "#232b38",
    fontSize: "18px",
    lineHeight: "1.4",
    fontFamily: "Museo Sans,sans-serif",
    fontWeight: "600",
  },
  passengerCounterInfo: {
    color: "#788594",
    fontSize: "14px",
    fontFamily: "Museo Sans,sans-serif",
  },
  decrease: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "40px",
    height: "40px",
    backgroundColor: "#ebedee",
    boxShadow: "0 0 6px #ccc",
    textDecoration: "none",
    border: "none",
    "&:hover":{
      boxShadow: "0 0 17px #ccc"
    }
  },
  increase: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "40px",
    height: "40px",
    backgroundColor: "#ebedee",
    boxShadow: "0 0 6px #ccc",
    textDecoration: "none",
    border: "none",
    "&:hover":{
      boxShadow: "0 0 17px #ccc"
    }
  },
  passengerCounterNumber: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "40px",
    height: "40px",
    fontSize: "13px",
  },
  passengerCounterWrapper: {
    display: "flex",
    alignItems: "center",
  },
});

export default usePassengerStyles;
