import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function home() {
  const [movies, setMovies] = useState([]);

  async function fetchMovie() {
    try {
      let response = await axios.get(
        "https://www.omdbapi.com/?apikey=c6c59dcf&s=action"
      );
      setMovies(response.data.Search);
    } catch (error) {
      console.log("Something went Wrong");
    }
  }
  useEffect(() => {
    fetchMovie();
  }, []);

  if (!movies) return <div>Loading...</div>;
  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <Link
          to={`/movie/${movie.Title}`}
          className="movie-items text-decoration-none text-dark text-center"
          key={index}
        >
          <img src={movie.Poster} alt={movie.Title} />
          <h5 className="p-2">{movie.Title}</h5>
          <p>{movie.Year}</p>
          <Link
            to={`/favorites/${movie.Title}`}
            className="btn text-bg-primary"
          >
            Add to Watchlist
          </Link>
        </Link>
      ))}
    </div>
  );
}

export default home;
