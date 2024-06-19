const LabelAndValue = ({ label, value }) => {
  return (
    <div className="row">
      <div className="col-lg-3 col-md-4 label">{label}</div>
      <div className="col-lg-9 col-md-8">{value}</div>
    </div>
  );
};

export default LabelAndValue;
