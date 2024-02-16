"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import FullPost from './FullPost';
import DeletePost from './DeleteButton';
import MakePost from './MakePost'



export const ProjectCard = ({ post, selectedLanguages }) => {

  const [postId, setPostId] = useState(null);

  if (selectedLanguages.length > 0 && !selectedLanguages.some(lang => post.tags.includes(lang))) {
    return null;
  }
  console.log(post)

  const handleButtonClick = () => {
    if (postId === post._id) {
      setPostId(null);  // Hide the FullPost component if it's already visible
    } else {
      setPostId(post._id);  // Show the FullPost component if it's not already visible
    }
  };

  return (
    <div className="p-4 border border-gray-400 shadow-xl rounded-md max-w-xs mx-auto hover:scale-110 hover:shadow-2xl hover:bg-gray-300 transition duration-300 ease-in-out">
      <h2 className="text-xl text-gray-800 font-bold mb-1 p-2 text-center">{post.name}</h2>
      <p className="text-gray-800 mb-2">{post.description}</p>
      <a href={post.repoLink} className="text-blue-700 mb-2 block">GitHub</a>
      <div className="mb-2 ml-2">
        {post.tags.map(tag => (
          <span key={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{tag}</span>
        ))}
      </div>
      {/* <span className="block mb-2">{post.timeframe}</span> */}
      <div className=''>
      <button onClick={() => handleButtonClick(post._id)} className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 ml-2 rounded opacity-75">
        View Full Post
      </button>
      <button className="">
      <DeletePost _id={post._id} />
      </button>
      </div>
      {postId === post._id && <FullPost _id={postId} />}
      
    </div>
  );
};


export default ProjectCard;
