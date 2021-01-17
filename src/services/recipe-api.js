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
    .then((banana) => {
      console.log(banana);
      banana.json();
    })

    .catch((err) => {
      console.log(err);
    });
}
