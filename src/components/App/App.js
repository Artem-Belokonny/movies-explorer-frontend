import React from "react";
import Main from "../Main/Main.js";
import Register from "../Register/Register.js";
import Login from "../Login/Login.js";
import Profile from "../Profile/Profile.js";
import Movies from "../Movies/Movies.js";
import SavedMovies from "../SavedMovies/SavedMovies.js";
import Error from "../Error/Error.js";
import "../App/App.css";
import "../../index.css";
import {
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import * as moviesApi from "../../utils/MoviesApi.js";

function App() {
  const [cards, setCards] = React.useState([]);

  function handleMovieSearch() {
    moviesApi
    .getInitialMovies()
    .then((res) => {
      setCards(res);
      localStorage.setItem(res, JSON.stringify(res));
    })
    .catch((err) => {
      alert(err);
    });
  }

  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/movies">
          <Movies cards={cards} onSearchMovies={handleMovieSearch}
          />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies />
        </Route>
        <Route path="/error">
          <Error />
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
