import { useTabFromElStyles } from "./TabStyles";

const SearchButton = (props) => {
  const classes = useTabFromElStyles();

  return (
    <>
      <button className={classes.searchButton} type='submit'>
        Uçuş Ara
      </button>
    </>
  );
};

export default SearchButton;
