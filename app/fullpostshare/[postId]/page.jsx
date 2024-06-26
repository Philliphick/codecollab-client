"use client";
import FullPost from '/components/ProjectComponents/FullPost';
import Link from 'next/link';
import axios from 'axios';
import { useEffect, useState } from 'react';



const ProjectDetails = ({params}) => {
    
    
    const id = params.postId;
    const [userPosts, setUserPosts] = useState([]);
    const [userData, setUserData] = useState({});


    

      useEffect(() => {
        const fetchPostByUser = async () => {
            try {
                console.log("userId", id)
                const response = await axios.get(`https://codecollab-server-jva6.onrender.com/project/getProjectByUserId/${id}`, { withCredentials: true });
                console.log("fetchCurrentUserPosts:", response.data.data)
                

                setUserPosts(response.data.data);

            } catch (error) {
                console.error(error);
            }
        };
        fetchPostByUser();
      }, [id])

      useEffect(() => {
        const fetchUserData = async () => {
          try {
            const response = await axios.get(`https://codecollab-server-jva6.onrender.comproject/getUserById/${id}`);
            setUserData(response.data[0]);
            
            console.log("userProfile user data pulled:",response.data)
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        }

        fetchUserData();
    } , [id])

    console.log(userData)
  return (
    <div className='flex flex-col items-center justify-center  w-full p-10 space-y-4 text-white bg-gray-900'>
        <h1 className="relative text-3xl font-bold text-orange-500 mb-2 text-center">PROJECTS OF : {userData?.name}</h1>
        {userData.telegramUsername && <p><span className=" text-gray-600 font-italic">Contact: </span> 
        <a href={`https://t.me/${userData.telegramUsername}/`} target='_blank' className="text-orange-500 hover:underline"> Telegram</a></p>}
            {userPosts.map((post, index) => (
                <div key={index} className="bg-gray-800 rounded-md p-10 shadow-md text-center  w-full ">
                    <h2 className="text-2xl font-bold text-orange-500 mb-4">{post.name}</h2>
                    <p className="text-gray-300 text-xl mb-4">{post.description}</p>
                    
                    
                    <a href={post.repoLink} className="text-orange-500 hover:underline" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                    <div className="mt-2 flex flex-wrap gap-2">
                        {post.tags.map((tag, idx) => (
                            <span key={idx} className="bg-orange-500 text-gray-900 px-2 py-1 rounded-md">{tag}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
  );
};

export default ProjectDetails;
