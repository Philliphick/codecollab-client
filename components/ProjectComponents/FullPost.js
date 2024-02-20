// "use client"
// import React from 'react'
// import Comments from './Comments'

// import { useState, useEffect } from 'react';
// import axios from 'axios';


// const FullPost = ({ postId }) => {

//   const [post, setPost] = useState({});

//   useEffect(() => {
//     if (postId) {
//       const id = postId;
      
//       axios.get(`https://project-board-backend.onrender.com/${id}`)
//         .then(res => {
//           const newPost = {
//             _id: res.data[0]._id,
//             description: res.data[0].description,
//             timeframe: res.data[0].timeframe,
//             comments: res.data[0].comments,
//             name: res.data[0].name,
//             tags: res.data[0].tags,
//             repoLink: res.data[0].repoLink

//           }

//           // const description = res.data[0].description;
//           // const currentPost = res.data[0];
//           setPost(newPost);

//           // console.log(description)
//         })
//         .catch(error => {
//           console.error('Error fetching post:', error);
//         });
//     }
//   }, [postId]);
  
//   console.log(post) 

//   useEffect(() => {
//     console.log("Post state updated:", post);
//   }, [post]);
  

 

 


//   return (
//     <>
//     <div className="p-4 bg-white shadow rounded">
//       <h1 className='text-xl'>{post && post.name}</h1>
//       <div className="mb-2 font-bold"><p>{post && post.description}</p></div>
//       <div className="mb-2"><p>Expected timeframe: {post.timeframe}</p></div>
//       <div className="mb-2"><p>Tags: {post.tags}</p></div>
//       <div className="mb-2"><p>Repo Link: {post.repoLink}</p></div>
      
//       <Comments />
      
//     </div>
//   </>
//   )
// }

// export default FullPost
"use client"
// FullPost.js
import React, { useEffect, useState } from 'react';
import Comments from './Comments'; // Assuming you have a Comments component

const FullPost = ({ postId, onClose }) => {
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://project-board-backend.onrender.com/${postId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch post');
        }
        const data = await response.json();
        setPost(data[0]);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    if (postId) {
      fetchPost();
    }
  }, [postId]);

  const handleClose = () => {
    onClose();
  };

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains('full-post-overlay')) {
      onClose();
    }
  };

  return (
  
    <div className="full-post-overlay absolute w-2/3 h-2/3 z-50" onClick={handleOutsideClick}>
      <div className="full-post-content rounded-md p-4 bg-gray-800 text-white p-6 ring-1 ring-orange-700">
        <button className="m-2 absolute top-2 right-2 text-orange-500" onClick={handleClose}>X</button>
        <h1 className='text-xl'>{post.name}</h1>
        <div className="mb-2 font-bold"><p>{post.description}</p></div>
        <div className="mb-2"><p>Expected timeframe: {post.timeframe}</p></div>
        <div className="mb-2"><p>Tags: {post.tags}</p></div>
        <div className="mb-2"><p>Repo Link: {post.repoLink}</p></div>
        <Comments postId={post._id} />
      </div>
    </div>
    
    
  );
};

export default FullPost;
