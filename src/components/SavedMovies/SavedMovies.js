import React from "react";
import "../SavedMovies/SavedMovies.css";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import SearchForm from "../SearchForm/SearchForm.js";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import { withRouter } from "react-router-dom";

function SavedMovies({ cards, isSavedMovies }) {
  
  return (
    <>
      <Header />
      <section className="savedMovies">
        <div className="savedMovies__search">
          <SearchForm />
          <FilterCheckbox />
        </div>
        <MoviesCardList isSavedMovies={isSavedMovies} cards={cards}/>
      </section>
      <Footer />
    </>
  );
}

export default withRouter(SavedMovies);
