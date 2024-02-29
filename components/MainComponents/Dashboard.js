'use client'
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ProjectCard from '../ProjectComponents/ProjectCard';
import Sidebar from './Sidebar';
import MakePost from './CreatePost'
import Link from 'next/link';
import ProfileCard from '../../app/pages/ProfileCard';
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



  const userId = user._id
  console.log(userId)



  useEffect(() => {
    const setLogged = async () => {
      if (user) {
        setLoggedIn(true)
      }
    }
    setLogged();
  }, [user])


  useEffect(() => {
    console.log(userId)
    const fetchPosts = async () => {
      try {
        console.log("trying to fetch posts")
        const response = await axios.get('https://project-board-backend.onrender.com/project', { withCredentials: true });
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
        const response = await axios.get(`https://project-board-backend.onrender.com/project/getProjectByUserId/${userId}`, { withCredentials: true });
        console.log("fetchCurrentUserPosts:", response.data.data)
        const currentPostArr = []
        const length = response.data.data.length
        for (let i = 0; i < length; i++) {
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
        const response = await axios.get('https://project-board-backend.onrender.com/project/allusers', { withCredentials: true });
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

  // Scroll to top function
  const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function scrollToBottom() {
    if (!isBrowser()) return;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const bottomPosition = documentHeight - windowHeight;
    window.scrollTo({ top: bottomPosition, behavior: 'smooth' });
  }

  const filteredPosts = selectedLanguages.length > 0 ? posts.filter(post => selectedLanguages.some(lang => post.tags.includes(lang)))
    : posts;

  console.log(filteredPosts)


  return (
    <div className=''>
      {loggedIn ? (
        <><div className=" flex justify-center">
        </div><div className="mt-8 w-1/2 flex justify-center">
            {/* <ProfileCard user={user} /> */}
          </div><div className="flex">
            <div className="fixed right-6 top-2 h-full z-10">

              <div className="fixed right-6 top-2 h-full z-10">
                <button onClick={scrollToBottom} className="bg-orange-800 hover:bg-orange-900 transition duration-300 text-white font-bold py-2 px-4 m-2 rounded opacity-90">
                  Add Project</button>
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
                                <DeletePost _id={post._id} />
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

              <button
                className="absolute bottom-8 right-0 bg-orange-700 rounded-full px-4 py-2 mr-2 z-50 items-center text-xs text-white flex opacity-90"
                onClick={scrollToTop}
              >Back to Top</button>
            </div>

            <div className="invisible md:visible fixed left-0 top-0 h-full">
              <Sidebar selectedLanguages={selectedLanguages} setSelectedLanguages={setSelectedLanguages} className="" />
            </div>
            <div className="ml-0 md:ml-8 flex flex-col items-center">
              <h1 className="text-5xl text-orange-700 font-bold mb-10">Current Projects</h1>
              <div className="flex flex-wrap gap-10">
                {filteredPosts?.map(post => (

                  <ProjectCard key={post._id} post={post} user={user} />
                  // <div>
                  //   {post}
                  // </div>
                ))}
              </div>


            </div>
          </div></>
      ) : (
        null
      )}
      <div className=" items-center mx-auto mt-12 w-5/6 flex justify-center">
        <MakePost id="makepost" />
      </div>

    </div>
  );

};
export default Dashboard;

