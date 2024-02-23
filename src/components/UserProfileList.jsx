import React from 'react';
import UserProfile from './UserProfile';

function UserProfileList({ profiles }) {
  // ToDo: Render a list of UserProfile components based on the profiles prop
  return (
    <div className="space-y-4">
      {/* Render UserProfile components here */}
      {/* Hint 
        {*********.map((profile, index) => (
        <********* key={index} profile={profile} />
        ))} 
      */}
    </div>
  );
}

export default UserProfileList;
