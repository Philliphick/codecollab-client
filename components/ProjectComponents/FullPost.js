"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserProfile from '../UserComponents/UserProfile';

import Link from 'next/link';


const FullPost = ({ postId, onClose, user, post }) => {
  const [currentPost, setCurrentPost] = useState(post);
  const [ownerOfPost, setOwnerOfPost] = useState('');
  const [showUserProfile, setShowUserProfile] = useState(false);
  const [shareableLink, setShareableLink] = useState('');

  useEffect(() => {

    // get post data
    const fetchPost = async () => {
      try {
        // const response = await axios.get(`https://project-board-backend.onrender.com/${postId}`);
        const response = await axios.get(`http://localhost:5001/project/${postId}`);
        console.log("in fetch post", response.data);
        if (response.status !== 200 ) {
          throw new Error('Failed to fetch post');
        }
        const data = response.data[0];
        console.log("data", data);
        setCurrentPost(data);
        
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };
    
    if (!currentPost._id && postId) {
      fetchPost();
    }

    
  }, [postId, currentPost._id]);

  // get owner of post
  useEffect(() => {
    const assignUser = async () => {
      if (currentPost._id && currentPost.userId) {
        const usersIdForPost = currentPost.userId;
        console.log("cuttent post user id", currentPost.userId);
        console.log("currentPost", currentPost);
        console.log("usersIdForPost", usersIdForPost);
        
        try {
          const res = await axios.get(`http://localhost:5001/project/getUserById/${usersIdForPost}`);
          
          setOwnerOfPost(res.data[0]._id);
          // Update user data or do something with the response
        } catch (error) {
          console.error('Error fetching users posts:', error);
        }
      }
    };
    assignUser();
  }, [currentPost.userId]);
  console.log("owner of post", ownerOfPost);

  useEffect(() => {
    // Generate shareable link
    const generateShareableLink = () => {
          const baseUrl = window.location.origin; // Get the base URL from the current window location
          const dynamicRoute = `${baseUrl}/fullpostshare/${postId}`;
          setShareableLink(dynamicRoute);
        };

    if (!shareableLink && postId) {
      generateShareableLink();
    }
  }, [postId])



  const handleProfileClick = () => {
    console.log('User Profile Clicked:', ownerOfPost);
    setShowUserProfile(true); // Set showUserProfile state to true to display user profile
  };

  const handleCloseProfile = () => {
    setShowUserProfile(false); // Set showUserProfile state to false to hide user profile
  };

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains('full-post-overlay')) {
      onClose();
    }
  };

  return (
    // <div className='fixed left-0 top-0 h-full w-full bg-black bg-opacity-50'>
    <div className="fixed max-h-screen top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 z-50 ">
      <div className="bg-gray-800 rounded-md p-12 text-center text-white ring-2 ring-orange-700 flex flex-col justify-between items-center">
        <button className="absolute text-2xl top-2 right-2 text-orange-500" onClick={onClose}>X</button>

        <h1 className="text-3xl mb-4">{currentPost.name}</h1>
        <h2 className="text-xl mb-4">{currentPost.subheading}</h2>

        <hr className='mb-4 w-1/2 mx-auto text-orange-500'></hr>
        <div className="mb-6 text-2xl  mx-16 leading-loose">{currentPost.description}</div>
        <hr className='mb-4 w-1/2 mx-auto mb-6'></hr>

        <div className="mb-4 flex flex-row justify-center w-full gap-4">
          {/* <div className="mb-4">Expected timeframe: {currentPost.timeframe}</div> */}
          <div className=" flex flex-wrap gap-2">
            {post.tags.map((tag, idx) => (
              <span key={idx} className="bg-gradient-to-r from-cyan-500 to-gray-500 text-gray-900 px-2 py-2 text-xl rounded-md">{tag}</span>
            ))}
          </div>
          <a href={currentPost.repoLink} target='_blank'><img src="https://github.com/fluidicon.png" alt="GitHub logo" className="fixed w-11 h-11 hover:scale-110 "></img></a>


        </div>
        
        
        <div className=" flex flex-row justify-evenly  w-1/2" >
        {/* <div className="mb-4">Repo Link: {currentPost.repoLink}</div> */}
        <button className="bg-orange-500 text-white px-2 py-1 text-xl rounded-md mt-4 hover:bg-orange-600" onClick={handleProfileClick}>The Creator</button>
        {/* <a href={currentPost.repoLink} target='_blank'><img src="https://github.com/fluidicon.png" alt="GitHub logo" className="fixed w-12 h-12 m-2"></img></a> */}
        </div>
        {showUserProfile && (
          <div className='relative'>
            <UserProfile classList='animated animatedFadeIn transition-all duration-300' ownerOfPost={ownerOfPost} />
            <button className="text-yellow-500 text-xl absolute top-4 right-2" onClick={handleCloseProfile}>X</button>
          </div>
        )}
        {shareableLink && (
          <div className="text-white mt-4">
            <p className='text-xl'>Share the creators projects:</p>
            <Link href={`/fullpostshare/${currentPost.userId}`} target="_blank" className='text-cyan-500'>{shareableLink}</Link>

          </div>
        )}

      </div>


    </div>

    // </div>
  );
};

export default FullPost;
