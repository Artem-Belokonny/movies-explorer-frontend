// описание запросов к сервису beatfilm-movies

import { handleOriginalResponse } from "../utils/utils.js";


export const MOVIES_URL = "https://api.nomoreparties.co/beatfilm-movies";

export const getInitialMovies = () => {
  return fetch(`${MOVIES_URL}`, {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
  }).then(handleOriginalResponse)
};
