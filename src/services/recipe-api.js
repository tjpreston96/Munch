import tokenService from "../services/tokenService";
const BASE_URL = "https://api.edamam.com";

export function recipeSearch(formData) {
  return fetch(
    `${BASE_URL}/search?q=${formData.query}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + tokenService.getToken(),
      },
      body: JSON.stringify(formData),
    },
    { mode: "cors" }
  ).then((res) => res.json());
}
