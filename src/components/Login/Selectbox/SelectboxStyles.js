import { createUseStyles } from "react-jss";

const useSelectboxStyles = createUseStyles({
    selectWrapper:{
        position: "relative",
        minWidth: "180px",
        marginBottom: "20px"
    },
    select:{
        visibility: "hidden",
        position: "absolute"
    },
    button:{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        outline: "none",
        padding: "20px 15px 20px 15px",
        borderRadius: "6px",
        backgroundColor: "#F4F6F8",
        border:"none",
        textAlign: "left",
        cursor: "pointer",
        fontFamily: "Museo Sans,sans-serif",
        color: "#647281"
    },
    dropDownWrapper:{
        position: "absolute",
        top: "calc(100% + 5px)",
        width: "100%",
        boxShadow: "0 10px 16px 0 rgb(0 0 0 / 20%)",
        backgroundColor: "#F4F6F8",
        color: "#647281",
        borderRadius: "6px",
        "& div":{
            padding: "10px",
            fontSize: "14px",
            "&:hover": {
                backgroundColor: "#dcdee1"
            }
        }
    },
    dropdownOption:{
        cursor: "pointer"
    }
});

export default useSelectboxStyles;
