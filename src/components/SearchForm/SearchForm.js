import React from "react";
import "../SearchForm/SearchForm.css";

import { withRouter } from "react-router-dom";

function SearchForm({
  movieSearch,
  savedMovieSearch,
  turnOffPreloader,
  showEmptySearchMsg,
  isSavedMovies,
  showSavedSearchedMovies
}) {
  const [movieName, setMovieName] = React.useState([]);
  const [savedMovieName, setSavedMovieName] = React.useState([]);

  function handleMovieNameChange(evt) {
    setMovieName(evt.target.value);
  }

  function handleSavedMovieNameChange(evt) {
    setSavedMovieName(evt.target.value);
  }

  // Обработчик сабмита формы
  function handleSubmit(evt) {
    evt.preventDefault();
    movieSearch(movieName);
    turnOffPreloader();
    showEmptySearchMsg();
  }

  function handleSavedSubmit(evt) {
    evt.preventDefault();
    savedMovieSearch(savedMovieName);
    showSavedSearchedMovies();
  }

  return (
    <>
      {isSavedMovies ? (
        <>
          <form className="search__form" onSubmit={handleSavedSubmit}>
            <input
              className="search__input"
              type="text"
              name="name"
              id="name"
              placeholder="Фильм"
              onChange={handleSavedMovieNameChange}
            />
            <button type="submit" className="search__button">
              Найти
            </button>
          </form>
        </>
      ) : (
        <>
          <form className="search__form" onSubmit={handleSubmit}>
            <input
              className="search__input"
              type="text"
              name="name"
              required
              id="name"
              placeholder="Фильм"
              onChange={handleMovieNameChange}
            />
            <button type="submit" className="search__button">
              Найти
            </button>
          </form>
        </>
      )}
    </>
  );
}

export default withRouter(SearchForm);