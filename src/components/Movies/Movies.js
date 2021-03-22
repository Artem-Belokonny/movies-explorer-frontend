import React from "react";
import "../Movies/Movies.css";
import Header from "../Header/Header.js";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js";
import SearchForm from "../SearchForm/SearchForm.js";
import Footer from "../Footer/Footer.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import { withRouter } from "react-router-dom";

function Movies() {
  return (
    <>
      <Header />
      <section className="movies">
        <div className="movies__search">
          <SearchForm />
          <FilterCheckbox />
        </div>
        <MoviesCardList />
        <button className="movies__moreButton">Ещё</button>
      </section>
      <Footer />
    </>
  );
}

export default withRouter(Movies);
