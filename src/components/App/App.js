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
  useHistory,
  Route,
  Redirect,
  Switch,
  withRouter,
} from "react-router-dom";
import * as moviesApi from "../../utils/MoviesApi.js";
import mainApi from "../../utils/MainApi.js";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

function App() {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState("");
  const [userData, setUserData] = React.useState({
    name: "",
    email: "",
  });
  const [movies, setMovies] = React.useState([]);
  const [foundMovies, setFoundMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [isPreloaderOn, setIsPreloaderOn] = React.useState(true);
  const [isEmptySearch, setIsEmptySearch] = React.useState(false);
  const [isCardLikeClicked, setIsCardLikeClicked] = React.useState(false);
  const [isSavedMoviesState, setIsSavedMoviesState] = React.useState(true);

  React.useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      return;
    }
    mainApi.setToken(token);
    setLoggedIn(true);
    tokenCheck(token);
  }, []);

  // Монтирование эффекта через Promise.all
  React.useEffect(() => {
    if (loggedIn) {
      mainApi.setToken(localStorage.getItem("jwt"));
      history.push("/movies");
      Promise.all([mainApi.getUserData(), moviesApi.getInitialMovies()])
        .then(([userData, cardData]) => {
          setCurrentUser(userData);
          localStorage.setItem("cardData", JSON.stringify(cardData));
          setMovies(cardData);
        })
        .catch((err) => {
          alert(err);
        });
    }
  }, [loggedIn, history]);

  function tokenCheck(jwt) {
    mainApi
      .getContent(jwt)
      .then((res) => {
        if (res) {
          const userData = {
            name: res.name,
            email: res.email,
          };
          setLoggedIn(true);
          setUserData(userData);
          history.push("/movies");
        }
      })
      .catch((err) => {
        alert(err);
      });
  }

  // Функция регистрации
  function handleRegister(data) {
    const { name, email, password } = data;
    return mainApi
      .register(name, email, password)
      .then((res) => {
        history.push("/movies");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Функция авторизации
  function handleLogin(data) {
    const { email, password } = data;
    return mainApi
      .authorize(email, password)
      .then((res) => {
        if (res.token) {
          setLoggedIn(true);
          localStorage.setItem("jwt", res.token);
          console.log(res.token);
          mainApi.setToken(res.token);
        }
      })
      .catch((err) => {
        alert(err);
      });
  }

  // Функция выхода
  function handleSignOut() {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
    history.push("/");
  }

  // Функция апдейта данных пользователя
  function handleUpdateUser(userData) {
    mainApi
      .patchUserData(userData)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        alert(err);
      });
  }

  // Функция поиска фильмов movies
  function movieSearch(searchBar) {
    const foundMovie = movies.filter((movie) => {
      return movie.nameRU.toLowerCase().includes(searchBar.toLowerCase());
    });
    return setFoundMovies(foundMovie);
  }

  function turnOffPreloader() {
    setIsPreloaderOn(false);
  }

  function showEmptySearchMsg() {
    setIsEmptySearch(true);
  }

  function putCardLike() {
    setIsCardLikeClicked(true);
  }

  function deleteCardLike() {
    setIsCardLikeClicked(false);
  }

  // Функция добавления в избранное
  function handleSaveMovie(movieData) {
    mainApi
      .saveMovie(movieData)
      .then((newMovie) => {
        setSavedMovies([newMovie.data, ...savedMovies]);
        console.log(newMovie);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Функция удаления из избранного
  function handleDeleteSavedMovie(movieData) {
    mainApi
      .deleteMovie(movieData)
      .then((movieData) => {
        const newCardsArr = savedMovies.filter((c) => c._id !== movieData._id);
        setSavedMovies(newCardsArr);
        console.log(newCardsArr);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/signup">
            <Register onRegister={handleRegister} />
          </Route>
          <Route path="/signin">
            <Login handleLogin={handleLogin} tokenCheck={tokenCheck} />
          </Route>
          <Route path="/profile">
            <Profile
              loggedIn={loggedIn}
              handleSignOut={handleSignOut}
              onUpdateUser={handleUpdateUser}
            />
          </Route>
          <Route path="/movies">
            <Movies
              loggedIn={loggedIn}
              cards={foundMovies}
              movieSearch={movieSearch}
              isOn={isPreloaderOn}
              isVisible={isEmptySearch}
              turnOffPreloader={turnOffPreloader}
              showEmptySearchMsg={showEmptySearchMsg}
              isClicked={isCardLikeClicked}
              putCardLike={putCardLike}
              deleteCardLike={deleteCardLike}
              handleSaveMovie={handleSaveMovie}
              handleDeleteSavedMovie={handleDeleteSavedMovie}
            />
          </Route>
          <Route path="/saved-movies">
            <SavedMovies
              loggedIn={loggedIn}
              cards={savedMovies}
              isSavedMovies={isSavedMoviesState}
            />
          </Route>
          <Route path="/error">
            <Error />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default withRouter(App);
