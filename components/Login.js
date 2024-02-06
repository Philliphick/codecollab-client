import React from 'react'

const Login = () => {
  return (
    <div className ="border">
        <form>
            <div>Username: <input type="text" name="username" /></div>
            <div>Password: <input type="password" name="password" /></div>
            <div><button type="submit">Login</button></div>
        </form>
    </div>
  )
}

export default Login