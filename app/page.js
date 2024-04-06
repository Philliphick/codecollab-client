"use client";
import Image from "next/image";
import Dashboard from "@/components/MainComponents/Dashboard";
import axios from "axios";
import Link from "next/link";

import { useEffect, useState } from "react";
import Landing from "@/components/MainComponents/Landing";
  
   
export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState(null)
      // const [currentUserPosts, setCurrentUserPosts] = useState([]);
      // const [posts, setPosts] = useState([]);


      useEffect(() => {
        const fetchUser = async () => {
          console.log("uyghvguyuyg")

          try {
            
            const response = await axios.get(`https://localhost:5001/project/getprofile`, { withCredentials: true });
            console.log("User fetched:",response.data.data)
            console.log(response)
            setUser(response.data.data);
            console.log(user)
    
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

  

  return (
    <>
    {loggedIn ? <Dashboard user={user}/> : <Landing />}
            {/* <Dashboard user={user}/> */}
     
    </>
  );
}

   
