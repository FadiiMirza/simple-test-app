import ProfileImage from "../images/profile-img.jpg";
import Icon from "./common/icon";

const ProfileLeftCard = () => {
  return (
    <div className="col-xl-4">
      <div className="card">
        <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
          <img src={ProfileImage} alt="Profile" className="rounded-circle" />
          <h2>Kevin Anderson</h2>
          <h3>Web Designer</h3>
          <div className="social-links mt-2">
            <Icon anchorClassName="twitter" iconClassName="bi bi-twitter" />
            <Icon anchorClassName="facebook" iconClassName="bi bi-facebook" />
            <Icon anchorClassName="instagram" iconClassName="bi bi-instagram" />
            <Icon anchorClassName="linkedin" iconClassName="bi bi-linkedin" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileLeftCard;
