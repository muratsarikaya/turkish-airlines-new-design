import img1 from "../../assets/img/brand-logo/Turkish-Airlines-Star-Alliance.avif";
import img2 from "../../assets/img/brand-logo/Champions-League-Logo.avif";
import img3 from "../../assets/img/brand-logo/Euroleague-logo.avif";
const Brand = (props) => {
  return (
    <div style={{textAlign: "center"}}>
      <img src={img1} alt='img1' />
      <img src={img2} alt='img1' />
      <img src={img3} alt='img1' />
    </div>
  );
};

export default Brand;
