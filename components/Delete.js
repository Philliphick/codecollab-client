"use client"
import React from 'react'
import axios from 'axios'

export const Delete = ({ id }) => {
  const deleteController = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/deleteController/${id}`)
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
      Delete
    </div>
  )
}

export default Delete

// const removePlant = (id) => {
//     props.client.deletePlant(id, props.token).then(() => {
//       refreshList();
//     });
//   };
