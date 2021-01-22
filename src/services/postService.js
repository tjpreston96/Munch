import tokenService from "../services/tokenService";
const BASE_URL = "/api/posts/";

export function getAll() {
  return fetch(BASE_URL, { mode: "cors" }).then((res) => res.json());
}

export function createPost(formData) {
  return fetch(
    BASE_URL,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + tokenService.getToken(),
      },
      body: JSON.stringify(formData),
    },
    { mode: "cors" }
  ).then((res) => res.json());
}

export function deleteOne(id) {
  return fetch(
    `${BASE_URL}${id}`,
    {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + tokenService.getToken(),
      },
    },
    { mode: "cors" }
  ).then((res) => res.json());
}
