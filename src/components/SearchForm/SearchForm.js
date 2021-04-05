import React from "react";
import "../SearchForm/SearchForm.css";
import { withRouter } from "react-router-dom";

function SearchForm({
  movieSearch,
  savedMovieSearch,
  showEmptySearchMsg,
  isSavedMovies,
  showSavedSearchedMovies,
  startPreloader,
}) {
  const [movieName, setMovieName] = React.useState([]);
  const [savedMovieName, setSavedMovieName] = React.useState([]);
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const searchButtonClassName = `${
    isValid ? "search__button" : "search__button_disabled"
  }`;

  function handleMovieNameChange(evt) {
    const target = evt.target;
    const name = target.name;
    const value = target.value;
    setMovieName(value);
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  }

  function handleSavedMovieNameChange(evt) {
    setSavedMovieName(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    startPreloader();
    movieSearch(movieName);
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
            <button type="submit" className={searchButtonClassName}>
              Найти
            </button>
          </form>
        </>
      )}
    </>
  );
}

export default withRouter(SearchForm);
