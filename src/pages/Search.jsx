import React from "react";
import Nav from "../components/Nav";

import Movies from "../components/Movies";
import SearchInput from "../components/SearchInput";
import { useParams } from "react-router-dom";

const Search = () => {
  const { keyword } = useParams();


  

  return (
    <>
      <div class="searchpage">
        <div class="search__nav">
          <Nav
            searchWhite={
              "nav__search-link--anchor link__hover-effect link__hover-effect--white"
            }
            searchContact={"nav__search-link--anchor nav__search-link--primary"}
          />
          <SearchInput  />
          <div class="overlay"></div>
        </div>
        <section id="search">
          
          
          <Movies keyword={keyword} />
        </section>
      </div>
    </>
  );
};

export default Search;
