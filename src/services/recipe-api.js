import tokenService from "../services/tokenService";

export function getResultsFromBackend(formData) {
  console.log(formData);
  return fetch(
    "/api/recipes/search",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + tokenService.getToken(),
      },
      body: JSON.stringify(formData),
    },
    { mode: "cors" }
  )
    .then((res) => res.json())

    .catch((err) => {
      console.log(err);
    });
}

export function recipeDetails(data) {
  console.log(data);
  return fetch(
    "/api/recipes/details",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + tokenService.getToken(),
      },
      body: JSON.stringify(data),
    },
    { mode: "cors" }
  )
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });
}
