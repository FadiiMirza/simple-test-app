const Input = ({ type = "text", inputName, register = () => {}, error }) => {
  return (
    <>
      <input
        {...register(inputName)}
        type={type}
        name={inputName}
        className="form-control"
        id={inputName}
      />
      {/* {error[inputName] && (
        <div className="invalid-feedback">{error[inputName]?.message}</div>
      )} */}
    </>
  );
};

export default Input;
