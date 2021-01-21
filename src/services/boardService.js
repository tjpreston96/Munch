import tokenService from "../services/tokenService";
const BASE_URL = "/api/posts/";

export function deleteReply(messageId) {
  return fetch(
    `${BASE_URL}${messageId}`,
    {
      method: "DELETE",
      headers: { Authorization: "Bearer " + tokenService.getToken() },
    },
    { mode: "cors" }.then((res) => res.json())
  );
}

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

export function show(id) {
  return fetch(
    `${BASE_URL}${id}`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + tokenService.getToken(),
      },
      body: JSON.stringify(id),
    },
    { mode: "cors" }
  ).then((res) => res.json());
}

export function reply(id) {
  return fetch(
    `${BASE_URL}${id}`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + tokenService.getToken(),
      },
      body: JSON.stringify(id),
    },
    { mode: "cors" }
  ).then((res) => res.json());
}

export function deleteOne(id) {
  return fetch(
    `${BASE_URL}${id}`,
    {
      method: "DELETE",
      headers: { Authorization: "Bearer " + tokenService.getToken() },
    },
    { mode: "cors" }.then((res) => res.json())
  );
}
