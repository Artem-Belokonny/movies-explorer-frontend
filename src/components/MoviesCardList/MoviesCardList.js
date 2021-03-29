import React from "react";
import "../MoviesCardList/MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard.js";
import Preloader from "../Preloader/Preloader.js";
import { withRouter } from "react-router-dom";

function MoviesCardList({
  cards,
  isOn,
  isVisible,
  putCardLike,
  isClicked,
  deleteCardLike,
  handleSaveMovie,
  handleDeleteSavedMovie,
  isSavedMovies
}) {
  const [searchedMovies, setSearchedMovies] = React.useState(12);

  function handleMoreBtnClick() {
    setSearchedMovies(searchedMovies + 3);
  }

  return (
    <>
      <section className="moviesCardList">
        <Preloader isOn={isOn} />
        {cards.length === 0 ? (
          <p
            className={
              isVisible
                ? "moviesCardList__text"
                : "moviesCardList__text moviesCardList__text_hidden"
            }
          >
            К сожалению, по данному запросу ничего не найдено :(
          </p>
        ) : (
          <div className="moviesCardList__cards-container">
            {cards.slice(0, searchedMovies).map((card) => (
              <MoviesCard
                key={card.id || card._id}
                card={card}
                putCardLike={putCardLike}
                deleteCardLike={deleteCardLike}
                isClicked={isClicked}
                handleSaveMovie={handleSaveMovie}
                handleDeleteSavedMovie={handleDeleteSavedMovie}
                isSavedMovies={isSavedMovies}
              />
            ))}
          </div>
        )}
        <button
          onClick={handleMoreBtnClick}
          className={
            cards.length > 12
              ? "moviesCardList__moreButton"
              : "moviesCardList__moreButton_hidden"
          }
        >
          Ещё
        </button>
      </section>
    </>
  );
}

export default withRouter(MoviesCardList);
