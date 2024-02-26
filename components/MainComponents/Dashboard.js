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

export const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [showUserProfile, setShowUserProfile] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [user, setUser] = useState({});
  const [currentUserPosts, setCurrentUserPosts] = useState([]);
  const [showCurrentUserPosts, setShowCurrentUserPosts] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
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
    const fetchCurrentUserPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5001/project/auth/getProjectByUserId', { withCredentials: true });
        console.log("fetchCurrentUserPosts:", response.data.data)
        setCurrentUserPosts(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCurrentUserPosts();
  }, [user]);
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
  return (
    <>
      {loggedIn ? (
        <><div className="mt-12 w-1/2 flex justify-center">
        </div><div className="mt-12 w-1/2 flex justify-center">
            {/* <ProfileCard user={user} /> */}
          </div><div className="flex">
            <div className="fixed right-4 top-2 h-full z-10">
              <button className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 m-2 rounded opacity-80">Add Project</button>
              <button onClick={handleProfileClick} onClose={handleCloseProfile} className='bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 m-2 rounded opacity-80'>Profile</button>
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
              <div className="flex flex-wrap gap-10">
                {filteredPosts.map(post => (
                  <ProjectCard key={post.id} post={post} user={user} selectedLanguages={selectedLanguages} />
                ))}
              </div>
              <div className="mt-12 w-5/6 flex justify-center">
                <MakePost />
              </div>
              <button onClick={handleUserPostsClick} className='bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 m-2 rounded opacity-80'>User Posts</button>
              {showCurrentUserPosts && (
                <div className='fixed left-0 top-0 h-full w-full bg-black bg-opacity-50 flex justify-center items-center text-white'>
                  <div className='bg-white p-4'>
                  {currentUserPosts.length > 0 ? (
                    <div>
                      {currentUserPosts.map(post => (
                        <div key={post.id}>
                          <h3>{post.title}</h3>
                          <p>{post.description}</p>
                          {/* Render other post details */}
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
          </div></>
      ) : (
        <><SignIn /></>
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

//   return (
// <>


//       {loggedIn ? (
//         <><div className="w-1/2 flex justify-center">

//         </div><div className="mt-8 w-1/2 flex justify-center">
//             {/* <ProfileCard user={user} /> */}


//           </div><div className="flex">
//             <div className="fixed right-4 top-2 h-full z-10">
//               <button className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 m-2 rounded opacity-80">Add Project</button>
//               <button onClick={handleProfileClick} onClose={handleCloseProfile} className='bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 m-2 rounded opacity-80'>Profile</button>
//               {/* {showUserProfile && (
//                 <>
//                   <ProfileCard user={user} />

//                 </>
//               )} */}
//             </div>
//             <div className="fixed left-0 top-0 h-full">
//               <Sidebar selectedLanguages={selectedLanguages} setSelectedLanguages={setSelectedLanguages} />
//             </div>
//             <div className="ml-28 flex flex-col items-center">
//               <div className="flex flex-wrap gap-10">
//                 {/* {filteredPosts.map(post => (
//                   <ProjectCard key={post.id} post={post} user={user} selectedLanguages={selectedLanguages} />
//                 ))} */}
//               </div>

//               <div className="mt-12 w-5/6 flex justify-center">
//                 <MakePost />
//               </div>
//               <button onClick={handleUserPostsClick} className='bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 m-2 rounded opacity-80'>User Posts</button>
//               {/* {showCurrentUserPosts && (
//                 <div className='fixed left-0 top-0 h-full w-full bg-black bg-opacity-50 flex justify-center items-center text-white'>
//                   <div className='bg-white p-4'>
//                   {currentUserPosts.length > 0 ? (
//                     <div>
//                       {currentUserPosts.map(post => (
//                         <div key={post.id}>
//                           <h3>{post.title}</h3>
//                           <h2>{post.subheading}</h2>
//                           <p>{post.description}</p>
//                           {/* Render other post details */}

//                         </div>
//                       ) : (
//                         <h3 className='bg-gradient-to-br ring ring-orange-700 ring-1 from-gray-700 via-cyan-900 via-40% to-gray-900 to-90% p-6 text-5xl text-center text-xl font-bold text-orange-600'>NO POSTS CURRENTLY</h3>
//                       )}
//                     </div>
//                   </div>
//                 )} */}
//                 {/* {showUserProfile && (
//                   <>
//                     <ProfileCard user={user} />

//                   </>
//                 )} */}
//               </div>
//               <div className="fixed left-0 top-0 h-full">
//                 <Sidebar selectedLanguages={selectedLanguages} setSelectedLanguages={setSelectedLanguages} />
//               </div>
//               <div className="ml-28 flex flex-col items-center">
//                 <h1 className="text-5xl mb-12 font-bold mb-4 text-orange-700 text-left  p-2 border-b-2 border-t-2 border-orange-700">CURRENT PROJECTS</h1>
//                 <div className="flex flex-wrap gap-10">
//                   {/* {filteredPosts.map(post => (
//                     <ProjectCard key={post.id} post={post} user={user} selectedLanguages={selectedLanguages} />
//                   ))} */}
//                 </div>

//                 <div className="mt-12 w-5/6 flex justify-center">
//                   <MakePost />
//                 </div>
                

//               </div>


//             </div></>
            


//             ) : (
//             <>
//               <SignIn />
//             </>
//             )}
//           </>

//   );

// };

// export default Dashboard;