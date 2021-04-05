import React from "react";
import "../MoviesCard/MoviesCard.css";
import noImage from "../../images/no-image.png";
import { MOVIES_IMAGE_URL } from "../../utils/constant.js";

function MoviesCard({
  card,
  handleSaveMovie,
  handleDeleteSavedMovie,
  isSavedMovies,
  savedMovies,
}) {
  const [isCardLikeClicked, setIsCardLikeClicked] = React.useState(false);
  const cardLikeButtonClassName = `${
    isCardLikeClicked ? "moviesCard__button_saved" : "moviesCard__button"
  }`;

  const setLikes = React.useCallback(() => {
    const likesCard = savedMovies.find((movie) => movie.movieId === card.id);
    if (likesCard) {
      setIsCardLikeClicked(true);
    } else {
      setIsCardLikeClicked(false);
    }
  }, [card.id, savedMovies]);

  React.useEffect(() => {
    setLikes();
  }, [setLikes]);

  function durationConversion(mins) {
    const hours = Math.trunc(mins / 60);
    const minutes = mins % 60;
    return hours > 0 ? `${hours}ч ${minutes}м` : `${minutes}м`;
  }

  function handleLikeClick(evt) {
    evt.stopPropagation();
    if (!isCardLikeClicked) {
      handleSaveMovie({
        country: card.country || "default",
        director: card.director,
        duration: card.duration,
        year: card.year,
        description: card.description,
        image: card.image.url
          ? `${MOVIES_IMAGE_URL}${card.image.url}`
          : "https://www.youtube.com",
        trailer: card.trailerLink,
        movieId: card.id,
        nameRU: card.nameRU,
        nameEN: card.nameEN,
        thumbnail: card.image.formats.thumbnail.url
          ? `${MOVIES_IMAGE_URL}${card.image.formats.thumbnail.url}`
          : "https://www.youtube.com",
        owner: card.owner,
      });
      setIsCardLikeClicked(true);
    } else {
      const savedCard = savedMovies.find((movie) => movie.movieId === card.id);
      handleDeleteSavedMovie(savedCard);
      setIsCardLikeClicked(false);
    }
  }

  function handleDeleteClick(evt) {
    evt.stopPropagation();
    handleDeleteSavedMovie(card);
  }

  return (
    <article className="moviesCard">
      {isSavedMovies ? (
        <>
          <div className="moviesCard__container">
            <button
              type="button"
              className="moviesCard__button_delete"
              onClick={handleDeleteClick}
            />
            <a href={card.trailer} target="_blank" rel="noreferrer">
              <img
                src={`${card.image !== null ? `${card.image}` : noImage}`}
                alt={card.nameRU}
                className="moviesCard__image"
              />
            </a>
          </div>
          <div className="moviesCard__movieInfo">
            <p className="moviesCard__movieName">{card.nameRU}</p>
            <p className="moviesCard__movieDuration">
              {durationConversion(card.duration)}
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="moviesCard__container">
            <button
              type="button"
              className={cardLikeButtonClassName}
              onClick={handleLikeClick}
            />
            <a href={card.trailerLink} target="_blank" rel="noreferrer">
              <img
                src={`${
                  card.image !== null
                    ? `${MOVIES_IMAGE_URL}${card.image.url}`
                    : noImage
                }`}
                alt={card.nameRU}
                className="moviesCard__image"
              />
            </a>
          </div>
          <div className="moviesCard__movieInfo">
            <p className="moviesCard__movieName">{card.nameRU}</p>
            <p className="moviesCard__movieDuration">
              {durationConversion(card.duration)}
            </p>
          </div>
        </>
      )}
    </article>
  );
}

export default MoviesCard;
