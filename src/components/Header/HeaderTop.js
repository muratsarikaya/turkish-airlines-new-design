import { Link } from "react-router-dom";

import useHeaderStyles from "./HeaderStyles";

const HeaderTop = (props) => {
  const classes = useHeaderStyles();

  return <div className={classes.headerTopWrapper}>
    <Link className={classes.navLinkTop} to={"/corporate-club"}>Corporate Club</Link>
    <Link className={classes.navLinkTop} to={"/corporate-club"}>Miles&Smiles</Link>
    <Link className={classes.navLinkTop} to={"/corporate-club"}>Geri bildirim</Link>
  </div>;
};

export default HeaderTop;
