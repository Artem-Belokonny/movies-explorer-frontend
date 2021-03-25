import "../MoviesCard/MoviesCard.css";

function MoviesCard({ card, childrenImageSave, childrenButtonSave, childrenButtonDelete }) {
  return (
    <article className="moviesCard">
      <div className="moviesCard__container">
        {childrenButtonSave}
        {childrenImageSave}
        {childrenButtonDelete}
        <img src={card.image} alt={card.nameRU} className="moviesCard__image" />
      </div>
      <div className="moviesCard__movieInfo">
        <p className="moviesCard__movieName">{card.nameRU}</p>
        <p className="moviesCard__movieDuration">{card.duration}</p>
      </div>
    </article>
  );
}

export default MoviesCard;
