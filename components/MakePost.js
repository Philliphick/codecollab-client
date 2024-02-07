import React from 'react'


export const MakePost = () => {
  return (
    <div className="p-4 bg-white shadow rounded">
      
      <h1>MAKE POST</h1>
      <form>
        <div className="mb-2 font-bold">User Name</div>
        <div className="mb-2">
          Description
          <input type="text" name="description" className="ml-2 p-1 border rounded" />
        </div>
        <div className="mb-2">
          Timeframe
          <select name="timeframe" className="ml-2 p-1 border rounded">
            <option value="1">1 week</option>
            <option value="2">2 - 4 weeks</option>
            <option value="3">1 - 2 months</option>
            <option value="4">3 months</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default MakePost