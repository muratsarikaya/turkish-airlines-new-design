import { createUseStyles } from "react-jss";

const useInputElementStyles = createUseStyles({
    inputWrapper:{
        display: "block",
        padding: "20px 15px 20px 15px",
        borderRadius: "6px",
        backgroundColor: "#F4F6F8",
        cursor: "pointer",
        marginBottom: "20px",
        "& input": {
            background:"transparent",
            width: "100%",
            border: "none",
            outline: "none"
        }
    }
});

export default useInputElementStyles;
