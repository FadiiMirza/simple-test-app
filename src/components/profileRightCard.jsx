import { Link } from "react-router-dom";
import { overviewText, overviewTitle, profileDetailText } from "../constants";
import Button from "./common/button";
import CheckboxInput from "./common/checkboxInput";
import LabelAndValue from "./common/labelAndValue";
import Tab from "./common/tab";
import Input from "./common/input";
import ProfileFormLabel from "./common/profileFormLabel";

const ProfileRightCard = () => {
  return (
    <div className="col-xl-8">
      <div className="card">
        <div className="card-body pt-3">
          <ul className="nav nav-tabs nav-tabs-bordered">
            <Tab
              tabText="Overview"
              tabTarget="#profile-overview"
              active="active"
            />
            <Tab tabText="Edit Profile" tabTarget="#profile-edit" />
            <Tab tabText="Settings" tabTarget="#profile-settings" />
            <Tab
              tabText="Change Password"
              tabTarget="#profile-change-password"
            />
          </ul>

          <div className="tab-content pt-2">
            <div
              className="tab-pane fade show active profile-overview"
              id="profile-overview"
            >
              <h5 className="card-title">{overviewTitle}</h5>
              <p className="small fst-italic">{overviewText}</p>

              <h5 className="card-title">{profileDetailText}</h5>

              <LabelAndValue label="Full Name" value="Kevin Anderson" />

              <LabelAndValue
                label="Company"
                value="Lueilwitz, Wisoky and Leuschke"
              />

              <LabelAndValue label="Job" value="Web Designer" />

              <LabelAndValue label="Country" value="USA" />

              <LabelAndValue
                label="Address"
                value="A108 Adam Street, New York, NY 535022"
              />

              <LabelAndValue label="Phone" value="(436) 486-3538 x29071" />

              <LabelAndValue label="Email" value="k.anderson@example.com" />
            </div>

            <div className="tab-pane fade profile-edit pt-3" id="profile-edit">
              <form>
                <div className="row mb-3">
                  <ProfileFormLabel
                    htmlForText="profileImage"
                    label="profile image"
                  />
                  <div className="col-md-8 col-lg-9">
                    <img src="assets/img/profile-img.jpg" alt="Profile" />
                    <div className="pt-2">
                      <Link
                        className="btn btn-primary btn-sm"
                        title="Upload new profile image"
                      >
                        <i className="bi bi-upload"></i>
                      </Link>
                      <Link
                        className="btn btn-danger btn-sm"
                        title="Remove my profile image"
                      >
                        <i className="bi bi-trash"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="row mb-3">
                  <ProfileFormLabel htmlForText="fullName" label="full name" />
                  <div className="col-md-8 col-lg-9">
                    <Input inputName="fullName" />
                  </div>
                </div>

                <div className="row mb-3">
                  <ProfileFormLabel htmlForText="about" label="about" />
                  <div className="col-md-8 col-lg-9">
                    {/* <textarea
                      name="about"
                      className="form-control"
                      id="about"
                      style="height: 100px"
                    >
                      Sunt est soluta temporibus accusantium neque nam maiores
                      cumque temporibus. Tempora libero non est unde veniam est
                      qui dolor. Ut sunt iure rerum quae quisquam autem eveniet
                      perspiciatis odit. Fuga sequi sed ea saepe at unde.
                    </textarea> */}
                  </div>
                </div>

                <div className="row mb-3">
                  <ProfileFormLabel htmlForText="company" label="company" />
                  <div className="col-md-8 col-lg-9">
                    <Input inputName="company" />
                  </div>
                </div>

                <div className="row mb-3">
                  <ProfileFormLabel htmlForText="job" label="job" />
                  <div className="col-md-8 col-lg-9">
                    <Input inputName="job" />
                  </div>
                </div>

                <div className="row mb-3">
                  <ProfileFormLabel htmlForText="country" label="country" />
                  <div className="col-md-8 col-lg-9">
                    <Input inputName="country" />
                  </div>
                </div>

                <div className="row mb-3">
                  <ProfileFormLabel htmlForText="address" label="address" />
                  <div className="col-md-8 col-lg-9">
                    <Input inputName="address" />
                  </div>
                </div>

                <div className="row mb-3">
                  <ProfileFormLabel htmlForText="phone" label="phone" />
                  <div className="col-md-8 col-lg-9">
                    <Input inputName="phone" />
                  </div>
                </div>

                <div className="row mb-3">
                  <ProfileFormLabel htmlForText="email" label="email" />
                  <div className="col-md-8 col-lg-9">
                    <Input type="email" inputName="email" />
                  </div>
                </div>

                <div className="row mb-3">
                  <ProfileFormLabel
                    htmlForText="twitter"
                    label="twitter profile"
                  />
                  <div className="col-md-8 col-lg-9">
                    <Input inputName="twitter" />
                  </div>
                </div>

                <div className="row mb-3">
                  <ProfileFormLabel
                    htmlForText="facebook"
                    label="facebook profile"
                  />
                  <div className="col-md-8 col-lg-9">
                    <Input inputName="facebook" />
                  </div>
                </div>

                <div className="row mb-3">
                  <ProfileFormLabel
                    htmlForText="instagram"
                    label="instagram profile"
                  />
                  <div className="col-md-8 col-lg-9">
                    <Input inputName="instagram" />
                  </div>
                </div>

                <div className="row mb-3">
                  <ProfileFormLabel
                    htmlForText="linkedin"
                    label="linkedin profile"
                  />
                  <div className="col-md-8 col-lg-9">
                    <Input inputName="linkedin" />
                  </div>
                </div>

                <div className="text-center">
                  <Button buttonText="save changes" />
                </div>
              </form>
            </div>

            <div className="tab-pane fade pt-3" id="profile-settings">
              <form>
                <div className="row mb-3">
                  <ProfileFormLabel
                    htmlForText="fullName"
                    label="email notifications"
                  />

                  <div className="col-md-8 col-lg-9">
                    <CheckboxInput
                      label="Changes made to your account"
                      htmlForText="changesMade"
                    />

                    <CheckboxInput
                      label="Information on new products and services"
                      htmlForText="newProducts"
                    />

                    <CheckboxInput
                      label="Marketing and promo offers"
                      htmlForText="proOffers"
                    />

                    <CheckboxInput
                      label="Security alerts"
                      htmlForText="securityNotify"
                    />
                  </div>
                </div>

                <div className="text-center">
                  <Button buttonText="save changes" />
                </div>
              </form>
            </div>

            <div className="tab-pane fade pt-3" id="profile-change-password">
              <form>
                <div className="row mb-3">
                  <ProfileFormLabel
                    htmlForText="currentPassword"
                    label="current password"
                  />
                  <div className="col-md-8 col-lg-9">
                    <Input type="password" inputName="currentPassword" />
                  </div>
                </div>

                <div className="row mb-3">
                  <ProfileFormLabel
                    htmlForText="newPassword"
                    label="new password"
                  />
                  <div className="col-md-8 col-lg-9">
                    <Input type="password" inputName="newPassword" />
                  </div>
                </div>

                <div className="row mb-3">
                  <ProfileFormLabel
                    htmlForText="renewPassword"
                    label="re-enter new password"
                  />
                  <div className="col-md-8 col-lg-9">
                    <Input type="password" inputName="renewPassword" />
                  </div>
                </div>

                <div className="text-center">
                  <Button buttonText="change password" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileRightCard;
