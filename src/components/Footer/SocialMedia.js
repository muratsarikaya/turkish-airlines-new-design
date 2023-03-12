import useSocialMediaStyles from "./SocialMediaStyles";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";

const icons = [
  <FaFacebookF/>,
  <FaTwitter/>,
  <FaInstagram/>,
  <FaYoutube/>,
  <FaLinkedinIn/>,
  <FaTiktok/>
];

const SocialMedia = (props) => {
  const classes = useSocialMediaStyles();
  return (
    <div>
      <ul className={classes.iconWrapper}>
        {
          icons.map((icon)=>(
            <li>
              {icon}
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default SocialMedia;
