import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useParams } from "react-router-dom";

const SearchInput = () => {
  const navigate = useNavigate();

  const [searchKeyword, setSearchKeyword] = useState("");
  const [loading, setLoading] = useState();
  function onSearch(event) {
    event.preventDefault();
    if (!searchKeyword) {
      console.log("Search input is empty");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      navigate(`/s/${searchKeyword}`);
      setLoading(false);
    },2000);
  }

  function updateSearch(event) {
    setSearchKeyword(event.target.value);
  }
  return (
    <>
      <div className="search">
        <h1 className="search__title">Browse our movies</h1>
        <form id="searchForm" className="search__input--wrapper">
          <input
            className="search__input"
            type="search"
            id="searchInput"
            placeholder="Search by Name or Keyword"
            value={searchKeyword}
            onChange={updateSearch}
            onKeyPress={(event) => event.key === "Enter" && onSearch(event)}
          />
          <button type="submit" className="search__icon">
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
    </>
  );
};

export default SearchInput;
