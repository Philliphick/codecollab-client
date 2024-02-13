"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import FullPost from './FullPost';
import DeletePost from './DeleteButton';

const ProjectCard = () => {

  const [posts, setPosts] = useState([]);
  const [postId, setPostId] = useState('');

  useEffect(() => {
    // Fetch posts
    axios.get('https://project-board-backend.onrender.com')
    .then(res => {
      const { data } = res.data;
      setPosts(data);
      console.log(data)
      
    })

    .catch(error => {
      console.error('Error fetching projects:', error);
    });
    
  }, []) 

  const handleButtonClick = (currentId) => {
    setPostId(currentId);
    console.log({postId})
  }


  return (
    <>
    
    {posts.map(post => (
  <div className="p-4 bg-white shadow rounded" key={post._id}>
    <h2 className="text-xl mb-2">{post.name}</h2>
    <h3 className="text-lg mb-2">Tags: {post.tags.join(', ')}</h3>
    <p className="mb-2">Repo: {post.repoLink}</p>
    <p className="mb-2">Timeframe: {post.timeframe}</p>
    <button onClick={() => handleButtonClick(post._id)}>View Full Post</button>
    <DeletePost _id={post._id} />
  </div>
))}

        {postId && <FullPost postId={ postId } />}

   </> 
  )
}

export default ProjectCard

