import React from 'react'
import Comments from './Comments'

export const MakePost = () => {
  return (
<div>
<form>
    <div>User Name</div>
    <div>Description<input type="text" name="description" /></div>
    <div>Timeframe
        <select name="timeframe">
          <option value="1">1 week</option>
          <option value="2">2 - 4 weeks</option>
          <option value="3">1 - 2 months</option>
          <option value="4">3 months</option>
        </select>
      </div>
      <div>Tech Choices
        <div><input type="checkbox" name="tech" value="react"/>React</div>
        <div><input type="checkbox" name="tech" value="angular"/>Angular</div>
        <div><input type="checkbox" name="tech" value="vue"/>Vue</div>
        <div><input type="checkbox" name="tech" value="svelte"/>Svelte</div>
      </div>
      <button type="submit">Submit</button></form>

    </div>
  )
}

export default MakePost