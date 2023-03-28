import LogoSource from "../../assets/img/logo/THY-LOGO.avif";

const Logo = () => {
  return (
    <>
      <img
        src={LogoSource}
        alt='logo'
        style={{ width: "217px", height: "auto", marginTop: "10px" }}
      />
    </>
  );
};

export default Logo;
