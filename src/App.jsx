import React, { useState } from 'react';
import UserForm from './components/UserForm';
import UserProfileList from './components/UserProfileList';

function App() {
  const [profiles, setProfiles] = useState([]);

  const addProfile = (newProfile) => {
    setProfiles([...profiles, newProfile]);
  };

  return (
    <div className="max-w-4xl mx-auto p-5">
      <h1 className="text-center text-3xl font-bold mb-8">User Profile Manager</h1>
      <UserForm onAddProfile={addProfile} />
      <UserProfileList profiles={profiles} />
    </div>
  );
}

export default App;
