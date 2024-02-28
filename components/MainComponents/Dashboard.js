'use client'
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ProjectCard from '../ProjectComponents/ProjectCard';
import Sidebar from './Sidebar';
import MakePost from './CreatePost'
import Link from 'next/link';
import SignIn from '../../app/login/page';
import MakeProfile from '../UserComponents/MakeProfile'
import ProfileCard from '../../app/pages/ProfileCard';
import Signup from '@/app/registration/page';
import UserPosts from '../UserPosts';
import DeletePost from '../ProjectComponents/DeleteButton';

export const Dashboard = ({ user }) => {
  const [posts, setPosts] = useState([]);
  const [currentUserPosts, setCurrentUserPosts] = useState(null);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [showUserProfile, setShowUserProfile] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  
  
  const [showCurrentUserPosts, setShowCurrentUserPosts] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  console.log("current User", user)
  
  const makePostRef = useRef(null);

  const userId = user._id
  console.log(userId)

  useEffect(() => {
    const setLogged = async () => {
      if(user) {
        setLoggedIn(true)
      }
    }
    setLogged();
  }, [user])


  useEffect(() => {
    console.log(userId)
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5001/project', { withCredentials: true });
        console.log(response.data.data)
        setPosts(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
    const fetchCurrentUserPosts = async () => {
      try {
        console.log("userId", userId)
        const response = await axios.get(`http://localhost:5001/project/getProjectByUserId/${userId}`, { withCredentials: true });
        console.log("fetchCurrentUserPosts:", response.data.data)
        const currentPostArr = []
        const length = response.data.data.length
        for(let i = 0; i < length; i++) {
          currentPostArr.push(response.data.data[i])
          console.log("currentPostArr", currentPostArr)
          setCurrentUserPosts(currentPostArr)
          
        }
       
        
        console.log("currentUserPosts", currentUserPosts)
      } catch (error) {
        console.error(error);
      }
    };
    fetchCurrentUserPosts();
  }, [user]);

  console.log(currentUserPosts)
  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5001/project/allusers', { withCredentials: true });
        setAllUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllUsers()
  }, [user])
  console.log("From fetchAlUser:", allUsers)
  console.log("from fetchUser:", user)
  console.log("logged in:", loggedIn)
  const handleProfileClick = () => {
    setShowUserProfile(!showUserProfile);
    console.log('Rendering user profile...');
    // Implement your logic to render the user's profile component here
  };
  const handleCloseProfile = () => {
    setShowUserProfile(false); // Set showUserProfile state to false to hide user profile
  };
  const handleUserPostsClick = () => {
    setShowCurrentUserPosts(!showCurrentUserPosts);
  }

  const handleCloseUserPost = () => {
    setShowCurrentUserPosts(false); // Set showUserProfile state to false to hide user profile
  };
  
  const filteredPosts = selectedLanguages.length > 0
    ? posts.filter(post => selectedLanguages.some(lang => post.tags.includes(lang)))
    : posts;
  return (
    <>
      {loggedIn ? (
        <><div className=" flex justify-center">
        </div><div className="mt-8 w-1/2 flex justify-center">
            {/* <ProfileCard user={user} /> */}
          </div><div className="flex">
            <div className="fixed right-6 top-2 h-full z-10">
              <button onClick={() => makePostRef.current.scrollIntoView({ behavior: 'smooth' })} className="bg-orange-800 hover:bg-orange-900 transition duration-300 text-white font-bold py-2 px-4 m-2 rounded opacity-90">Add Project</button>
              <button onClick={handleProfileClick} onClose={handleCloseProfile} className='bg-orange-800 hover:bg-orange-900 transition duration-300 text-white font-bold py-2 px-4 m-2 rounded opacity-90'>Profile</button>
              <button onClick={handleUserPostsClick} onClose={handleCloseUserPost} className='bg-orange-800 hover:bg-orange-900 transition duration-300 text-white font-bold py-2 px-4 m-2 rounded opacity-90'>Your Posts</button>
              {showUserProfile && (
                <>
                  <ProfileCard user={user} />
                </>
              )}
              {showCurrentUserPosts && (
                <div className=' h-fit w-full flex justify-center bg-gradient-to-br from-orange-900 to-gray-800 rounded-lg text-black'>
                  <div className='flex flex-col my-4'>
                  {currentUserPosts ? (
                    <div>
                      {currentUserPosts.map(post => (
                       <div className="my-2 bg-gradient-to-r from-gray-900 to-gray-800 text-white p-4 ring-1 ring-orange-700 ring-opacity-50 shadow-xl rounded-md max-w-xs mx-auto  hover:shadow-2xl hover:bg-gray-900 hover:ring-orange-500 transition duration-300 ease-in-out">
                       <h3 className="text-2xl text-gray-300 font-bold mb-1 p-2 text-center">{post.name}</h3>
                       <p className='text-gray-400 mb-2 p-2 text-center text-lg'>{post.description}</p>
                       <div className='flex flex-row gap-4 p-2 justify-center items-center'>
                        
                       <a href={post.repoLink}><img className='w-14 h-14 hover:scale-125' src='/github.png' alt="GitHub"></img></a>
                       <DeletePost _id={post._id}/>
                       </div>
                     </div>
                      ))}
                    </div>
                  ) : (
                    <h3 className='text-center text-xl font-bold text-black'>No posts found.</h3>
                  )}
                  </div>
                </div>
              )}
            </div>
            
            <div className="fixed left-0 top-0 h-full">
              <Sidebar selectedLanguages={selectedLanguages} setSelectedLanguages={setSelectedLanguages} />
            </div>
            <div className="ml-20 flex flex-col items-center">
              <h1 className="text-5xl text-orange-700 font-bold mb-10">Current Projects</h1>
              <div className="flex flex-wrap gap-10">
                {filteredPosts.map(post => (
                  <ProjectCard key={post.id} post={post} user={user} selectedLanguages={selectedLanguages} />
                ))}
              </div>
              
              
              {/* <Link href={{pathname: '/userposts', query: {userPosts: JSON.stringify(currentUserPosts)} }}>
                User Posts
              </Link> */}
              
                  
             
              
              
            </div>
          </div></>
      ) : (
        null
      )}
      <div className="mt-12 w-5/6 flex justify-center">
                <MakePost ref={makePostRef}/>
              </div>
              
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

