import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Search from "./Search";
import Allmovies from "./Allmovies";


function Dashboard() {

    const navigate = useNavigate()
    const [movies, setMovies] = useState([])

  function handleDeleteMovie(id) {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);
  }

    useEffect(() => {
    fetch("http://127.0.0.1:9292/movies")
    .then((response) => response.json())
    .then((data) => setMovies(data))
    }, [])

    function handleSearch(query) {
    fetch (`http://127.0.0.1:9292/search?query=${query}`) 
    .then((response) => response.json())
    .then((results) => {
      setMovies(results)
      navigate("/dashboard")
    })
    }

    

    return(
        <div>
        <nav className="dashnav">
            <Link to="/addmovie">Add Movie</Link>
            <Search onSearch={handleSearch}/>
        </nav>
          <Allmovies movies={movies} handleDeleteMovie={handleDeleteMovie}/>
        </div>
    )
}

export default Dashboard