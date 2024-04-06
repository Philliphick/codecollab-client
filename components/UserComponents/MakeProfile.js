'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
function MakeProfile({user}) {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    githubLink: '',
    telegramUsername: '',
    twitter: '',
    location: ''
  });
  useEffect(() => {
    setProfile({
      name: user.name || '',
      email: user.email || '',
      githubLink: user.githubLink || '',
      telegramUsername: user.telegramUsername || '',
      twitter: user.twitter || '',
      location: user.location || ''
    });
  }, [user]);
  const handleChange = (event) => {
    setProfile({
      ...profile,
      [event.target.name]: event.target.value
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.patch(`https://codecollab-server-jva6.onrender.com/project/makeProfile/${user._id}`, profile);
      console.log(response.data);
      setProfile(response.data.user);
    } catch (error) {
      console.error('Failed to update profile', error);
    }
  };
  return (
    <div className="w-full p-4 bg-gradient-to-br from-gray-700 via-cyan-900 to-gray-900 text-white shadow-2xl rounded mx-auto overflow-y-auto max-h-[700px]">     
      <h1 className="text-center text-3xl font-bold mb-4">Profile Page</h1>
      <form onSubmit={handleSubmit} className="space-y-4 w-[300px]">
        <div className="flex flex-col">
          <label htmlFor="name" className="font-bold mb-1">Name</label>
          <input type="text" name="name" id="name" className="appearance-none p-2 border rounded text-black" value={profile.name} onChange={handleChange} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="font-bold mb-1">Email</label>
          <input type="email" name="email" id="email" className="appearance-none p-2 border rounded text-black" value={profile.email} onChange={handleChange} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="githubLink" className="font-bold mb-1">GitHub Link</label>
          <input type="text" name="githubLink" id="githubLink" className="appearance-none p-2 border rounded text-black" value={profile.githubLink} onChange={handleChange} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="telegramUsername" className="font-bold mb-1">Telegram Username</label>
          <input type="text" name="telegramUsername" id="telegramUsername" className="appearance-none p-2 border rounded text-black" value={profile.telegramUsername} onChange={handleChange} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="twitter" className="font-bold mb-1">Twitter</label>
          <input type="text" name="twitter" id="twitter" className="appearance-none p-2 border rounded text-black" value={profile.twitter} onChange={handleChange} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="location" className="font-bold mb-1">Location</label>
          <input type="text" name="location" id="location" className="appearance-none p-2 border rounded text-black" value={profile.location} onChange={handleChange} />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300 ease-in-out">Save</button>
      </form>
    </div>
  );
}
export default MakeProfile;