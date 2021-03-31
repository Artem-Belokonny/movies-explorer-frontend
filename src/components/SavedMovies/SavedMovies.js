import React from "react";
import "../SavedMovies/SavedMovies.css";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import SearchForm from "../SearchForm/SearchForm.js";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import { withRouter } from "react-router-dom";

function SavedMovies({
  cards,
  foundSavedCards,
  isSavedMovies,
  handleDeleteSavedMovie,
  loggedIn,
  savedMovieSearch,
  onChange,
  onSubmit,
  isSavedSearch,
  showSavedSearchedMovies
}) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <section className="savedMovies">
        <div className="savedMovies__search">
          <SearchForm
            savedMovieSearch={savedMovieSearch}
            onChange={onChange}
            onSubmit={onSubmit}
            isSavedMovies={isSavedMovies}
            showSavedSearchedMovies={showSavedSearchedMovies}
          />
          <FilterCheckbox />
        </div>
        <MoviesCardList
          cards={cards}
          foundSavedCards={foundSavedCards}
          isSavedMovies={isSavedMovies}
          handleDeleteSavedMovie={handleDeleteSavedMovie}
          isSavedSearch={isSavedSearch}
        />
      </section>
      <Footer />
    </>
  );
}

export default withRouter(SavedMovies);
