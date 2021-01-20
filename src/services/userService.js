import tokenService from "../services/tokenService";
const BASE_URL = "/api/users/";

export function getAllUsers() {
  return fetch(
    BASE_URL,
    {
      headers: { Authorization: "Bearer " + tokenService.getToken() },
    },
    { mode: "cors" }
  ).then((res) => res.json());
}

export function updateUserProfile(formData) {
  console.log(formData)
  return fetch(`${BASE_URL}update`, {
    method: "PUT",
    headers: { Authorization: "Bearer " + tokenService.getToken()},
    body: JSON.stringify(formData)
  }, { mode: "cors" })
  .then(res => res.json())
}

export function getUser() {
  return fetch(
    `${BASE_URL}updateprofile`,
    {
      headers: { Authorization: "Bearer " + tokenService.getToken() },
    },
    { mode: "cors" }
  ).then((res) => res.json());
}

export function getRecipeToCookbook() {
  return fetch(
    `${BASE_URL}addrecipe`,
    {
      headers: { Authorization: "Bearer " + tokenService.getToken() },
    },
    { mode: "cors" }
  ).then((res) => res.json());
}

export function deleteRecipeFromCookbook(id) {
  return fetch(
    `${BASE_URL}deleterecipe/${id}`,
    {
      method: "PUT",
      headers: { Authorization: "Bearer " + tokenService.getToken() },
      body: JSON.stringify(id),
    },
    { mode: "cors" }
  ).then((res) => res.json());
}