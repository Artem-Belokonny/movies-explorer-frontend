import { handleOriginalResponse } from "../utils/utils.js";
import { BASE_URL } from "../utils/constant.js"

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
  }

  saveMovie(movieData) {
    return fetch(`${this.baseUrl}/movies`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(movieData),
    })
      .then(handleOriginalResponse)
  }

  deleteMovie(movieData) {
    return fetch(`${this.baseUrl}/movies/${movieData}`, {
      method: "DELETE",
      headers: this.headers,
    })
      .then(handleOriginalResponse)
  }

  getSavedMovies() {
    return fetch(`${this.baseUrl}/movies`, {
      headers: this.headers,
    })
      .then(handleOriginalResponse)
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
  }
}

const mainApi = new MainApi({
  baseUrl: BASE_URL,
  headers: {
    "Accept": "application/json",
    "authorization": `Bearer ${localStorage.getItem("jwt")}`,
    "Content-Type": "application/json",
  },
});

export default mainApi;