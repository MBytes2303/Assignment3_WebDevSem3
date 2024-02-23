import React, { useState } from "react";

function UserForm({ onAddProfile }) {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    bio: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    bio: "",
  });

  const handleInputChange = (e) => {
    // destructures the event object that passes through this function
    // e.target contains the object containing all of the attributes from the html element
    // the name attribute will be assigned to the name variable, so whenever this function is called
    // it will change dynamically and appropriately change the value in the proper element in the array.
    const { name, value } = e.target;

    setProfile({
      ...profile, // 'spreads' the current profile so the changes will append. If this is not written, changes will not be saved on the other fields
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ToDo: Implement form validation before submission
    // If valid, call onAddProfile with the new profile and reset form fields
    // Otherwise, set errors in state to display validation messages

    if (/\d/.test(profile.name)) {
      setErrors({ name: "Numbers are not allowed." });
      return;
    }

    if (!profile.email.includes("@")) {
      setErrors({ email: "Needs an '@' symbol." });
      return;
    }

    if (profile.bio.length > 200) {
      setErrors({ bio: "Bio is too long." });
      return;
    }

    onAddProfile(profile);
    setErrors({
      name: "",
      email: "",
      bio: "",
    });
    setProfile({
      name: "",
      email: "",
      bio: "",
    });
  };

  return (
    <div className="mb-8 p-6 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={profile.name}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="John Doe"
          />
        </div>
        <span className="text-sm font-bold text-red-600">{errors.name}</span>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={profile.email}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="johndoe@example.com"
          />
        </div>
        <span className="text-sm font-bold text-red-600">{errors.email}</span>
        <div>
          <label
            htmlFor="bio"
            className="block text-sm font-medium text-gray-700"
          >
            Bio
          </label>
          <textarea
            name="bio"
            id="bio"
            value={profile.bio}
            onChange={handleInputChange}
            rows="3"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="A short bio..."
          ></textarea>
        </div>
        <span className="text-sm font-bold text-red-600">{errors.bio}</span>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Profile
        </button>
      </form>
    </div>
  );
}

export default UserForm;
