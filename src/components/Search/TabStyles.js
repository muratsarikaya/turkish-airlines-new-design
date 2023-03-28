import { createUseStyles } from "react-jss";

const useTabStyles = createUseStyles({
  searchTabWrapper: {
    marginTop: "-140px",
    maxWidth: "1200px",
    margin: "auto",
  },
  tabButtonWrapper: {
    display: "flex",
    textAlign: "left",
  },
  tabButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "1",
    fontFamily: "Museo Sans,sans-serif",
    fontSize: "14px",
    fontWeight: "600",
    color: "#647281",
    backgroundColor: "#F4F5F8",
    padding: "18px",
    borderRadius: "3px 3px 0 0",
    border: "none",
    outline: "none",
    cursor: "pointer",
    lineHeight: "1.6",
    marginRight: "5px",
    "&:last-child": {
      margin: 0,
    },
    "&.active": {
      "& svg *":{
        fill: "#E81932"
      },
      color:"#E81932"
    }
  },
  tabButtonText: {
    marginLeft: "15px",
  },
  tabContent: {
    minHeight: "198px",
    backgroundColor: "#fff",
    boxShadow: "0 6px 6px 0 rgb(0 0 0 / 12%)",
    padding: "30px 2em 20px",
    borderRadius: "0 3px 3px",
  },
  inputWidth: {
    position: "relative",
    fontFamily: "Museo Sans,sans-serif",
    maxWidth: "192px",
    textAlign: "left",
    cursor: "pointer",
    marginRight: "10px",
    "& label": {
      fontSize: "16px",
      fontWeight: "600",
      color: "#647281",
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      left: "15px",
      transition: ".3s linear",
    },
    "&.open label": {
      fontSize: "14px",
      left: "0",
      transform: "translateY(-50px)",
    },
    "& .react-calendar": {
      position: "absolute",
      maxWidth: "initial",
      left: "0",
      top: "115%",
      border: "none",
      boxShadow:
        "0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)",
      borderRadius: "8px",
    },
  },
  inputWrapperBg: {
    backgroundColor: "#F4F6F8",
    padding: "20px 0 20px 15px",
    borderRadius: "6px",
  },
  cityName: {
    fontFamily: "Museo Sans,sans-serif",
    fontWeight: "700",
    color: "#647281",
    fontSize: "16px",
    background: "#F4F6F8",
    outline: "none",
    border: "none",
    width: "100%",
    padding: "0",
  },
  datepickerInput: {
    opacity: 0
  },
  searchListWrapper: {
    position: "absolute",
    width: "100%",
    backgroundColor: "#fff",
    boxShadow: "0 1px 8px 4px rgb(0 0 0 / 12%)",
    borderRadius: "8px",
    padding: "20px",
    minHeight: "150px",
    maxHeight: "200px",
    overflow: "auto",
    top: "calc(100% + 10px)",
    "&::-webkit-scrollbar":{
      width: "6px",
      borderRadius:"5px"
    },
    "&::-webkit-scrollbar-track":{
      background: "#f1f1f1"
    },
    "&::-webkit-scrollbar-thumb":{
      background: "#888",
      borderRadius: "5px"
    },
    "&::-webkit-scrollbar-thumb:hover":{
      background: "#555"
    }
  },
  searchListItem: {
    padding: "5px 10px",
    cursor: "pointer",
    borderRadius: "4px",
    color: "#647281",
    "&:hover":{
      backgroundColor: "#232B38",
      color: "#fff"
    }
  },
  airportName:{
    position: "absolute",
    bottom:"4px",
    fontSize: "11px",
    color: "#647281"
  }
});

const useTabFromElStyles = createUseStyles({
  tripTypeLabel: {
    fontFamily: "Museo Sans,sans-serif",
    fontSize: "14px",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
  },
  tripTypeStyleRadio: {
    width: "18px",
    height: "18px",
    "&:checked": {
      content: "",
      borderRadius: "50%",
      width: "18px",
      height: "18px",
      border: "2px solid #00548A",
      backgroundColor: "#fff",
      boxShadow: "none",
    },
  },
  searchButton: {
    fontFamily: "Museo Sans,sans-serif",
    width: "150px",
    background: "#E81932",
    color: "#fff",
    border: "none",
    outline: "none",
    borderRadius: "6px",
    cursor: "pointer",
    "&:hover": {
      background: "#ff3545",
    },
  },
  dateStringWrapper:{
    position: "absolute",
    left: "15px",
    top: "9px"
  },
  dateDay: {
    fontSize: "12px",
    color: "#647280"
  }
});
export { useTabFromElStyles };
export default useTabStyles;
