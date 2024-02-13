"use client"
import React from 'react'
import axios from 'axios'

const DeletePost = ({ _id }) => {
  const deleteController = async () => {
    try {
      await axios.delete(`http://localhost:5001/delete/${_id}`)
      // Refresh the page or do something else after the post is deleted
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div 
      className="bg-red-500 text-white font-bold py-2 px-4 rounded cursor-pointer"
      onClick={deleteController}
    >
      <button>Delete</button>
    </div>
  )
}

export default DeletePost