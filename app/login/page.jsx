"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import ApiClient from '../../utils/ApiClient';
import Signup from '../registration/page';
import Link from 'next/link';

const SignIn = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const apiClient = new ApiClient();
  
  const router = useRouter();
  const handleLogin = async (e) => {
    
    console.log("hello from handleLogin")
    e.preventDefault();
    try {
      const response = await apiClient.login(username, password);
      console.log(response);
      router.push('/');

      
      // Handle response from server
    } catch (error) {
      console.error('Login failed:', error);
      // Display error messages to the user
    }
  };

  return (
    <main className="h-full bg-gradient-to-br from-gray-700 from-0% via-cyan-900 via-40%  to-gray-900 to-90% flex min-h-screen flex-row flex-wrap items-center justify-between p-24 w-full h-full">
    <div className="flex-grow w-full h-full items-center justify-center">
      {!showSignUp ? (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            {/* <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"/> */}
            <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-300">Sign in to collaborate</h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="username" className="block font-medium leading-6 text-gray-300">Username</label>
                <div className="mt-2">

                  <input onChange={(e) => setUsername(e.target.value)} value={username} id="username" name="username" type="text" autoComplete="username" required className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>

                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block font-medium leading-6 text-gray-300">Password</label>
                  
                </div>
                <div className="mt-2">

                  <input onChange={(e) => setPassword(e.target.value)} id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>

                </div>
              </div>

              <div>
                <button type="submit" className="flex w-full justify-center rounded-md bg-cyan-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
              </div>
            </form>

            <p className="mt-10 text-center text-lg text-gray-300">
              Not a member?
             <Link href="/registration" onClick={() => setShowSignUp(true)} className="font-semibold leacyan-6 hover:text-indigo-500"> Sign Up</Link>
            </p>
          </div>
        </div>
      ) : (
        <Signup />
      )}
      </div>
    </main>  );
}

export default SignIn;

