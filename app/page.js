"use client";
import Image from "next/image";
import Dashboard from "@/components/MainComponents/Dashboard";
import LandingPage from "@/components/MainComponents/LandingPage";
import axios from "axios";
import { ShareableLinkGenerator as FullPost } from "@/components/ProjectComponents/FullPost";
import MakePost from "@/components/MainComponents/CreatePost";
import ProjectCard from "@/components/ProjectComponents/ProjectCard";

import { useEffect, useState } from "react";

//bg-gradient-to-br from-gray-700 from-0% via-emerald-500 via-25% via-emerald-500 via-50% to-cyan-900 to-90% 

// secondary colour: [#7A2410]?






  
   
export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState(null)
      // const [currentUserPosts, setCurrentUserPosts] = useState([]);
      // const [posts, setPosts] = useState([]);


      useEffect(() => {
        const fetchUser = async () => {
          
          try {
            
            const response = await axios.get(`http://localhost:5001/project/getprofile`, { withCredentials: true });
            console.log("User fetched:",response.data.data)
            console.log(response)
            setUser(response.data.data);
            console.log(user)
    
            // if (user) {
            //   setLoggedIn(true)
              
            // } else {
            //   setLoggedIn(false)
            // }
          } catch (error) {
            console.error(error);
          }
        }
        fetchUser()
        console.log(user)
      }, [])

      useEffect(() => {
        console.log(user);
      }, [user]);

  useEffect(() => {
    const setLogged = async () => {
      if(user) {
        setLoggedIn(true)
      }
    }
    setLogged();
  }, [user])

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:5001/project', { withCredentials: true });
  //       console.log(response.data.data)
  //       setPosts(response.data.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchPosts();
  //   const fetchCurrentUserPosts = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:5001/project/auth/getProjectByUserId', { withCredentials: true });
  //       console.log("fetchCurrentUserPosts:", response.data.data)
  //       setCurrentUserPosts(response.data.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchCurrentUserPosts();
  // }, [user]);

  return (
    <>
      {loggedIn ? 
        <main className="h-full bg-gradient-to-br from-gray-700 from-0% via-cyan-900 via-40%  to-gray-900 to-90% flex min-h-screen flex-row flex-wrap items-center justify-between p-24 w-full h-full">
          <div className="flex-grow w-full h-full items-center justify-center">   
            <Dashboard user={user}/>
          </div>
        </main>
        : 
        <LandingPage/>
      }
    </>
  );
}

   
