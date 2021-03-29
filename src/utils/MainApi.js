// файл будет содержать описание запросов к нашему Api
import { handleOriginalResponse } from "../utils/utils.js";

class MainApi {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  setToken(token) {
    this.headers.authorization = `Bearer ${token}`;
  }

  getUserData() {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: this.headers,
    })
      .then(handleOriginalResponse)
      .then((result) => {
        return result;
      });
  }

  patchUserData(userData) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        name: userData.name,
        email: userData.email,
      }),
    })
      .then(handleOriginalResponse)
      .then((result) => {
        return result;
      });
  }

  saveMovie(movieData) {
    return fetch(`${this.baseUrl}/movies`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        country: movieData.country,
        director: movieData.director,
        duration: movieData.duration,
        year: movieData.year,
        description: movieData.description,
        image: movieData.image,
        trailer: movieData.trailer,
        movieId: movieData.movieId,
        nameRU: movieData.nameRU,
        nameEN: movieData.nameEN,
        thumbnail: movieData.thumbnail,
        owner: movieData.owner,
      }),
    })
      .then(handleOriginalResponse)
      .then((data) => {
        return data;
      });
  }

  deleteMovie(movieData) {
    return fetch(`${this.baseUrl}/movies/${movieData}`, {
      method: "DELETE",
      headers: this.headers,
    })
      .then(handleOriginalResponse)
      .then((data) => {
        return data;
      });
  }

  register(name, email, password) {
    return fetch(`${this.baseUrl}/signup`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    })
      .then(handleOriginalResponse)
      .then((data) => {
        return data;
      });
  }

  authorize(email, password) {
    return fetch(`${this.baseUrl}/signin`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then(handleOriginalResponse)
      .then((data) => {
        return data;
      });
  }

  getContent(token) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json",
        'authorization': `Bearer ${token}`,
      },
    }).then(handleOriginalResponse)
    .then((data) => {
      return data;
    });
  }
}

const mainApi = new MainApi({
  baseUrl: "https://api.volorel-diploma.students.nomoredomains.monster",
  headers: {
    "Accept": "application/json",
    "authorization": `Bearer ${localStorage.getItem("jwt")}`,
    "Content-Type": "application/json",
  },
});

export default mainApi;