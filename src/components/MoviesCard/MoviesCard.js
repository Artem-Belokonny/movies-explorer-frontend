import React from "react";
import "../MoviesCard/MoviesCard.css";
import noImage from "../../images/no-image.png";
// import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

function MoviesCard({
  card,
  isClicked,
  putCardLike,
  deleteCardLike,
  handleSaveMovie,
  handleDeleteSavedMovie,
  isSavedMovies,
}) {
  const MOVIES_IMAGE_URL = "https://api.nomoreparties.co";

  function putLikeBtn() {
    putCardLike();
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
  }

  function deleteLikeBtn() {
    deleteCardLike();
    handleDeleteSavedMovie(card);
  }

  return (
    <article className="moviesCard">
      <div className="moviesCard__container">
        {/* а если условие целиком на секцию сделать? */}
        {/* {isSavedMovies ? (
          <button type="button" className="moviesCard__button_delete" />
        ) : (
          <button
            onClick={putLikeBtn}
            type="button"
            className="moviesCard__button"
          />
        )} */}
        {isClicked ? (
          <button
            onClick={deleteLikeBtn}
            type="button"
            className="moviesCard__button_saved"
          />
        ) : (
          <button
            onClick={putLikeBtn}
            type="button"
            className="moviesCard__button"
          />
        )}
        {isSavedMovies ? (
          <img
            src={`${card.image !== null ? `${card.image}` : noImage}`}
            alt={card.nameRU}
            className="moviesCard__image"
          />
        ) : (
          <img
            src={`${
              card.image !== null
                ? `${MOVIES_IMAGE_URL}${card.image.url}`
                : noImage
            }`}
            alt={card.nameRU}
            className="moviesCard__image"
          />
        )}
      </div>
      <div className="moviesCard__movieInfo">
        <p className="moviesCard__movieName">{card.nameRU}</p>
        <p className="moviesCard__movieDuration">{card.duration}</p>
      </div>
    </article>
  );
}

export default MoviesCard;

// src={`${MOVIES_IMAGE_URL}${card.image.url}`}
