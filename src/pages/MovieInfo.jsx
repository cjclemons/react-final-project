import React from "react";
import { Link, useParams } from "react-router-dom";
import Nav from "../components/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SelectedMovie from "../components/ui/SelectedMovie";
import Recommended from "../components/ui/Recommended";

const MovieInfo = ({keyGlobalParam}) => {
  const { imdbID } = useParams();
  console.log(keyGlobalParam)

  return (
    <div>
      <Nav
        homeRed={
          "nav__link--anchor link__hover-effect link__hover-effect--scarlet"
        }
        homeWhite={
          "nav__link--anchor link__hover-effect link__hover-effect--white"
        }
        homeContact={"nav__link--anchor nav__link--primary"}
      />
      <div className="container">
        <div className="row">
          <div className="movie__selected--top">
            <Link to="/s/${keyword}" className="search__link">
              <FontAwesomeIcon icon="arrow-left" />
            </Link>
            <Link to={`/s/${keyGlobalParam}`} className="search__link--text">
              <h2 className="">Back to Search Results</h2>
            </Link>
          </div>
          <SelectedMovie imdbID={imdbID} />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="movie__selected--top">
            <h2 className="movie__selected--title-top">Recommended</h2>
          </div>
          <Recommended keyGlobalParam={keyGlobalParam}/>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
