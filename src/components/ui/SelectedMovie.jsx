import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SelectedMovie = ({imdbID}) => {
  const [selected, setSelected] = useState([]);
  
  async function getSelected() {
  const {data} = await axios.get(
      `http://www.omdbapi.com/?apikey=3fdcdaf3&i=${imdbID}`
    );
    setSelected(data);
    console.log(data);
  }

  useEffect(() => {
    getSelected();
  }, [imdbID]);

  return (
    <div>
      <div className="movie__selected">
        <figure className="movie__selected--figure">
          <img className="movie__selected--img" src={selected.Poster} alt="" />
        </figure>
        <div className="movie__selected--description">
          <h2 className="movie__selected--title">{selected.Title}</h2>
          <div className="movie__3r">
            <p className="movie__rated">{selected.Rated}</p>
            <p className="movie__released-date">{selected.Released}</p>
            <p className="movie__runtime">{selected.Runtime}</p>
          </div>
          <div className="movie__genre--ratings">
            <p className="movie__genre">{selected.Genre}</p>
            <p className="movie__ratings"></p>
          </div>
          <div className="movie__plot">
            <h3 className="movie__plot--title">Plot</h3>
            <p className="movie__plot--para">{selected.Plot}</p>
            <p className="movie__actors">{selected.Actors}</p>
          </div>
          <button className="btn btn--primary btn--rent">Rent Now</button>
        </div>
      </div>
    </div>
  );
};

export default SelectedMovie;
