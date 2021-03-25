import "../MoviesCardList/MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard.js";
// import Preloader from "../Preloader/Preloader.js";
// import checkMark from "../../images/checkMark.svg";
import { withRouter } from "react-router-dom";

function MoviesCardList({ cards }) {
  return (
    <>
      {/* <Preloader /> */}
      <section className="moviesCardList">
        {cards.map((card) => (
          <MoviesCard key={card.id} card={card} />
        ))}
      </section>
    </>
  );
}

export default withRouter(MoviesCardList);
