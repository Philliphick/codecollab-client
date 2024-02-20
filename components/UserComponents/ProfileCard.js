import React from 'react';
import Image from 'next/image';
import { profileImage } from '../../src/genericProfileImage'; 

function ProfileCard() {
  const profile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    githubLink: 'https://github.com/johndoe',
    slack: 'johndoe',
    twitter: '@johndoe',
    location: 'San Francisco, CA',
    photo: profileImage.find(img => img.name === 'genericMale').image
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
          <p><span className="font-bold">Slack:</span> {profile.slack}</p>
          <p><span className="font-bold">Twitter:</span> {profile.twitter}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;