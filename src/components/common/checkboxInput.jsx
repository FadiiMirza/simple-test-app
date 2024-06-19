const CheckboxInput = ({ label, inputName, htmlForText }) => {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        name={inputName}
        value="true"
        id={htmlForText}
      />
      <label className="form-check-label" htmlFor={htmlForText}>
        {label}
      </label>
    </div>
  );
};

export default CheckboxInput;
