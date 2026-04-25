import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post("http://localhost:8000/api/v1/user/login", { email, password }, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json"
        }
      })
      toast.success(response.data.message)
      navigate("/")
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }
  return (
    <div className="container">
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>

        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Enter Email' />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder='Enter Password' />
        <button>Login</button>
        <p>Dont have a account <Link to={"/signup"}>Sign Up</Link></p>
      </form>
    </div>
  )
}

export default Login