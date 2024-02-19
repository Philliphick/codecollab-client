import React from 'react'

const Signup = () => {
  // return (
  //   <div className="border p-4 max-w-md mx-auto mt-10 rounded">
  //     <form className="space-y-4">
  //       <div>
  //         <label className="font-bold mb-2 block">Username:</label>
  //         <input type="text" name="username" className="w-full p-2 border rounded" />
  //       </div>
  //       <div>
  //         <label className="font-bold mb-2 block">Email:</label>
  //         <input type="email" name="email" className="w-full p-2 border rounded" />
  //       </div>
  //       <div>
  //         <label className="font-bold mb-2 block">Password:</label>
  //         <input type="password" name="password" className="w-full p-2 border rounded" />
  //       </div>
  //       <div>
  //         <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Sign Up</button>
  //       </div>
  //     </form>
  //   </div>
  // )
  return (
    <div className="p-4 max-w-md mx-auto mt-10 rounded">
      <form className="space-y-4">
        <h2 className="text-2xl mb-2 text-center text-gray-300 font-bold tracking-wide border-b-2 pb-2 pb-4 border-gray-400">Create Your Collaborator Account</h2>
        <div>
          <label className="text-lg font-bold mb-2 block text-gray-300">Username:</label>
          <input type="text" name="username" className="w-full p-2 border rounded text-gray-900" />
        </div>
        <div>
          <label className="text-lg font-bold mb-2 block text-gray-300">Email:</label>
          <input type="email" name="email" className="w-full p-2 border rounded text-gray-900" />
        </div>
        <div>
          <label className="text-lg font-bold mb-2 block text-gray-300">Password:</label>
          <input type="password" name="password" className="w-full p-2 border rounded text-gray-900" />
        </div>
        <div>
          <button type="submit" className="text-lg font-bold w-full mt-2 p-2 bg-cyan-700 text-white rounded">Sign Up</button>
        </div>
      </form>
    </div>
  )
}

export default Signup