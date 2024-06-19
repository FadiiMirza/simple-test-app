import { Link } from "react-router-dom";
import Header from "./header";
import ProfileLeftCard from "./profileLeftCard";
import ProfileRightCard from "./profileRightCard";

const UserProfile = () => {
  return (
    <>
      <Header />
      <main id="main" className="main">
        <div className="page-title">
          <h1>Profile</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">Users</li>
              <li className="breadcrumb-item active">Profile</li>
            </ol>
          </nav>
        </div>
        <section className="section profile">
          <div className="row">
            <ProfileLeftCard />
            <ProfileRightCard />
          </div>
        </section>
      </main>
    </>
  );
};

export default UserProfile;
