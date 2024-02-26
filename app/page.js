"use client";
import Image from "next/image";
import Dashboard from "@/components/MainComponents/Dashboard";
import LandingPage from "@/components/MainComponents/LandingPage";
import axios from "axios";
import FullPost from "@/components/ProjectComponents/FullPost";
import MakePost from "@/components/MainComponents/UpdatePost";
import ProjectCard from "@/components/ProjectComponents/ProjectCard";

import { useEffect, useState } from "react";

//bg-gradient-to-br from-gray-700 from-0% via-emerald-500 via-25% via-emerald-500 via-50% to-cyan-900 to-90% 

// secondary colour: [#7A2410]?






  
   
export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false)
      const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      
      try {
        
        const response = await axios.get(`http://localhost:5001/project/getprofile`, { withCredentials: true });
        console.log("Profile card response:",response.data.data)
        setUser(response.data.data);
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
  }, [])

  useEffect(() => {
    const setLogged = async () => {
      if(user) {
        setLoggedIn(true)
      }
    }
    setLogged();
  }, [user])

  return (
    <>
      {loggedIn ? 
        <main className="bg-gradient-to-br from-gray-700 from-0% via-cyan-900 via-40%  to-gray-900 to-90% flex min-h-screen flex-row flex-wrap items-center justify-between p-24 w-full h-full">
          <div className="flex-grow w-full h-full items-center justify-center">   
            <Dashboard />
          </div>
        </main>
        : 
        <LandingPage/>
      }
    </>
  );
}

   
