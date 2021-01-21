import React from "react";
import "./Profile.css";
import ProfileCard from "../../components/ProfileCard/ProfileCard";

const Profile = ({ user }) => {
  return (
    <>
      <div className="profileCard">
        <h3>{user.name}'s Profile</h3>
        <div className="userInfo">
          <b>Name:</b> {user.name} <br />
          <b>Email:</b> {user.email} <br />
        </div>
      </div>
    </>
  );
};

export default Profile;
