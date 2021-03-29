import React from "react";
import "../SearchForm/SearchForm.css";

import { withRouter } from "react-router-dom";

function SearchForm({ movieSearch, turnOffPreloader, showEmptySearchMsg }) {
  const [movieName, setMovieName] = React.useState([]);


  function handleMovieNameChange(evt) {
    setMovieName(evt.target.value);
  }

  // Обработчик сабмита формы
  function handleSubmit(evt) {
    evt.preventDefault();
    movieSearch(movieName);
    turnOffPreloader();
    showEmptySearchMsg();
  }

  return (
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
  );
}

export default withRouter(SearchForm);
