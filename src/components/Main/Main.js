import React from "react";
import Promo from "../Promo/Promo.js";
import NavTab from "../NavTab/NavTab.js";
import AboutProject from "../AboutProject/AboutProject.js";
import Techs from "../Techs/Techs.js";
import AboutMe from "../AboutMe/AboutMe.js";
import Portfolio from "../Portfolio/Portfolio.js";
import Footer from "../Footer/Footer.js";
import Header from "../Header/Header.js";
import { withRouter } from "react-router-dom";

function Main({ loggedIn }) {
  return (
    <>
      <Header loggedIn={loggedIn}/>
      <Promo  />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </>
  );
}

export default withRouter(Main);
