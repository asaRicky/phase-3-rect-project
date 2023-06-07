import React from 'react'
import { Link } from 'react-router-dom'

function Homepage() {

  return (
    <div className='homenav'>
      <nav className='top'>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/registerpage">sign up</Link>
        <Link to="/login">Login</Link>
      </nav>
      <h1 className='bottom'>Welcome to Filmhub! Here, you'll discover an array of incredible movies to explore and add to your watchlist. We strive to provide ultimate movie expirience and hope tou'll thoroughly enjoy every moment of it. </h1>
    </div>
  )
}

export default Homepage;
