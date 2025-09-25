import React, { useEffect } from "react";
import Nav from "../components/Nav";

import Movies from "../components/Movies";
import SearchInput from "../components/SearchInput";
import { useParams } from "react-router-dom";

const Search = ({ keyGlobalParam, setKeyGlobalParam }) => {
  const { keyword } = useParams();

  useEffect(() => {
    if (keyword === 0) return;
    if (keyword && keyGlobalParam !== keyword) {
      setKeyGlobalParam(keyword);
      localStorage.setItem("lastKeyword", keyword);
      console.log(localStorage.getItem("lastKeyword"));
    }
    ;
  }, [keyword, keyGlobalParam]);

  useEffect(() => {
    console.log(keyGlobalParam);
  }, [keyword, keyGlobalParam]);

  return (
    <>
      <div className="searchpage">
        <div className="search__nav">
          <Nav
            searchWhite={
              "nav__search-link--anchor link__hover-effect link__hover-effect--white"
            }
            searchContact={"nav__search-link--anchor nav__search-link--primary"}
          />
          <SearchInput keyword={keyGlobalParam} />
          
          <div className="overlay"></div>
        </div>
        <section id="search">
          <Movies keyGlobalParam={localStorage.getItem('lastKeyword')} />
        </section>
      </div>
    </>
  );
};

export default Search;
