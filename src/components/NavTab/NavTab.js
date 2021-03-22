import React from "react";
import "../NavTab/NavTab.css";

function NavTab({ link = "#" }) {
  return (
    <section className="navtab">
      <nav className="navtab__menu">
        <a href="#AboutProject" className="navtab__link">
          О проекте
        </a>
				<a href="#Techs" className="navtab__link">
          Технологии
        </a>
				<a href="#AboutMe" className="navtab__link">
          Студент
        </a>
      </nav>
    </section>
  );
}

export default NavTab;
