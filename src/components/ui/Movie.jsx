import React from "react";
import { useNavigate } from "react-router-dom";

const Movie = ({ movies }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="movies-list">
        {movies
          .map((movie, index) => (
            <div
              className="movie"
              key={index}
              onClick={() => navigate(`/i/${movie.imdbID}`)}
            >
              <img className="movie__img" src={movie.Poster} alt="" />
              <h4 className="scarlet">{movie.Title}</h4>
              <p className="movie-year">
                <b>Year:</b> {movie.Year}
              </p>
            </div>
          ))
          .slice(0, 6)}
      </div>
    </div>
  );
};

export default Movie;
