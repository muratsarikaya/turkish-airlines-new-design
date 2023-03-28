import { createUseStyles } from "react-jss";
const colors = {
    white: "#fff"
}
const useLoginDropdownStyles = createUseStyles({
    loginTextButton: {
        color: colors.white,
        display: "inline-block",
        padding: "15px",
        fontSize: "13px",
        fontFamily:"Museo Sans,sans-serif",
        fontWeight: "900",
        border: `1px solid ${colors.white}`,
        textTransform: "uppercase",
        textDecoration: "none",
        background: "none",
        cursor: "pointer",
        borderRadius: "15px"
    },
    loginDropdownWrapper: {
        position: "absolute",
        top: "calc(100% + 0px)",
        right: "15px",
        width: "415px",
        minHeight: "250px",
        background: "#fff",
        borderRadius: "8px",
        padding: "0 20px",
        boxShadow: "0 6px 6px 0 rgb(0 0 0 / 12%)"
    },
    dropdownTabWrapper: {
        display: "flex",
        padding: "0",
        margin: "0",
        "& li":{
            position: "relative",
            listStyle: "none",
            padding: "15px 0",
            display: "flex",
            flex: "1",
            justifyContent: "center",
            background: "#fff",
            borderRadius: "8px",
            fontFamily: "Museo Sans,sans-serif",
            cursor: "pointer",
            "&.active":{
                "&:before": {
                    content:'""',
                    position: "absolute",
                    bottom: "0",
                    left:"0",
                    width: "100%",
                    borderBottom: "2px solid #E81932"
                }
            },
            "&:hover":{
                backgroundColor: "#F4F6F8"
            }
        }
    }
});

export default useLoginDropdownStyles;
