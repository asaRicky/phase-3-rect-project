import React from 'react';
import { Link } from "react-router-dom";
import Homepage from './Homepage';

function Navbar() {


  return (
    <div>
      <nav className='navbar bg-dark'>
        <div className='container-fluid'>
            <Link to="/">
                Home 
                <i class="fa-duotone fa-house"></i>
            </Link>
            <form className='d-flex' role="search">
                <input className='form-control me-2' type="search" placeholder='search' aria-label="search" /> 
                <button className="btn btn-outline-success" type="submit">Search <i class="fa-duotone fa-magnifying-glass"></i></button>
            </form>
        </div>
        <Link to="/register"><button className='btn btn-success'>sign-up<i class="fa-duotone fa-user"></i></button></Link> <br />
        <br />
        <Link to="/login"><button className='btn btn syccess'>sign-in <i class="fa-duotone fa-user"></i></button></Link>
      </nav>
      <Homepage />
    </div>
  )
}

export default Navbar;

