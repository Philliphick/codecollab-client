"use client"
import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
import ApiClient from '../../../utils/ApiClient';
import Signup from '../registration/Signup';

const SignIn = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const apiClient = new ApiClient();
  

  const handleLogin = async (e) => {
    // const router = useRouter();
    e.preventDefault();
    try {
      const response = await apiClient.login(username, password);
      console.log(response);
      // router.push('/');

      
      // Handle response from server
    } catch (error) {
      console.error('Login failed:', error);
      // Display error messages to the user
    }
  };

  return (
    <>
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
              <a onClick={() => setShowSignUp(true)} href="#" className="font-semibold leacyan-6 hover:text-indigo-500"> Sign Up</a>
            </p>
          </div>
        </div>
      ) : (
        <Signup />
      )}
    </>
  );
}

export default SignIn;


// import React from 'react'
// import { useState } from 'react'
// import Signup from './Signup'
// import axios from 'axios';

// const SignIn = () => {
//     const [showSignUp, setShowSignUp] = useState(false);
//     const [password, setPassword] = useState('');
//     const [email, setEmail] = useState('');

    


//     const handleLogin = async (e) => {
//         e.preventDefault();
//         try {
//           const response = await axios.post('http://localhost:5001/auth/login', { email, password });
//           console.log(response.data); // Handle response from server
//         } catch (error) {
//           if (error.response) {
//             // The request was made and the server responded with a status code
//             if (error.response.status === 401) {
//               console.error('Login failed: Unauthorized - Invalid credentials');
//               // Display a message to the user indicating invalid credentials
//             } else if (error.response.status === 500) {
//               console.error('Login failed: Internal Server Error');
//               // Display a message to the user indicating a server error
//             } else {
//               console.error(`Login failed: ${error.response.status} - ${error.response.data.message}`);
//               // Handle other specific status codes and display relevant messages
//             }
//           } else if (error.request) {
//             // The request was made but no response was received
//             console.error('Login failed: No response from server');
//             // Display a generic error message indicating a network issue
//           } else {
//             // Something happened in setting up the request that triggered an error
//             console.error('Login failed:', error.message);
//             // Display a generic error message indicating an unexpected error
//           }
//         }
//       };


//   return (
//     <>
//     {!showSignUp ? (
// <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
//   <div class="sm:mx-auto sm:w-full sm:max-w-sm">
//     <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"/>
//     <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-300">Sign in to collaborate</h2>
//   </div>

//   <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//     <form onSubmit={handleLogin} class="space-y-6">
//       <div>
//         <label for="email" class="block text-sm font-medium leading-6 text-gray-300">Email address</label>
//         <div class="mt-2">
//           <input onChange={(e) => setEmail(e.target.value)} value={email} id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
//         </div>
//       </div>

//       <div>
//         <div class="flex items-center justify-between">
//           <label for="password" class="block text-sm font-medium leading-6 text-gray-300">Password</label>
//           <div class="text-sm">
//             <a href="#" class="font-semibold text-cyan-600 hover:text-cyan-500">Forgot password?</a>
//           </div>
//         </div>
//         <div class="mt-2">
//           <input onChange={(e) => setPassword(e.target.value)} id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
//         </div>
//       </div>

//       <div>
//         <button href="auth/login" type="submit" class="flex w-full justify-center rounded-md bg-cyan-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
//       </div>
//     </form>

//     <p class="mt-10 text-center text-sm text-gray-500">
//       Not a member?
//       <a onClick={() => setShowSignUp(true)} href="#" class="font-semibold leacyan-6 hover:text-indigo-500"> Sign Up</a>
//     </p>
//   </div>
// </div>
// ) : (
//   <Signup />
// )}
// </>
//   );
// }

// export default SignIn