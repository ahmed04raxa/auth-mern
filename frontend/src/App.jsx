import React, { useContext, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { Toaster } from 'react-hot-toast'
import axios from 'axios'
import { UserContext } from './context/UserContext'
import Navbar from './components/Navbar'

const App = () => {
  const { isAuthenticated, setIsAuthenticated, user, setUser } = useContext(UserContext)
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/user/getUserDetails", {
          withCredentials: true
        })
        setIsAuthenticated(true)
        setUser(response.data.user)
      } catch (error) {
        isAuthenticated(false)
        setUser(null)
      }
    }
    fetchUser()
  }, [])

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </>
  )
}

export default App