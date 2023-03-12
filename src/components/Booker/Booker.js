import useBookerStyles from "./BookerStyles";
const Booker = ({ icon, title, description }) => {
  const classes = useBookerStyles();

  return (
    <div className={classes.bookerBox}>
      <div className={classes.boxIcon}>
        <img src={icon} alt='icon' />
      </div>
      <div>
        <h2 className={classes.boxTitle}>{title}</h2>
        <div className={classes.boxDescription}>{description}</div>
      </div>
    </div>
  );
};

export default Booker;
