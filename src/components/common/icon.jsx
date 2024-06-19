import { Link } from "react-router-dom";

const Icon = ({ anchorClassName, iconClassName }) => {
  return (
    <Link className={anchorClassName}>
      <i className={iconClassName}></i>
    </Link>
  );
};

export default Icon;
