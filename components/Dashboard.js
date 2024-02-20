'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectCard from './ProjectCard';
import Sidebar from './Sidebar';
import MakePost from './MakePost'
import Link from 'next/link';
import SignIn from './SignIn';
import MakeProfile from './EditProfile'
import ProfileCard from './ProfileCard';




// const Dashboard = () => {

// const [posts, setPosts] = useState([]);
// const [selectedLanguages, setSelectedLanguages] = useState([]);

// useEffect(() => {
//   // Fetch posts
//   axios.get('http://localhost:5001/api', {withCredentials: true})
//   .then(res => {
//     const { data } = res.data;
//     setPosts(data);
//     console.log(data)
  
//   })
  
//   .catch(error => {
//     console.error('Error fetching books:', error);
//   });
  
// }, []) 

// useEffect(() => {
//   axios.get('http://localhost:5001/api/private-route', {withCredentials: true})
//   .then(res => {
//     console.log(res.data)
//   })
//   .catch(error => {
//     console.error('Error fetching projects:', error);
//   })
// })





// return (
//   <>
//  <div className="flex w-full">
//        <div className="w-1/5">
//         <Sidebar />
//         {/* <ProtectedPage /> */}
//        </div>
//      <div className="w-4/5 space-y-4">
//        <div className="p-4 bg-white shadow rounded">
//           <ProjectCard />
//          </div>
//          <div className="p-4 bg-gray-200 shadow rounded">
//            <MakePost />
//          </div>
//        </div>
//      </div>
  
    
//   </>

    
//   )
// }

// export default Dashboard

// ====================================

export const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [showSignIn, setShowSignIn] = useState(false);
  

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5001/', {withCredentials: true});
        console.log(response.data.data)
        setPosts(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
  axios.get('http://localhost:5001/api/private-route', {withCredentials: true})
  .then(res => {
    console.log(res.data)
  })
  .catch(error => {
    console.error('Error fetching projects:', error);
  })
})

  const filteredPosts = selectedLanguages.length > 0 
    ? posts.filter(post => selectedLanguages.some(lang => post.tags.includes(lang)))
    : posts;

    return (
     <>
      <div className="mt-12 w-1/2 flex justify-center">
      <MakeProfile />
          </div>
          <div className="mt-12 w-1/2 flex justify-center">
      <ProfileCard />
          </div>

      {!showSignIn ? (

      <div className="flex">
        <div className="fixed right-4 top-2 h-full z-10">
          <button className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 m-2 rounded opacity-80">Add Project</button>
          <a href="/api/auth/login" className='bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 m-2 rounded opacity-80'>Login</a>
        </div>
        <div className="fixed left-0 top-0 h-full">
          <Sidebar selectedLanguages={selectedLanguages} setSelectedLanguages={setSelectedLanguages} />
        </div>
        <div className="ml-28 flex flex-col items-center">
          <div className="flex flex-wrap gap-10">
            {filteredPosts.map(post => (
              <ProjectCard key={post.id} post={post} selectedLanguages={selectedLanguages} />
            ))}
          </div>
          <div className="mt-12 w-5/6 flex justify-center">
            <MakePost />
          </div>
        </div>
      
      <div className="fixed right-4 top-2 h-full z-10">
            <button className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 m-2 rounded opacity-80">Add Project</button>
            <button onClick={() => setShowSignIn(true)} className='bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 m-2 rounded opacity-80'>Login</button>
          </div>

          </div>
          
          
      ) : (
        <SignIn />
      )}
      </>
      
      );
    
  // return (
  //   <div className="flex space-x-4">
  //     <Sidebar selectedLanguages={selectedLanguages} setSelectedLanguages={setSelectedLanguages} />
  //     <div className="flex flex-wrap space-x-4 space-y-4">
  //       {filteredPosts.map(post => (
  //         <ProjectCard key={post.id} post={post} selectedLanguages={selectedLanguages} />
  //       ))}
  //     </div>
  //     <div>
  //       {/* <Link href="/makePost" passHref>
  //         <a className="px-2 py-1 text-sm bg-blue-500 text-white rounded">Create Project</a>
  //       </Link> */}
  //       <MakePost />
  //     </div>
  //   </div>
  // );
};

export default Dashboard;