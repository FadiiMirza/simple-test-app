const Label = ({ label, htmlForText }) => {
  return (
    <label htmlFor={htmlForText} className="form-label">
      {label}
    </label>
  );
};

export default Label;
