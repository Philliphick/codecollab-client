import React from 'react'
import Comments from './Comments'

const FullPost = () => {
  return (
    <div className="p-4 bg-white shadow rounded">
      <h1>FULL POST</h1>
      <div className="mb-2 font-bold">User Name</div>
      <div className="mb-2">Description</div>
      <div className="mb-2">Timeframe</div>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Tailwind_CSS_logo.svg/768px-Tailwind_CSS_logo.svg.png" className="w-10 h-3 mb-2"/>
      <Comments />
    </div>
  )
}

export default FullPost