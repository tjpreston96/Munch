import React from 'react';
import "./Profile.css";
import ProfileCard from "../../components/ProfileCard/ProfileCard"

const Profile = ({user})=>{
  return (
<>
{/* <div className="profile-header">
  <h1 key={user.id}
  className="profile">{user.name}'s Saved Recipes
  </h1>
</div> */}

<h3 className="profileCard">{user.name}'s Profile</h3>
  <div className="profilePic">
  <ProfileCard />
  </div>


  </>

  )
}

export default Profile;