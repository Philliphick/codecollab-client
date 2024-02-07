import React from 'react'
import ProjectCard from './ProjectCard'
import MakePost from './MakePost'
import FullPost from './FullPost'
import Sidebar from './Sidebar'
import Login from './Login'
import Signup from './Signup'

const Dashboard = () => {
  return (
    <div className="flex w-full">
      <div className="w-1/5">
        <Sidebar />
      </div>
      <div className="w-4/5 space-y-4">
        <div className="p-4 bg-white shadow rounded">
          <ProjectCard />
        </div>
        <div className="p-4 bg-gray-200 shadow rounded">
          <MakePost />
        </div>
        <div className="p-4 bg-gray-300 shadow rounded">
          <FullPost />
        </div>
        <div className="p-4 bg-gray-300 shadow rounded">
          <Login />
        </div>
        <div className="p-4 bg-gray-300 shadow rounded">
          <Signup />
        </div>
      </div>
    </div>
  )
}

export default Dashboard