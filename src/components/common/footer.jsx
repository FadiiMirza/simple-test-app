import { Link } from "react-router-dom";
import { footerText } from "../../constants";

const Footer = () => {
  return (
    <div className="credits">
      Designed by <Link href="https://bootstrapmade.com/">{footerText}</Link>
    </div>
  );
};

export default Footer;
