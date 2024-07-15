import React from 'react';

const Profile = ({ username, description }) => {
  return (
    <div className="profile">
      <h2>{username}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Profile;
