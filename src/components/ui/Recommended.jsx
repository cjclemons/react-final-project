import React, { useContext, useEffect, useState } from "react";
import Movie from "./Movie";
import axios from "axios";
import { useParams } from "react-router-dom";

const Recommended = ({keyGlobalParam}) => {
    
    
  const { imdbID } = useParams();
  const [keywordMovies, setKeywordMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [keywordGenre, setKeywordGenre] = useState([]);
  const [recommendedMovies, setRecommededMovies] = useState([]);

  async function getSelected() {
    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=3fdcdaf3&s=${keyGlobalParam}`
    );
    setKeywordMovies(data.Search);
    console.log(keyGlobalParam);
  }

  useEffect(() => {
    getSelected();
  }, [keyGlobalParam]);

//   const variable = keywordMovies.filter(
//     (result) => keywordMovies.imdbID !== imdbID
// //   );
//   console.log(variable);

//   async function getGenre({ variable }) {
//     const { keywordinfo } = await axios.get(
//       `http://www.omdbapi.com/?apikey=3fdcdaf3&i=${movie.imdbID}`
//     );
//     setKeywordGenre(keywordinfo.Genre[0]);
//   }

  //     const {filteredinfo} = await axios.get(
  //         `http://www.omdbapi.com/?apikey=3fdcdaf3&i=${movie.imdbID}`
  //       );
  //        setFilteredMovies(filteredinfo.Genre)
  //   };
  //   function recommendMovies() {
  //     setRecommededMovies = {
  //       filteredMovies.map(
  //         (movie) =>(
  //           keywordGenre === filteredMovies.Genre[0] ||
  //           keywordGenre === filteredMovies.Genre[1] ||
  //           keywordGenre === filteredMovies.Genre[2]
  //       ))
  //     }
  //
  //   ihog4oi
  // for loop. for the variable doesnt equal the imdbID of the selected movie.
  // Loop through the keywordMovies array and display the movies that dont match the imdbID
  // of the selected movie.
  // Gather them all in an array.
  // Take the imdbID of each movie and put it into the api:
  //  `http://www.omdbapi.com/?apikey=3fdcdaf3&i=${imdbID}`
  // if the data.Genre[0] of the selected movie matches the data.Genre[0] of the movies in the keywordMovies array,
  // then display those movies in the Recommended section.
  //     setSelected(data);

  //     console.log(data);
  //   } // --- PRACTICE ---

  return (
    <div>
      {filteredMovies.map((movie) => (
        <Movie movies={filteredMovies} />
      ))}
    </div>
  );
};

export default Recommended;
