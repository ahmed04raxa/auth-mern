import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { Navigate } from 'react-router-dom'

const Home = () => {
  const { isAuthenticated } = useContext(UserContext)
  if (!isAuthenticated) {
    return <Navigate to={"/login"} />
  }
  return (
    <>
      {
        isAuthenticated ? <button className='btn'>LOGOUT</button> : ""
      }
    </>

  )
}

export default Home