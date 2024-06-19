const Button = ({ buttonText, width }) => {
  return (
    <button
      className={`btn btn-primary text-capitalize ${width}`}
      type="submit"
    >
      {buttonText}
    </button>
  );
};

export default Button;
