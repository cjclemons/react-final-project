import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Movie from "./ui/Movie";

const Movies = ({ keyword }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function getMovies() {
    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=3fdcdaf3&s=${keyword}`
    );
    
    setMovies(data.Search);
    if (data.Response === "False") {
      alert("No movies found. Please try a different keyword.");
      setMovies([]);
    }
  }

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(async () => {
      await getMovies();
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [keyword]);

  function filterMovies(filter) {
    if (filter === "OLDEST") {
      const sortedMovies = [...movies].sort((a, b) => a.Year - b.Year);
      setMovies(sortedMovies);
    }
    if (filter === "LATEST") {
      const sortedMovies = [...movies].sort((a, b) => b.Year - a.Year);
      setMovies(sortedMovies);
    } else {
      return;
    }
  }

  return (
    <>
      <div className="search__filter-results">
        <h1 className="search__results">
          Search results: {""}
          <span className="gold quotes">{keyword ? `${keyword}` : ""}</span>
        </h1>
        <select
          id="filter"
          defaultValue="FILTER"
          onChange={(e) => {
            filterMovies(e.target.value);
          }}
        >
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
          ) : ( <Movie movies={movies}/>
          )}
        </div>
      </div>
    </>
  );
};

export default Movies;
