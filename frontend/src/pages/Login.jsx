import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="container">
      <h1>Log In</h1>
      <form>
        <input type="text" placeholder='Enter Name' />
        <input type="text" placeholder='Enter Email' />
        <input type="text" placeholder='Enter Password' />
        <button>Sign Up</button>
        <p>Dont have a account <Link to={"/signup"}>Sign Up</Link></p>
      </form>
    </div>
  )
}

export default Login