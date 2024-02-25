import React, { useState } from "react";
import UserProfile from "./UserProfile";

function UserProfileList({ profiles }) {
  const [filterText, setFilterText] = useState("");

  const filteredProfiles = profiles.filter(
    (profile) =>
      profile.name.toLowerCase().includes(filterText.toLowerCase()) ||
      profile.email.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="text-center mb-4">
      <h1 className="text-center text-3xl font-bold mb-8">User Profile List</h1>
      <input
        type="text"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        placeholder="Search by name or email..."
        className="p-2 border rounded-md mb-5"
      />

      {filteredProfiles.map((profile, index) => (
        <UserProfile key={index} profile={profile} />
      ))}
    </div>
  );
}

export default UserProfileList;
