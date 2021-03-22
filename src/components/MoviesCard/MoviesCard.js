import "../MoviesCard/MoviesCard.css";
import movieImg from "../../images/movieImg.svg";

function MoviesCard({ childrenImageSave, childrenButtonSave, childrenButtonDelete }) {
  return (
    <article className="moviesCard">
      <div className="moviesCard__container">
        {childrenButtonSave}
        {childrenImageSave}
        {childrenButtonDelete}
        <img src={movieImg} alt="Фильм" className="moviesCard__image" />
      </div>
      <div className="moviesCard__movieInfo">
        <p className="moviesCard__movieName">33 слова о дизайне</p>
        <p className="moviesCard__movieDuration">1ч 17м</p>
      </div>
    </article>
  );
}

export default MoviesCard;
