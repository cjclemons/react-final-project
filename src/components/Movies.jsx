import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useParams } from "react-router-dom";

const Movies = ({ keyword }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState();

  async function getMovies() {
    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=3fdcdaf3&s=${keyword}`
    );

    setMovies(data.Search);
  }

  useEffect(() => {
    
    setTimeout(() => {
      getMovies();
    }, 1000);
    setLoading(false);
  });

  return (
    <>
      <div class="search__filter-results">
        <h1 class="search__results">
          Search results: {""}
          <style color="#f9a825">{keyword ? `${keyword}` : ""}</style>
        </h1>
        <select id="filter" onchange="filterMovies(event)">
          <option value="FILTER" disabled selected>
            Filter
          </option>
          <option value="OLDEST">Oldest</option>
          <option value="LATEST">Latest</option>
        </select>
      </div>
      <div className="row movies">
        <div className="movies-list">
          {loading ? (
            <FontAwesomeIcon
              icon="fa-solid fa-spinner"
              className="movies__loading--spinner"
            />
          ) : (
            movies
              .map((movie) => (
                <div className="movie">
                  <img className="movie__img" src={movie.Poster} alt="" />
                  <h4 className="scarlet">{movie.Title}</h4>
                  <p className="movie-year">
                    <b>Year:</b> {movie.Year}
                  </p>
                </div>
              ))
              .slice(0, 6)
          )}
        </div>
      </div>
    </>
  );
};

export default Movies;
