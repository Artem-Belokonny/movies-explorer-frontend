import "../SearchForm/SearchForm.css";

import { withRouter } from "react-router-dom";

function SearchForm({ onSearchMovies }) {

  function handleSubmit(evt) {
    evt.preventDefault();
    onSearchMovies();
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
      />
      <button type="submit" className="search__button">
        Найти
      </button>
    </form>
  );
}

export default withRouter(SearchForm);
