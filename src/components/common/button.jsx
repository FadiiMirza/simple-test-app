import PropTypes from "prop-types";

const Button = ({ buttonText, handleClick }) => {
  return (
    <button
      className="btn btn-primary text-capitalize"
      type="submit"
      onClick={(event) => handleClick(event)}
    >
      {buttonText}
    </button>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func,
};

export default Button;
