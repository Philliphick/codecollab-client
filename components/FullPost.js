"use client"
import React from 'react'
import Comments from './Comments'

import { useState, useEffect } from 'react';
import axios from 'axios';


const FullPost = ({ postId }) => {

  const [post, setPost] = useState([]);

  useEffect(() => {
    if (postId) {
      const id = postId;
      
      axios.get(`https://project-board-backend.onrender.com${id}`)
        .then(res => {
          const newPost = {
            _id: res.data[0]._id,
            description: res.data[0].description,
            timeframe: res.data[0].timeframe,
            comments: res.data[0].comments,
            name: res.data[0].name,
            tags: res.data[0].tags,
            repoLink: res.data[0].repoLink

          }

          // const description = res.data[0].description;
          // const currentPost = res.data[0];
          setPost(newPost);

          // console.log(description)
        })
        .catch(error => {
          console.error('Error fetching post:', error);
        });
    }
  }, [postId]);
  
  console.log(post) 

  useEffect(() => {
    console.log("Post state updated:", post);
  }, [post]);
  

 

 


  return (
    <>
    <div className="p-4 bg-white shadow rounded">
      <h1 className='text-xl'>{post.name}</h1>
      <div className="mb-2 font-bold"><p>{post.description}</p></div>
      <div className="mb-2"><p>Expected timeframe: {post.timeframe}</p></div>
      <div className="mb-2"><p>Tags: {post.tags}</p></div>
      <div className="mb-2"><p>Repo Link: {post.repoLink}</p></div>
      
      <Comments />
      <div>
        <DeleteButton />
      </div>
    </div>
  </>
  )
}

export default FullPost