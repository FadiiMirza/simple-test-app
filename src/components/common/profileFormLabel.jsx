const ProfileFormLabel = ({ htmlForText, label }) => {
  return (
    <label
      htmlFor={htmlForText}
      className="col-md-4 col-lg-3 col-form-label text-capitalize"
    >
      {label}
    </label>
  );
};

export default ProfileFormLabel;
