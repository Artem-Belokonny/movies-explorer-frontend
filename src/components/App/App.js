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
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js";
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
  const [foundSavedMovies, setFoundSavedMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [isPreloaderOn, setIsPreloaderOn] = React.useState(true);
  const [isEmptySearch, setIsEmptySearch] = React.useState(false);
  const [isSavedMoviesState, setIsSavedMoviesState] = React.useState(true);
  const [isSavedSearch, setIsSavedSearch] = React.useState(false);

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
      Promise.all([
        mainApi.getUserData(),
        moviesApi.getInitialMovies(),
        mainApi.getSavedMovies(),
      ])
        .then(([userData, cardData, savedCardData]) => {
          setCurrentUser(userData);
          localStorage.setItem("cardData", JSON.stringify(cardData));
          setMovies(JSON.parse(localStorage.getItem("cardData")));
          localStorage.setItem("savedCardData", JSON.stringify(savedCardData));
          setSavedMovies(JSON.parse(localStorage.getItem("savedCardData")));
        })
        .catch((err) => {
          alert(err);
        });
    }
  }, [loggedIn, history]);

  function tokenCheck(jwt) {
    mainApi
      .getUserData(jwt)
      .then((res) => {
        if (res) {
          const userData = {
            name: res.name,
            email: res.email,
          };
          setLoggedIn(true);
          setUserData(userData);
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
        setCurrentUser(res);
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

    // Функция поиска фильмов saved-movies
    function savedMovieSearch(searchBar) {
      const foundSavedMovie = savedMovies.filter((movie) => {
        return movie.nameRU.toLowerCase().includes(searchBar.toLowerCase());
      });
      return setFoundSavedMovies(foundSavedMovie);
    }

  // выключение Прелоудера
  function turnOffPreloader() {
    setIsPreloaderOn(false);
  }

  // показ сообщение о неудачном поиске
  function showEmptySearchMsg() {
    setIsEmptySearch(true);
  }

  function showSavedSearchedMovies() {
    setIsSavedSearch(true);
  }

  // Функция добавления в избранное
  function handleSaveMovie(movieData) {
    mainApi
      .saveMovie(movieData)
      .then((newMovie) => {
        setSavedMovies([newMovie.data, ...savedMovies]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Функция удаления из избранного
  function handleDeleteSavedMovie(movieData) {
    mainApi
      .deleteMovie(movieData._id)
      .then(() => {
        const newCardsArr = savedMovies.filter((c) => c._id !== movieData._id);
        const newSavedCardsArr = savedMovies.filter((c) => c._id !== movieData._id);
        setSavedMovies(newCardsArr);
        setFoundSavedMovies(newSavedCardsArr);
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
            <Main loggedIn={loggedIn} />
          </Route>
          <Route path="/signup">
            <Register onRegister={handleRegister} />
          </Route>
          <Route path="/signin">
            <Login handleLogin={handleLogin} />
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
              isOn={isPreloaderOn}
              isVisible={isEmptySearch}
              movieSearch={movieSearch}
              turnOffPreloader={turnOffPreloader}
              showEmptySearchMsg={showEmptySearchMsg}
              handleSaveMovie={handleSaveMovie}
              handleDeleteSavedMovie={handleDeleteSavedMovie}
              savedMovies={savedMovies}
            />
          </Route>
          <Route path="/saved-movies">
            <SavedMovies
              loggedIn={loggedIn}
              cards={savedMovies}
              foundSavedCards={foundSavedMovies}
              isSavedMovies={isSavedMoviesState}
              handleDeleteSavedMovie={handleDeleteSavedMovie}
              savedMovieSearch={savedMovieSearch}
              isSavedSearch={isSavedSearch}
              showSavedSearchedMovies={showSavedSearchedMovies}
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
