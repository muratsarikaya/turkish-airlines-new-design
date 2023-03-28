import React from "react";
import PropTypes from "prop-types"
import useLoginButtonStyles from "./LoginButtonStyles";
const LoginButton = ({ buttonType, buttonLabel }) => {
  const classes = useLoginButtonStyles();

  return (
    <button className={classes.buttonWrapper} type={buttonType}>
      {buttonLabel}
    </button>
  );
};
LoginButton.propTypes = {
  buttonType: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired
}
export default LoginButton;
