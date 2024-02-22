// this will be the profile that appears when you click pon profie on the full posts
"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UserProfile = ({ownerOfPost}) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const response = await axios.get(`http://localhost:5001/project/getUserById/${ownerOfPost}`);
            setUserData(response.data);
            
            console.log("userProfile user data pulled:",response.data)
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        }

        fetchUserData();
    } , [ownerOfPost])

    useEffect(() => {
        const slackButton = document.getElementById('slack-contact-button');
        // making contact button optional so when user doesnt have a contact option on slack?
        // change slack to linked in - user inputs the profile url into registration 
        if (slackButton) {
          slackButton.addEventListener('click', () => {
            window.open('https://slack.com/', '_blank');
            // You can replace 'https://slack.com/' with a Slack channel or DM link
          });
        }
        const telegramButton = document.getElementById('telegram-contact-button');
    if (telegramButton) {
      telegramButton.addEventListener('click', () => {
        window.open('https://t.me/USERNAME', '_blank');
        // Replace 'USERNAME' with the actual username of the user on Telegram
      });
    }
      }, []);
    if(userData) {
        console.log("userData", userData)
    }

  return (

    <>
    <div className='flex flex-col items-center space-y-4 mt-4 border-2 p-4 rounded bg-gray-200'>
        <h1 className='text-gray-800'>Profile</h1>
    <div className='text-gray-800'>{userData && <p>{userData[0].username || userData[0].username}</p>}</div>
    <div className='text-gray-800'>{userData && <p><strong>Email: </strong>{userData[0].email}</p>}</div>
    <button id="slack-contact-button" className="text-orange-500">Contact via Slack</button>
    <button id='telegram-contact-button' className="text-orange-500">Contact via Telegram</button>
    </div>
    
    </>

  )
}

export default UserProfile