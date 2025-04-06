import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function MovieDetails() {
  const [movie, setMovie] = useState();
  const { name } = useParams();

  async function getMovieDetails() {
    try {
      let response = await axios.get(
        `https://www.omdbapi.com/?apikey=c6c59dcf&t=${name}`
      );
      setMovie(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("Something went wrong!");
    }
  }
  useEffect(() => {
    getMovieDetails();
  }, []);
  if (!movie) return <div>Loding..</div>;
  return (
    <div>
      <img src={movie.Poster} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      <p>{movie.Plot}</p>
      <span>Released: {movie.Released}</span>
      <p>Writer{}</p>
    </div>
  );
}

export default MovieDetails;
