import logo from "../../images/logo.svg";
import "../Welcome/Welcome.css";

function Welcome({ title, textBtn, childrenInput, childrenSubtitle, onSubmit }) {
  return (
    <section className="welcome">
      <div className="welcome__container">
        <a href="/" className="welcome__logo-link">
          <img src={logo} alt="Логотип" className="welcome__logo" />
        </a>
        <form className="welcome__form" onSubmit={onSubmit}>
          <h2 className="welcome__title">{title}</h2>
          {childrenInput}
          <button className="welcome__button">{textBtn}</button>
        </form>
        {childrenSubtitle}
      </div>
    </section>
  );
}

export default Welcome;
