'use client'
import React, { useState } from 'react';

function MakeProfile() {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    githubLink: '',
    slack: '',
    twitter: '',
    location: '',
    photo: null
  });

  const handleChange = (event) => {
    if (event.target.name === 'photo') {
      setProfile({
        ...profile,
        photo: event.target.files[0]
      });
    } else {
      setProfile({
        ...profile,
        [event.target.name]: event.target.value
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(profile);
    //AXIOS ROUTING
  };

  return (
    <div className="w-full p-4 bg-gradient-to-br from-gray-700 via-cyan-900 via-40% to-gray-900 to-90% text-white shadow-2xl rounded mx-auto">
      <h1 className="text-center text-3xl font-bold mb-4">Profile Page</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="font-bold mb-1">Name</label>
          <input type="text" name="name" id="name" className="appearance-textfield p-2 border rounded" value={profile.name} onChange={handleChange} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="font-bold mb-1">Email</label>
          <input type="email" name="email" id="email" className="p-2 border rounded" value={profile.email} onChange={handleChange} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="githubLink" className="font-bold mb-1">GitHub Link</label>
          <input type="text" name="githubLink" id="githubLink" className="p-2 border rounded" value={profile.githubLink} onChange={handleChange} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="slack" className="font-bold mb-1">Slack</label>
          <input type="text" name="slack" id="slack" className="p-2 border rounded" value={profile.slack} onChange={handleChange} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="twitter" className="font-bold mb-1">Twitter</label>
          <input type="text" name="twitter" id="twitter" className="p-2 border rounded" value={profile.twitter} onChange={handleChange} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="location" className="font-bold mb-1">Location</label>
          <input type="text" name="location" id="location" className="p-2 border rounded" value={profile.location} onChange={handleChange} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="photo" className="font-bold mb-1">Photo</label>
          <input type="file" name="photo" id="photo" className="p-2 border rounded" onChange={handleChange} />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300 ease-in-out">Save</button>
      </form>
    </div>
  );
}

export default MakeProfile;