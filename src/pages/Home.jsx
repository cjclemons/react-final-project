import React, { useState, useEffect } from "react";
import Nav from "../components/Nav.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UndrawHomeCinema from "../movie assets/undraw_home-cinema_jdm1 scarlet red.svg";
import { useNavigate, useParams } from "react-router-dom";

const Home = ({ setKeyGlobalParam }) => {
  let navigate = useNavigate();

  const [searchKeyword, setSearchKeyword] = useState("");
  const [loading, setLoading] = useState();
  useEffect(() => {
    if (searchKeyword !== setKeyGlobalParam) {
      localStorage.setItem("lastKeyword", searchKeyword);
    }
  }, [searchKeyword]);
  function onSearch(event) {
    event.preventDefault();
    if (!searchKeyword) {
      console.log("Search input is empty");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setKeyGlobalParam(searchKeyword);
      navigate(`/s/${searchKeyword}`);
      setLoading(false);
    }, 1000);
  }

  function takeSearch(event) {
    setSearchKeyword(event.target.value);
  }

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
      <header className="container homepage">
        <div className="row homepage__content">
          <div className="header__content">
            <h1 className="scarlet header__title">
              Voted No. 1 in the world for movie rentals
            </h1>
            <h2 className="header__sub-title">
              Relax Rewatch with{" "}
              <label className="gold" for="">
                Reece's Movie Rentals
              </label>
            </h2>
            <form id="homeSearchForm" className="input__wrapper">
              <input
                className="home__input"
                type="search"
                placeholder="Search by Name or Keyword"
                value={searchKeyword}
                onChange={takeSearch}
                onKeyPress={(event) => event.key === "Enter" && onSearch(event)}
              />
              <button type="submit" onClick={onSearch} className="input__btn">
                {loading ? (
                  <FontAwesomeIcon
                    icon="fa-solid fa-spinner"
                    className="movies__loading--spinner"
                  />
                ) : (
                  <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                )}
              </button>
            </form>
          </div>
          <img className="homepage__img" src={UndrawHomeCinema} alt="" />
        </div>
      </header>
    </div>
  );
};

export default Home;
