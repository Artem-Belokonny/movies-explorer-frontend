import React from "react";
import "../Movies/Movies.css";
import Header from "../Header/Header.js";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js";
import SearchForm from "../SearchForm/SearchForm.js";
import Footer from "../Footer/Footer.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import { withRouter } from "react-router-dom";

function Movies({ cards, onSearchMovies }) {
    // Обработчик сабмита формы


  return (
    <>
      <Header />
      <section className="movies">
        <div className="movies__search">
          <SearchForm onSearchMovies={onSearchMovies}/>
          <FilterCheckbox />
        </div>
        <MoviesCardList cards={cards}/>
        <button className="movies__moreButton">Ещё</button>
      </section>
      <Footer />
    </>
  );
}

export default withRouter(Movies);
