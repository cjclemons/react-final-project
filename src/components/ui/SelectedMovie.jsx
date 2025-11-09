import axios from "axios";
import React, { useEffect, useState } from "react";
import Ratings from "./Ratings";

const SelectedMovie = ({ imdbID }) => {
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    async function getSelected() {
      const { data } = await axios.get(
        `http://www.omdbapi.com/?apikey=3fdcdaf3&i=${imdbID}`
      );
      setSelected(data);
      console.log(data);
    }

    getSelected();
  }, [imdbID]);

  useEffect(() => {
    if (selected.Genre && typeof selected.Genre === "string") {
      const genresArray = selected.Genre.split(",").map((g) => g.trim());
      console.log("Genres:", genresArray);
    }

    if (selected.Rated) {
      localStorage.setItem("selectedRated", selected.Rated);
    }
    if (selected.Genre) {
      localStorage.setItem(
        "selectedGenre",
        selected.Genre.split(",")[0].trim()
      );
    }
  }, [selected]);
  console.log(localStorage.getItem("selectedGenre"));

  return (
    <div>
      <div className="movie__selected">
        <figure className="movie__selected--figure">
          <img className="movie__selected--img" src={selected.Poster} alt="" />
        </figure>
        <div className="movie__selected--description">
          <h2 className="movie__selected--title scarlet">{selected.Title}</h2>
          <div className="movie__3r">
            <p className="movie__rated">Rated: {selected.Rated}</p>
            <p className="movie__released-date">
              Released: {selected.Released}
            </p>
            <p className="movie__runtime">Runtime: {selected.Runtime}</p>
          </div>
          <div className="movie__genre--ratings">
            <p className="movie__genre">Genre: {selected.Genre}</p>
            <Ratings />
          </div>
          <div className="movie__plot">
            <h3 className="movie__plot--title scarlet">Plot</h3>
            <p className="movie__plot--para">{selected.Plot}</p>
            <p className="movie__director">Director: {selected.Director}</p>
            <p className="movie__writer">Writers: {selected.Writer}</p>
            <p className="movie__actors">Actors: {selected.Actors}</p>
          </div>
          <button className="btn btn__rent">Rent Now</button>
        </div>
      </div>
    </div>
  );
};

export default SelectedMovie;
