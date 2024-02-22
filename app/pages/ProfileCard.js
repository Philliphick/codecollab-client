"use client"
import React from 'react';
import Image from 'next/image';
import { profileImage } from '../../src/genericProfileImage'; 
import Dashboard from '../../components/MainComponents/Dashboard';
import { useState, useEffect } from 'react';
import axios from 'axios';
import MakeProfile from '../../components/UserComponents/MakeProfile';

export const ProfileCard = ({ users }) => {
  console.log(users)
  const [user, setUser] = useState([]);
  const [showUpdate, setShowUpdate] = useState(false);


  useEffect(() => { 
    
    const fetchUser = async () => {
      
      try {
        console.log("Hello world from fetchuser")
        const response = await axios.get(`http://localhost:5001/project/getprofile`, {withCredentials: true});
        console.log("Profile card response:",response.data.data)
        setUser(response.data.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchUser()
  }, [])
  
  const handleUpdateButton = () => {
    setShowUpdate(true);
    console.log('Updating user profile...');
    // Implement your logic to update the user's profile here
  };

  const profile = {
    name: user.name,
    email: user.email,
    username: user.username,
    githubLink: user.githubLink,
    
  };

  return (
    <div className="w-full p-4 bg-gradient-to-br from-gray-700 via-cyan-900 via-40% to-gray-900 to-90% text-white shadow-2xl rounded mx-auto">
      
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <Image src={profile.photo} alt={profile.name} width={100} height={100} className="rounded-full" />
          <div>
            <h2 className="text-xl font-bold">{profile.name}</h2>
            <p>{profile.location}</p>
          </div>
        </div>
        <div>
          <p><span className="font-bold">Email:</span> {profile.email}</p>
          <p><span className="font-bold">GitHub:</span> <a href={profile.githubLink} className="text-blue-500 hover:underline">{profile.githubLink}</a></p>
          {user.slack && <p><span className="font-bold">Slack:</span> {user.slack}</p>}
          <p><span className="font-bold">Slack:</span> {profile.slack}</p>
          <p><span className="font-bold">Twitter:</span> {profile.twitter}</p>
          {/* <button className="text-white font-italic bg-orange-500 font-bold py-2 px-4 rounded" onClick={handleUpdateButton}>Edit</button> */}
        {showUpdate && (
          <div className='relative'>
            <MakeProfile user={user} />
            {/* <button className="text-yellow-500 text-xl absolute top-4 right-2" onClick={handleCloseProfile}>X</button> */}
          </div>
        )}

        
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;