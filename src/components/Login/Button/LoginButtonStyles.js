import { createUseStyles } from "react-jss";

const useLoginButtonStyles = createUseStyles({
    buttonWrapper:{
        color: "#fff",
        width: "100%",
        height: "61px",
        border: "none",
        cursor: "pointer",
        outline: "none",
        background: "#E81932",
        fontFamily: "Museo Sans,sans-serif",
        borderRadius: "6px",
        marginBottom: "20px",
        "& input": {
            background:"transparent",
            width: "100%",
            border: "none",
            outline: "none"
        }
    }
});

export default useLoginButtonStyles;
