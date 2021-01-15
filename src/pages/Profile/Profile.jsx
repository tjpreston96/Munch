import React, { Component } from "react";
import "./Profile.css";

class Profile extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="profileCard">
          <div className="profile">Profile Div</div>
          <div className="cookbook">Cookbook Div</div>
        </div>
      </>
    );
  }
}

export default Profile;
