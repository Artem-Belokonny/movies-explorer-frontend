import React from "react";
import "../MoviesCardList/MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard.js";
import Preloader from "../Preloader/Preloader.js";
import { withRouter } from "react-router-dom";

function MoviesCardList({
  cards,
  isOn,
  isVisible,
  handleSaveMovie,
  handleDeleteSavedMovie,
  isSavedMovies,
  foundSavedCards,
  isSavedSearch,
  savedMovies
}) {
  const [searchedMovies, setSearchedMovies] = React.useState(12);

  function handleMoreBtnClick() {
    setSearchedMovies(searchedMovies + 3);
  }

  return (
    <>
      <section className="moviesCardList">
        {isSavedMovies ? (
          <>
            {isSavedSearch ? (
              <div className="moviesCardList__cards-container">
                {foundSavedCards.map((card) => (
                  <MoviesCard
                    key={card.id || card._id}
                    card={card}
                    handleDeleteSavedMovie={handleDeleteSavedMovie}
                    isSavedMovies={isSavedMovies}
                  />
                ))}
              </div>
            ) : (
              <div className="moviesCardList__cards-container">
                {cards.map((card) => (
                  <MoviesCard
                    key={card.id || card._id}
                    card={card}
                    handleDeleteSavedMovie={handleDeleteSavedMovie}
                    isSavedMovies={isSavedMovies}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          <>
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
                    handleSaveMovie={handleSaveMovie}
                    handleDeleteSavedMovie={handleDeleteSavedMovie}
                    savedMovies={savedMovies}
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
          </>
        )}
      </section>
    </>
  );
}

export default withRouter(MoviesCardList);
