'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectCard from './ProjectCard';
import Sidebar from './Sidebar';
import MakePost from './MakePost'

export const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5001/');
        console.log(response.data.data)
        setPosts(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts = selectedLanguages.length > 0 
    ? posts.filter(post => selectedLanguages.some(lang => post.tags.includes(lang)))
    : posts;

  return (
    <div className="flex space-x-4">
      <Sidebar selectedLanguages={selectedLanguages} setSelectedLanguages={setSelectedLanguages} />
      <div className="flex flex-wrap space-x-4">
        {filteredPosts.map(post => (
          <ProjectCard key={post.id} post={post} selectedLanguages={selectedLanguages} />
        ))}
      </div>
      <div><MakePost /></div>
      
    </div>
  );
};

export default Dashboard;