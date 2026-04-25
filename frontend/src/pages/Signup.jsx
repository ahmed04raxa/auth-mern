import React, { useContext, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'


const Signup = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post("http://localhost:8000/api/v1/user/register",
                { name, email, password },
                {
                    withCredentials: true,
                    headers: { "Content-Type": "application/json" }
                })
            toast.success(response.data.message)
            setName("")
            setEmail("")
            setPassword("")
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
    
    return (
        <>
            <div className="container">
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Enter Name' />
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Enter Email' />
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder='Enter Password' />
                    <button>Sign Up</button>
                    <p>Already Have An Acoout <Link to={"/login"}>Login</Link></p>
                </form>
            </div>
        </>
    )
}

export default Signup