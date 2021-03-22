import "../MoviesCardList/MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard.js";
import checkMark from "../../images/checkMark.svg";
import { withRouter } from "react-router-dom";

function MoviesCardList() {
  return (
    <>
      <section className="moviesCardList">
        <MoviesCard
          childrenButtonSave={
            <button
              type="button"
              className="moviesCard__button moviesCard__button_save"
            />
          }
        />
        <MoviesCard
          childrenImageSave={
            <img
              src={checkMark}
              alt="Сохранено"
              className="moviesCard__savedImage"
            />
          }
        />
        <MoviesCard
          childrenButtonDelete={
            <button
              type="button"
              className="moviesCard__button moviesCard__button_delete"
            />
          }
        />
        <MoviesCard
          childrenImageSave={
            <img
              src={checkMark}
              alt="Сохранено"
              className="moviesCard__savedImage"
            />
          }
        />
        <MoviesCard
          childrenButtonSave={
            <button
              type="button"
              className="moviesCard__button moviesCard__button_delete"
            />
          }
        />
        <MoviesCard
          childrenButtonSave={
            <button
              type="button"
              className="moviesCard__button moviesCard__button_delete"
            />
          }
        />
        <MoviesCard
          childrenButtonSave={
            <button
              type="button"
              className="moviesCard__button moviesCard__button_save"
            />
          }
        />
        <MoviesCard
          childrenButtonSave={
            <button
              type="button"
              className="moviesCard__button moviesCard__button_save"
            />
          }
        />
        <MoviesCard
          childrenButtonSave={
            <button
              type="button"
              className="moviesCard__button moviesCard__button_save"
            />
          }
        />
        <MoviesCard
          childrenButtonSave={
            <button
              type="button"
              className="moviesCard__button moviesCard__button_save"
            />
          }
        />
        <MoviesCard
          childrenButtonSave={
            <button
              type="button"
              className="moviesCard__button moviesCard__button_save"
            />
          }
        />
        <MoviesCard
          childrenButtonSave={
            <button
              type="button"
              className="moviesCard__button moviesCard__button_save"
            />
          }
        />
      </section>
    </>
  );
}

export default withRouter(MoviesCardList);
