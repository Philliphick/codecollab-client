// "use client"
// // FullPost.js
// import React, { useEffect, useState } from 'react';
// import Comments from './Comments'; // Assuming you have a Comments component

// const FullPost = ({ postId, onClose, user, post }) => {
//   const [currentPost, setCurrentPost] = useState({});

//   useEffect(() => {
//     const fetchPost = async () => {
//       try {
//         const response = await fetch(`https://project-board-backend.onrender.com/${postId}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch post');
//         }
//         const data = await response.json();
//         setCurrentPost(data[0]);
//       } catch (error) {
//         console.error('Error fetching post:', error);
//       }
//     };

//     if (postId) {
//       fetchPost();
//     }
//   }, [postId]);

//   const handleClose = () => {
//     onClose();
//   };

//   // find which user the post belongs to
//  useEffect(() => {
//   const assignUser = async () => {
//     if (post._id && post.userId && user) {
//       const {usersIdForPost} = post.userId
//       try {
//         const res = await axios.get(`http://localhost:5001/project/getUserById/${usersIdForPost}`)
//         console.log(res.data)
//         return res.data

//       } catch (error) {
//         console.error('Error fetching user\'s posts:', error);
//       }
//     }
  
//   }
//   assignUser()
//  }, [])

//   const handleOutsideClick = (e) => {
//     if (e.target.classList.contains('full-post-overlay')) {
//       onClose();
//     }
//   };



//   return (
  
//     <div className="full-post-overlay absolute w-2/3 h-2/3 z-50" onClick={handleOutsideClick}>
//       <div className="full-post-content rounded-md p-4 bg-gray-800 text-white p-6 ring-1 ring-orange-700">
//         <button className="m-2 absolute top-2 right-2 text-orange-500" onClick={handleClose}>X</button>
//         <h1 className='text-xl'>{post.name}</h1>
//         <div className="mb-2 font-bold"><p>{post.description}</p></div>
//         <div className="mb-2"><p>Expected timeframe: {post.timeframe}</p></div>
//         <div className="mb-2"><p>Tags: {post.tags}</p></div>
//         <div className="mb-2"><p>Repo Link: {post.repoLink}</p></div>
//         <Comments postId={post._id} />
//       </div>
//     </div>
    
    
//   );
// };

// export default FullPost;
"use client"

import React, { useEffect, useState } from 'react';
import Comments from './Comments'; // Assuming you have a Comments component
import axios from 'axios';
import UserProfile from '../UserComponents/UserProfile';

const FullPost = ({ postId, onClose, user, post }) => {
  const [currentPost, setCurrentPost] = useState(post);
  const [ownerOfPost, setOwnerOfPost] = useState('');
  const [showUserProfile, setShowUserProfile] = useState(false);

  useEffect(() => {
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
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 z-50">
  <div className="bg-gray-800 rounded-md p-12 text-center text-white ring-2 ring-orange-700 flex flex-col justify-between items-center">
    <button className="absolute text-2xl top-2 right-2 text-orange-500" onClick={onClose}>X</button>
    <h1 className="text-2xl mb-4">{currentPost.name}</h1>
    <hr className='mb-4 w-1/2 mx-auto text-orange-500'></hr>
    <div className="mb-6 font-bold mx-10 leading-loose">{currentPost.description}</div>
    <div className="mb-4 flex flex-row gap-4">
    <div className="mb-4">Expected timeframe: {currentPost.timeframe}</div>
    <div className="mb-4">Tags: {currentPost.tags}</div>
    <div className="mb-4">Repo Link: {currentPost.repoLink}</div>
    </div>
    <button className="text-white font-italic bg-orange-500 font-bold py-2 px-4 rounded" onClick={handleProfileClick}>View the creator</button>
        {showUserProfile && (
          <div className='relative'>
            <UserProfile classList='animated animatedFadeIn transition-all duration-300' ownerOfPost={ownerOfPost} />
            <button className="text-yellow-500 text-xl absolute top-4 right-2" onClick={handleCloseProfile}>X</button>
          </div>
        )}
  </div>
</div> 
  );
};

export default FullPost;
