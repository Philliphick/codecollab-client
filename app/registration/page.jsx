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
    <div
      className="h-full w-full bg-gradient-to-br from-gray-700 from-0% via-cyan-900 via-40% to-gray-900 to-90% flex min-h-screen flex-row flex-wrap items-center justify-between p-24 flex-grow">      
    
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


