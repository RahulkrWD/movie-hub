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
    <div className="movie-details-container">
      <img className="movie-poster" src={movie.Poster} alt={movie.Title} />

      <div className="movie-info">
        <h1 className="movie-title">{movie.Title}</h1>
        <p className="movie-plot">{movie.Plot}</p>

        <div className="metadata-section">
          <div className="metadata-item">
            <strong>Released:</strong>
            <span>{movie.Released}</span>
          </div>
          <div className="metadata-item">
            <strong>Language:</strong>
            <span>{movie.Language}</span>
          </div>
          <div className="metadata-item">
            <strong>Writer:</strong>
            <span>{movie.Writer}</span>
          </div>
        </div>

        <div className="ratings-container">
          {movie.Ratings?.map((rating, index) => (
            <div className="rating-item" key={index}>
              <p>
                {rating.Source}: <b>{rating.Value}</b>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
