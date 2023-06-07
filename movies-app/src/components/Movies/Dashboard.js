import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Search from './search';
import Allmovies from './Allmovies';

function Dashboard() {

    const navigate = useNavigate()
    const [movies, setMovies] = useState([])

    function handleDeleteMovie(id) {
        const updateMovies = movies.filter((movie) => movie.id !== id);
        setMovies(updateMovies);
    }
    useEffect(() => {
        fetch('https://ldata-j87g.onreader.com/movies')
        .then((response) => response.json())
        .then((data) => setMovies(data))
    }, [])

    function handleSearch(pquery) {
        fetch ('https://data-j87g.onrender.com/search?query=${query}')
        .then((response) => response.json())
        .then((result) => {
            setMovies(results)
            navigate("/dashboard")
        })
    }


  return (
    <div>
      <nav className='dashnav'>
        <Link to="./addmovie">Add Movie</Link>
        <Search onsearch={handleSearch}/>
      </nav>
      <Allmovies movies={movies} handleDeleteMovies={handleDeleteMovie}/>
    </div>
  )
}

export default Dashboard
