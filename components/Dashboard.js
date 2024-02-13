"use client"
import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'
import MakePost from './MakePost'
import FullPost from './FullPost'
import Sidebar from './Sidebar'
import Login from './Login'
import Signup from './Signup'
import axios from 'axios'
import Delete from './Delete'


const Dashboard = () => {

// const [posts, setPosts] = useState([]);

// useEffect(() => {
//   // Fetch posts
//   axios.get('http://localhost:5000/')
//   .then(res => {
//     const { data } = res.data;
//     setPosts(data);
//     console.log(data)
  
//   })
  
//   .catch(error => {
//     console.error('Error fetching books:', error);
//   });
  
// }, []) 





return (
  <>
 <div className="flex w-full">
       <div className="w-1/5">
        <Sidebar />
       </div>
     <div className="w-4/5 space-y-4">
       <div className="p-4 bg-white shadow rounded">
          <ProjectCard />
         </div>
         <div className="p-4 bg-gray-200 shadow rounded">
           <MakePost />
         </div>
         <div className="p-4 bg-gray-300 shadow rounded">
           <FullPost />
         </div>
         <div className="p-4 bg-gray-300 shadow rounded">
           <Login />
         </div>
         <div className="p-4 bg-gray-300 shadow rounded">
           <Delete />
         </div>
         <div className="p-4 bg-gray-300 shadow rounded">
           <Signup />
         </div>
       </div>
     </div>
  
    {/* {posts.map(post => (
      <div key={post._id}>
        <h2>{post.name}</h2>
        <p>Description: {post.description}</p>
        <p>Tags: {post.tags.join(', ')}</p>
        <p>Repo Link: {post.repoLink}</p>
        <p>Timeframe: {post.timeframe}</p>
      </div>
    ))} */}
  </>

    
  )
}

export default Dashboard