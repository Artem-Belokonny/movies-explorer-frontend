import React from "react";
import Main from "../Main/Main.js";
import Register from "../Register/Register.js";
import Login from "../Login/Login.js";
import Profile from "../Profile/Profile.js";
import Movies from "../Movies/Movies.js";
import SavedMovies from "../SavedMovies/SavedMovies.js";
import Error from "../Error/Error.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js";
import * as moviesApi from "../../utils/MoviesApi.js";
import mainApi from "../../utils/MainApi.js";
import { useHistory, Route, Switch, withRouter } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import { SHORT_MOVIE_DURATION } from "../../utils/constant.js";
import "../App/App.css";
import "../../index.css";

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
  const [isEmptySearch, setIsEmptySearch] = React.useState(false);
  const [isSavedMoviesState, setIsSavedMoviesState] = React.useState(true);
  const [isSavedSearch, setIsSavedSearch] = React.useState(false);
  const [permissonCheck, setPermissonCheck] = React.useState(false);
  const [isShortMovies, setIsShortMovies] = React.useState(false);
  const [isSearching, setIsSearching] = React.useState(false);

  React.useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      setPermissonCheck(true);
      return;
    }
    mainApi.setToken(token);
    setPermissonCheck(true);
    tokenCheck(token);
    setLoggedIn(true);
  }, []);

  // Монтирование эффектов на данные пользователя и карточки фильмов
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
          console.log(err);
        });
    }
  }, [loggedIn]);

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
        }
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      })
      .finally(() => {
        setPermissonCheck(true);
      });
  }

  // Функция регистрации
  function handleRegister(data) {
    const { name, email, password } = data;
    return mainApi
      .register(name, email, password)
      .then((res) => {
        handleLogin({ email, password });
        setCurrentUser(res);
        console.log(res);
      })
      .catch((err) => {
        alert(err);
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
          localStorage.setItem("jwt", res.token);
          mainApi.setToken(res.token);
          setLoggedIn(true);
          history.push("/movies");
        }
      })
      .catch((err) => {
        alert(err);
        console.log(err);
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
        console.log(err);
      });
  }

  // Имитация ожидания загрузки
  function startPreloader() {
    setIsSearching(true);
    setTimeout(async () => {
      setIsSearching(false);
    }, 100);
  }

  // Переключение чекбокса для поиска
  function handleToggleCheckbox() {
    setIsShortMovies(!isShortMovies);
  }

  // Функция поиска фильмов movies
  function movieSearch(searchBar) {
    if (isShortMovies) {
      const shortMovie = movies.filter((movie) => {
        return (
          movie.duration <= SHORT_MOVIE_DURATION &&
          movie.nameRU.toLowerCase().includes(searchBar.toLowerCase())
        );
      });
      setFoundMovies(shortMovie);
    } else {
      const foundMovie = movies.filter((movie) => {
        return movie.nameRU.toLowerCase().includes(searchBar.toLowerCase());
      });
      return setFoundMovies(foundMovie);
    }
  }

  // Функция поиска фильмов saved-movies
  function savedMovieSearch(searchBar) {
    if (isShortMovies) {
      const shortMovie = savedMovies.filter((movie) => {
        return (
          movie.duration <= SHORT_MOVIE_DURATION &&
          movie.nameRU.toLowerCase().includes(searchBar.toLowerCase())
        );
      });
      setFoundSavedMovies(shortMovie);
    } else {
      const foundSavedMovie = savedMovies.filter((movie) => {
        return movie.nameRU.toLowerCase().includes(searchBar.toLowerCase());
      });
      return setFoundSavedMovies(foundSavedMovie);
    }
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
        const newSavedCardsArr = savedMovies.filter(
          (c) => c._id !== movieData._id
        );
        setSavedMovies(newCardsArr);
        setFoundSavedMovies(newSavedCardsArr);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  if (!permissonCheck) {
    return null;
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <Route exact path="/">
            <Main loggedIn={loggedIn} />
          </Route>
          <Route path="/signup">
            <Register onRegister={handleRegister} loggedIn={loggedIn} />
          </Route>
          <Route path="/signin">
            <Login onLogin={handleLogin} loggedIn={loggedIn} />
          </Route>
          <ProtectedRoute
            path="/profile"
            component={Profile}
            onSignOut={handleSignOut}
            onUpdateUser={handleUpdateUser}
            loggedIn={loggedIn}
          />
          <ProtectedRoute
            path="/movies"
            component={Movies}
            movieSearch={movieSearch}
            showEmptySearchMsg={showEmptySearchMsg}
            handleSaveMovie={handleSaveMovie}
            handleDeleteSavedMovie={handleDeleteSavedMovie}
            setIsSearching={setIsSearching}
            startPreloader={startPreloader}
            handleToggleCheckbox={handleToggleCheckbox}
            loggedIn={loggedIn}
            cards={foundMovies}
            isVisible={isEmptySearch}
            isShortMovies={isShortMovies}
            isSearching={isSearching}
            savedMovies={savedMovies}
          />
          <ProtectedRoute
            path="/saved-movies"
            component={SavedMovies}
            handleDeleteSavedMovie={handleDeleteSavedMovie}
            savedMovieSearch={savedMovieSearch}
            showSavedSearchedMovies={showSavedSearchedMovies}
            loggedIn={loggedIn}
            cards={savedMovies}
            foundSavedCards={foundSavedMovies}
            isSavedMovies={isSavedMoviesState}
            isSavedSearch={isSavedSearch}
            savedMovies={savedMovies}
          />
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default withRouter(App);
