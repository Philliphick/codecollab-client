"use client"
import React, { useState } from 'react';
import ApiClient from '../../utils/ApiClient';
import { useRouter } from 'next/navigation';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();
  const apiClient = new ApiClient();

  const handleSignup = async (e) => {
    
    e.preventDefault();
    try {
      console.log("trying to Sign up")
      const response = await apiClient.register(username, email, password);
      console.log(response);
      
      // Redirect the user to the login page
      router.push('/login');

    } catch (error) { 
      console.error('Signup failed:', error);

      if (error.response && error.response.status === 400) {
        // Handle 400 Bad Request error
        alert('Signup failed: ' + error.response.data.message);
      } else {
        // Handle other errors
        alert('Signup failed. Please try again later.');
      }
      // Display error messages to the user
    }
  }

  return (
    <div className="p-4 max-w-md mx-auto mt-10 rounded">
      <form className="space-y-4" onSubmit={handleSignup}>
        <h2 className="text-2xl mb-2 text-center text-gray-300 font-bold tracking-wide border-b-2 pb-2 pb-4 border-gray-400">Create Your Collaborator Account</h2>
        <div>
          <label className="text-lg font-bold mb-2 block text-gray-300">Username:</label>
          <input onChange={(e) => setUsername(e.target.value)} value={username} type="text" name="username" className="w-full p-2 border rounded text-gray-900" />
        </div>
        <div>
          <label className="text-lg font-bold mb-2 block text-gray-300">Email:</label>
          <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" name="email" className="w-full p-2 border rounded text-gray-900" />
        </div>
        <div>
          <label className="text-lg font-bold mb-2 block text-gray-300">Password:</label>
          <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" name="password" className="w-full p-2 border rounded text-gray-900" />
          <p className='mt-2 text-gray-300'>Password must be 8-20 characters long and contain at least one letter, one number, and one special character.</p>
        </div>
        <div>
          <button type="submit" className="text-lg font-bold w-full mt-2 p-2 bg-cyan-700 text-white rounded">Sign Up</button>
        </div>
      </form>
    </div>
  )
}

export default Signup;


// "use client"
// import React from 'react'
// import axios from 'axios';
// import { useState } from 'react';
// // import { useRouter } from 'next/router';

// const Signup = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   // const router = useRouter(); // initialise router hook
 
//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5001/auth/register', { username, email, password });
//       console.log(response.data);
//       // Display a success message to the user
       

//       // Redirect the user to the login page
      
//       // router.push('http://localhost:5001/auth/login');

//     } catch (error) {
//       if (error.response) {
//         // The request was made and the server responded with a status code
//         if (error.response.status === 401) {
//           console.error('Signup failed: Unauthorized - Invalid credentials');
//           // Display a message to the user indicating invalid credentials
//         } else if (error.response.status === 500) {
//           console.error('Signup failed: Internal Server Error');
//           // Display a message to the user indicating a server error
//         } else {
//           console.error(`Signup failed: ${error.response.status} - ${error.response.data.message}`);
//           // Handle other specific status codes and display relevant messages
//         }
//       } else if (error.request) {
//         // The request was made but no response was received
//         console.error('Signup failed: No response from server');
//         // Display a generic error message indicating a network issue
//       } else {
//         // Something happened in setting up the request that triggered an error
//         console.error('Signup failed:', error.message);
//         // Display a generic error message indicating an unexpected error
//       }
//     }
//   }

//   return (
//     <div className="p-4 max-w-md mx-auto mt-10 rounded">
//       <form className="space-y-4" onSubmit={handleSignup}>
//         <h2 className="text-2xl mb-2 text-center text-gray-300 font-bold tracking-wide border-b-2 pb-2 pb-4 border-gray-400">Create Your Collaborator Account</h2>
//         <div>
//           <label className="text-lg font-bold mb-2 block text-gray-300">Username:</label>
//           <input onChange={(e) => setUsername(e.target.value)} value={username} type="text" name="username" className="w-full p-2 border rounded text-gray-900" />
//         </div>
//         <div>
//           <label className="text-lg font-bold mb-2 block text-gray-300">Email:</label>
//           <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" name="email" className="w-full p-2 border rounded text-gray-900" />
//         </div>
//         <div>
//           <label className="text-lg font-bold mb-2 block text-gray-300">Password:</label>
//           <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" name="password" className="w-full p-2 border rounded text-gray-900" />
//         </div>
//         <div>
//           <button type="submit" className="text-lg font-bold w-full mt-2 p-2 bg-cyan-700 text-white rounded">Sign Up</button>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default Signup