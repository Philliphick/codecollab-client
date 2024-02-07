import React from 'react'

const Login = () => {
  return (
    <div className="border p-4 max-w-md mx-auto mt-10 rounded">
      <form className="space-y-4">
        <div>
          <label className="font-bold mb-2 block">Username:</label>
          <input type="text" name="username" className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="font-bold mb-2 block">Password:</label>
          <input type="password" name="password" className="w-full p-2 border rounded" />
        </div>
        <div>
          <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login