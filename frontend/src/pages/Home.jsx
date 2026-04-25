import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

const Home = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(UserContext)
  const navigate = useNavigate()
  if (!isAuthenticated) {
    return <Navigate to={"/login"} />
  }
  const logout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/user/logout",
        {},
        { withCredentials: true }
      )

      toast.success(response.data.message)

      setIsAuthenticated(false)
      setUser(null)
      navigate("/login")

    } catch (error) {
      console.log(error)

      const message =
        error?.response?.data?.message ||
        error?.message ||
        "Logout failed"

      toast.error(message)
    }
  }
  return (
    <>
      {
        isAuthenticated ? <button className='btn' onClick={logout}>LOGOUT</button> : ""
      }
    </>

  )
}

export default Home