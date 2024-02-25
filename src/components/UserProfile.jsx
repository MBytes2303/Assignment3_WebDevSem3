import React, { useState } from "react";

function UserProfile({ profile }) {
  const [showBio, setShowBio] = useState(false);

  const toggleBio = () => {
    setShowBio((prevShowBio) => !prevShowBio);
  };

  return (
    <div className="border p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold">{profile.name}</h2>
      <p>{profile.email}</p>
      {showBio && <p className="mt-2">{profile.bio}</p>}
      <button
        onClick={toggleBio}
        className={`mt-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${
          showBio
            ? " bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            : " bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        }`}
      >
        {showBio ? "Hide Bio" : "Show Bio"}
      </button>
    </div>
  );
}

export default UserProfile;
