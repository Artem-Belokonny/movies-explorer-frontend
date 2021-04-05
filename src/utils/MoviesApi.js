import { handleOriginalResponse } from "../utils/utils.js";
import { MOVIES_URL } from "../utils/constant.js"


export const getInitialMovies = () => {
  return fetch(`${MOVIES_URL}`, {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
  }).then(handleOriginalResponse)
};
