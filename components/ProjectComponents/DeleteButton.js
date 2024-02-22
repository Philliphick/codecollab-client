"use client"
import React from 'react'
import axios from 'axios'

const DeletePost = ({ _id }) => {
  const deleteController = async () => {
    try {
      await axios.delete(`http://localhost:5001/delete/${_id}`, { withCredentials: true })
      // Refresh the page or do something else after the post is deleted
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div 
      className="bg-[#7A2410] hover:bg-red-800 text-white text-sm font-bold py-2 px-4 m-2 rounded"
      onClick={deleteController}
    >
      <button>Delete</button>
    </div>
  )
}

export default DeletePost