import React from "react";
import { Link } from "react-router-dom";
import Homepage from "./Homepage";

function Navbar() {
  return (
    <div>
        <nav className="navbar bg-dark">
        <div className="container-fluid">
          <Link to="/">
            Home</Link>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
        <Link to="/register"><button className="btn btn-success">Register Here</button></Link> <br />
        <br />
        <Link to="/login"><button className="btn btn-success">Sign In Here</button></Link>
      </nav>
      <Homepage />
      <Homepage />
    </div>
  );
}

export default Navbar;
