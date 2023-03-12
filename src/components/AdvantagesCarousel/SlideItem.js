import useAdvantagesStyles from "./AdvantagesCarouselStyles";

const SlideItem = ({ img, title, description, buttonText }) => {
  const classes = useAdvantagesStyles();
  return (
    <>
      <div>
        <img className={classes.advantagesImage} src={img} alt='görsel' />
      </div>
      <div className={classes.advantagesTitle}>{title}</div>
      <div className={classes.advantagesDescription}>{description}</div>
      <div className={classes.advantagesButton}>
        <span>{buttonText}</span>
      </div>
    </>
  );
};

export default SlideItem;
