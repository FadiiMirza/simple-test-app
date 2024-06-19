import { Link } from "react-router-dom";
import { logoText } from "../../constants";
import LogoImage from "../../images/logo.png";

const Logo = () => {
  return (
    <Link to="/" className="logo d-flex align-items-center w-auto">
      <img src={LogoImage} alt={logoText} />
      <span>{logoText}</span>
    </Link>
  );
};

export default Logo;
