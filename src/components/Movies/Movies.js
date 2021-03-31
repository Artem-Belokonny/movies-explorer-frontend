import React from "react";
import "../Movies/Movies.css";
import Header from "../Header/Header.js";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js";
import SearchForm from "../SearchForm/SearchForm.js";
import Footer from "../Footer/Footer.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import { withRouter } from "react-router-dom";

function Movies({
  cards,
  onChange,
  onSubmit,
  movieSearch,
  isOn,
  showEmptySearchMsg,
  turnOffPreloader,
  isVisible,
  handleSaveMovie,
  handleDeleteSavedMovie,
  loggedIn,
  savedMovies
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
          />
          <FilterCheckbox />
        </div>
        <MoviesCardList
          isVisible={isVisible}
          isOn={isOn}
          cards={cards}
          handleSaveMovie={handleSaveMovie}
          handleDeleteSavedMovie={handleDeleteSavedMovie}
          savedMovies={savedMovies}
        />
      </section>
      <Footer />
    </>
  );
}

export default withRouter(Movies);
