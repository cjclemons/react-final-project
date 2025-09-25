import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Ratings = () => {
  const { imdbID } = useParams();
  const [rating, setRating] = useState([]);
  const [imdbRatings, setImdbRatings] = useState([]);
  async function getSelectedRating() {
    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=3fdcdaf3&i=${imdbID}`
    );
    setRating(data);
    console.log(Object.values(data.Ratings[0])[1]);
  }
  useEffect(() => {
    getSelectedRating();
  }, [imdbID]);

  useEffect(() => {
    setImdbRatings(Object.values(rating.Ratings ? rating.Ratings[0] : {})[1]);
  }, [rating]);

  return (
    <div className="movie__ratings">
      <p>Ratings: {imdbRatings} </p>
    </div>
  );
};

export default Ratings;
