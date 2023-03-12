import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";
import HeaderBanner from "./HeaderBanner";

const Header = (props) => {
  return (
    <header>
      <HeaderTop />
      <HeaderBottom />
      <HeaderBanner />
    </header>
  );
};

Header.propTypes = {};
Header.defaultProps = {};

export default Header;
