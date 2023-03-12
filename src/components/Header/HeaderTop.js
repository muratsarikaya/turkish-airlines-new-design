import useHeaderStyles from "./HeaderStyles";

const HeaderTop = (props) => {
  const classes = useHeaderStyles();

  return <div className={classes.headerTopWrapper}></div>;
};

export default HeaderTop;
