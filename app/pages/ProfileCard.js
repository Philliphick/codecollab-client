"use client"
import React from 'react';
import Image from 'next/image';
import { profileImage } from '../../src/genericProfileImage';
import Dashboard from '../../components/MainComponents/Dashboard';
import { useState, useEffect } from 'react';
import axios from 'axios';
import MakeProfile from '../../components/UserComponents/MakeProfile';
import Logout from '@/components/MainComponents/Logout';

export const ProfileCard = ({ users }) => {
  console.log(users)
  const [user, setUser] = useState([]);
  const [showUpdate, setShowUpdate] = useState(false);


  useEffect(() => { 
    
    const fetchUser = async () => {
      
      try {
        console.log("Hello world from fetchuser")
        const response = await axios.get(`https://project-board-backend.onrender.com/project/getprofile`, {withCredentials: true});
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
    telegram: user.telegramUsername,
    
  };

  return (
    <div className="w-full leading-loose p-4 bg-gradient-to-br from-gray-700 via-cyan-900 via-40% to-gray-900 to-90% text-white shadow-2xl rounded mx-auto">
      
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <h2 className='flex text-xl text-orange-500 font-italic '>@{profile.username}</h2>
          <div>
            <h2 className="text-xl font-bold">{profile.name}</h2>
            <p>{profile.location}</p>
          </div>
        </div>
        <div className='flex flex-col mx-4'>
          {profile?.githubLink && <p className=''><span className="font-bold">GitHub:</span> <a href={profile.githubLink} target="_blank" className="text-blue-400 hover:underline">{profile.githubLink}</a></p>}
      
          {profile?.telegram && <p className='mb-2'><span className="font-bold">Telegram:</span> <a href={`https://t.me/${profile.telegram}`} target='_blank' className="text-blue-400 hover:underline">{profile.telegram}</a></p>}
          <div className='flex flex-row justify-evenly w-full'>
          <button className="text-white  font-italic bg-orange-500 w-fit font-bold px-2 rounded" onClick={handleUpdateButton}>Update</button>
          <Logout />
          </div>
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