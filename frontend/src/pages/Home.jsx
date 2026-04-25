import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <Link to={"/signup"} style={{ fontSize: "24px", color: "white" }}>Sign Up</Link>
        </>
    )
}

export default Home