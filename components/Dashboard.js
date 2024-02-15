'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectCard from './ProjectCard';
import Sidebar from './Sidebar';
import MakePost from './MakePost'




const Dashboard = () => {

const [posts, setPosts] = useState([]);

useEffect(() => {
  // Fetch posts
  axios.get('http://localhost:5001/api', {withCredentials: true})
  .then(res => {
    const { data } = res.data;
    setPosts(data);
    console.log(data)
  
  })
  
  .catch(error => {
    console.error('Error fetching books:', error);
  });
  
}, []) 

useEffect(() => {
  axios.get('http://localhost:5001/api/private-route', {withCredentials: true})
  .then(res => {
    console.log(res.data)
  })
  .catch(error => {
    console.error('Error fetching projects:', error);
  })
})





return (
  <>
 <div className="flex w-full">
       <div className="w-1/5">
        <Sidebar />
        {/* <ProtectedPage /> */}
       </div>
     <div className="w-4/5 space-y-4">
       <div className="p-4 bg-white shadow rounded">
          <ProjectCard />
         </div>
         <div className="p-4 bg-gray-200 shadow rounded">
           <MakePost />
         </div>
       </div>
     </div>
  
    
  </>

    
  )
}

export default Dashboard

