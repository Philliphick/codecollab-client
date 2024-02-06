import React from 'react'

 const Signup = () => {
  return (
    <div className ="border">
        <form>
            <div>Username: <input type="username" name="username" /></div>
            <div>Password: <input type="password" name="password" /></div>
            <div><button type="submit">Sign up</button></div>
        </form>
    </div>  )
}

export default Signup

