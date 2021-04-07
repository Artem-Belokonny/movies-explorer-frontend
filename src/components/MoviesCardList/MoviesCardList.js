import React from "react";
import "../MoviesCardList/MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard.js";
import Preloader from "../Preloader/Preloader.js";
import { withRouter } from "react-router-dom";
import { useWindowSize } from "../../utils/utils.js";
import {
  MAX_WIDTH,
  MEDIUM_WIDTH,
  MIN_WIDTH,
  MAX_WIDTH_INITIAL_CARDS,
  MEDIUM_WIDTH_INITIAL_CARDS,
  MIN_WIDTH_INITIAL_CARDS,
  MAX_WIDTH_MORE_CARDS,
  MEDIUM_WIDTH_MORE_CARDS,
  MIN_WIDTH_MORE_CARDS,
  SMALLEST_WIDTH_MORE_CARDS
} from "../../utils/constant";

function MoviesCardList({
  cards,
  isSearching,
  isVisible,
  handleSaveMovie,
  handleDeleteSavedMovie,
  isSavedMovies,
  foundSavedCards,
  isSavedSearch,
  savedMovies,
}) {
  const windowWidth = useWindowSize();
  const [initialCards, setInitialCards] = React.useState(0);
  const [moreCards, setMoreCards] = React.useState(0);

  function handleMoreBtnClick() {
    setInitialCards(initialCards + moreCards);
  }

  React.useEffect(() => {
    if (windowWidth >= MAX_WIDTH) {
      setInitialCards(MAX_WIDTH_INITIAL_CARDS);
      setMoreCards(MAX_WIDTH_MORE_CARDS);
    }
    if (windowWidth < MAX_WIDTH && windowWidth >= MEDIUM_WIDTH) {
      setInitialCards(MAX_WIDTH_INITIAL_CARDS);
      setMoreCards(MEDIUM_WIDTH_MORE_CARDS);
    }
    if (windowWidth < MEDIUM_WIDTH && windowWidth >= MIN_WIDTH) {
      setInitialCards(MEDIUM_WIDTH_INITIAL_CARDS);
      setMoreCards(MIN_WIDTH_MORE_CARDS);
    }
    if (windowWidth < MIN_WIDTH) {
      setInitialCards(MIN_WIDTH_INITIAL_CARDS);
      setMoreCards(SMALLEST_WIDTH_MORE_CARDS);
    }
  }, [windowWidth]);

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
                    savedMovies={savedMovies}
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
                    savedMovies={savedMovies}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          <>
            {isSearching && <Preloader />}
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
                {cards.slice(0, initialCards).map((card) => (
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
                cards.length <= 12 || initialCards >= cards.length
                  ? "moviesCardList__moreButton_hidden"
                  : "moviesCardList__moreButton"
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
