import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import axios from "axios";
import { useParams } from "react-router-dom";

const Recommended = ({ keyGlobalParam }) => {
  const { imdbID } = useParams();
  const [keywordMovies, setKeywordMovies] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [genreMovies, setGenreMovies] = useState([]);
  const [sortedMovies, setSortedMovies] = useState([]);
  const [getKeyGlobalParam, setGetKeyGlobalParam] = useState([]);

  useEffect(() => {
    setGetKeyGlobalParam(localStorage.getItem("lastKeyword"));
    console.log(localStorage.getItem("lastKeyword"));
  },[]);

  useEffect(() => {
  async function getSelected() {
    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=3fdcdaf3&s=${
        keyGlobalParam || getKeyGlobalParam
      }`
    );
    setKeywordMovies(data.Search || []);
    console.log(data);
  }

    getSelected();
  }, [keyGlobalParam, getKeyGlobalParam]);

  useEffect(() => {
    async function getRecommended() {
      if (keywordMovies.length > 0) {
        const filterMovies = keywordMovies.filter(
          (result) => result.imdbID !== imdbID
        );

        const filterID = filterMovies.map((movie) => movie.imdbID);

        const filteredInfo = await Promise.all(
          filterID.map((imdbID) =>
            axios.get(`http://www.omdbapi.com/?apikey=3fdcdaf3&i=${imdbID}`)
          )
        );

        const recommended = filteredInfo.map((response) => response.data);
        setRecommendedMovies(recommended);
      }
    }
    getRecommended();
  }, [keywordMovies, imdbID]);

  useEffect(() => {
    function getGenres() {
      const genres = recommendedMovies.map((movie) => {
        if (movie.Genre && typeof movie.Genre === "string") {
          return movie.Genre.split(",").map((g) => g.trim());
        }
        return null
      });
      setGenreMovies(genres);
    }
    getGenres();
    
  }, [recommendedMovies]);
  console.log(genreMovies[0]);
  console.log(recommendedMovies);

  useEffect(() => {
    if (recommendedMovies.length > 0 && recommendedMovies[0].Genre) {
      console.log(recommendedMovies[0].Genre.split(",")[0]);
    }
  }, [recommendedMovies]);

  console.log(localStorage.getItem("selectedGenre"));

  useEffect(() => {
    function getSorted() {
      if (recommendedMovies.length > 0) {
        const selectedGenre = localStorage.getItem("selectedGenre");

        const sorted = recommendedMovies.filter((movie) => {
          if (movie.Genre) {
            const genres = movie.Genre.split(",").map((g) => g.trim());
            return genres.includes(selectedGenre);
          }
          return false;
        });
        setSortedMovies(sorted);
      }
    }
    getSorted();
  }, [recommendedMovies]);

  useEffect(() => {
    console.log(sortedMovies);
  }, [sortedMovies]);

  const recommended = sortedMovies.slice(0, 3);

  return (
    <div>
      <Movie movies={recommended} />
    </div>
  );
};

export default Recommended;
