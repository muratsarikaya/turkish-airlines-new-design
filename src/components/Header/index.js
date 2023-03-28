import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";
import HeaderBanner from "./HeaderBanner";

const Header = ({subPage}) => {
  return (
    <header>
      <HeaderTop />
      <HeaderBottom />
      {
        subPage !== true && (
          <HeaderBanner />
        )
      }
      
    </header>
  );
};

Header.propTypes = {};
Header.defaultProps = {};

export default Header;
