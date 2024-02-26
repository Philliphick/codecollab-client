'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectCard from '../ProjectComponents/ProjectCard';
import Sidebar from './Sidebar';
import MakePost from './UpdatePost'
import Link from 'next/link';
import SignIn from '../../app/pages/login/SignIn';
import MakeProfile from '../UserComponents/MakeProfile'
import ProfileCard from '../../app/pages/ProfileCard';
import Signup from '@/app/pages/registration/Signup';







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
  const [showUserProfile, setShowUserProfile] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [user, setUser] = useState({});
  const [currentUserPosts, setCurrentUserPosts] = useState([]);
  const [showCurrentUserPosts, setShowCurrentUserPosts] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  useEffect(() => {

    const fetchUser = async () => {

      try {
        console.log("Hello world from fetchuser")
        const response = await axios.get(`http://localhost:5001/project/getprofile`, { withCredentials: true });

        setUser(response.data.data);

        if (user) {
          setLoggedIn(true)
        } else {
          setLoggedIn(false)
        }

      } catch (error) {
        console.error(error);
      }
    }
    fetchUser()

  }, [])

  useEffect(() => {
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
   
  }, [user]);

  useEffect(() => {
    const fetchCurrentUserPosts = async () => {
      try { 
        const userId = user._id;
        console.log(userId)
        const res = await axios.get(`http://localhost:5001/project/getProjectByUserId/${userId}`, { withCredentials: true });
        console.log("fetchCurrentUserPosts:", res)
        setCurrentUserPosts(res.data.data);
      }
       catch (error) {
        console.error(error);
      }
    
    }
    fetchCurrentUserPosts();
  }, [user]);

  console.log("from users posts:", currentUserPosts)

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

  const filteredPosts = selectedLanguages.length > 0
    ? posts.filter(post => selectedLanguages.some(lang => post.tags.includes(lang)))
    : posts;

    const handleCloseProjects = () => {
      setShowProjects(false); // Set showUserProfile state to false to hide user profile
    };

  return (
<>


      {loggedIn ? (
        <><div className="w-1/2 flex justify-center">

        </div><div className="mt-8 w-1/2 flex justify-center">
            {/* <ProfileCard user={user} /> */}
          

            </div><div className="flex">
              <div className="fixed right-4 top-2 h-full z-10">
                <button className="bg-orange-700 hover:bg-cyan-700 transition duration-300 ease-in-out text-white font-bold py-2 px-4 m-2 rounded opacity-80">ADD PROJECT</button>
                <button onClick={handleUserPostsClick} className='bg-orange-700 hover:bg-cyan-700 transition duration-300 ease-in-out text-white font-bold py-2 px-4 m-2 rounded opacity-80'>YOUR PROJECTS</button>
                <button onClick={handleProfileClick} onClose={handleCloseProfile} className='bg-orange-700 hover:bg-cyan-700 transition duration-300 ease-in-out text-white font-bold py-2 px-4 m-2 rounded opacity-80'>PROFILE</button>

                {showCurrentUserPosts && (
                  <div className='fixed left-0 top-0 h-full w-full bg-black bg-opacity-60 flex flex-col  justify-center items-center'>
                    <h1 className="text-5xl mb-12 font-bold mb-4 text-orange-600 text-left  p-2 border-b-2 border-orange-600 ">YOUR POSTS</h1>
                    <div className='bg-gradient-to-br from-gray-700 via-cyan-900 via-40% to-gray-900 to-90% p-4'>
                    <button className="text-orange-600 text-2xl absolute top-1/3 right-1/3 ring-1 ring-orange-700 px-2" onClick={handleCloseProfile}>X</button>
                      {currentUserPosts.length > 0 ? (
                        <div className=''>
                          
                          {currentUserPosts.map(post => (
                            <ProjectCard key={post.id} post={post} user={user} selectedLanguages={selectedLanguages} />
                          ))}
                        </div>
                      ) : (
                        <h3 className='bg-gradient-to-br ring ring-orange-700 ring-1 from-gray-700 via-cyan-900 via-40% to-gray-900 to-90% p-6 text-5xl text-center text-xl font-bold text-orange-600'>NO POSTS CURRENTLY</h3>
                      )}
                    </div>
                  </div>
                )}
                {showUserProfile && (
                  <>
                    <ProfileCard user={user} />

                  </>
                )}
              </div>
              <div className="fixed left-0 top-0 h-full">
                <Sidebar selectedLanguages={selectedLanguages} setSelectedLanguages={setSelectedLanguages} />
              </div>
              <div className="ml-28 flex flex-col items-center">
                <h1 className="text-5xl mb-12 font-bold mb-4 text-orange-700 text-left  p-2 border-b-2 border-t-2 border-orange-700">CURRENT PROJECTS</h1>
                <div className="flex flex-wrap gap-10">
                  {filteredPosts.map(post => (
                    <ProjectCard key={post.id} post={post} user={user} selectedLanguages={selectedLanguages} />
                  ))}
                </div>

                <div className="mt-12 w-5/6 flex justify-center">
                  <MakePost />
                </div>
                

              </div>


            </div></>
            


            ) : (
            <>
              <SignIn />
            </>
            )}
          </>

  );

};

export default Dashboard;