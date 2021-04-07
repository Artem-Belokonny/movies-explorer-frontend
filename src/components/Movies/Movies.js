import React from "react";
import Header from "../Header/Header.js";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js";
import SearchForm from "../SearchForm/SearchForm.js";
import Footer from "../Footer/Footer.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import { withRouter } from "react-router-dom";
import "../Movies/Movies.css";

function Movies({
  cards,
  onChange,
  onSubmit,
  movieSearch,
  showEmptySearchMsg,
  turnOffPreloader,
  isVisible,
  handleSaveMovie,
  handleDeleteSavedMovie,
  loggedIn,
  savedMovies,
  windowWidth,
  isShortMovies,
  handleToggleCheckbox,
  isSearching,
  startPreloader,
}) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <section className="movies">
        <div className="movies__search">
          <SearchForm
            showEmptySearchMsg={showEmptySearchMsg}
            turnOffPreloader={turnOffPreloader}
            movieSearch={movieSearch}
            onChange={onChange}
            onSubmit={onSubmit}
            startPreloader={startPreloader}
          />
          <FilterCheckbox
            isShortMovies={isShortMovies}
            handleToggleCheckbox={handleToggleCheckbox}
          />
        </div>
        <MoviesCardList
          isVisible={isVisible}
          cards={cards}
          handleSaveMovie={handleSaveMovie}
          handleDeleteSavedMovie={handleDeleteSavedMovie}
          savedMovies={savedMovies}
          windowWidth={windowWidth}
          isSearching={isSearching}
        />
      </section>
      <Footer />
    </>
  );
}

export default withRouter(Movies);
