//import tokenService from "./tokenService";
const BASE_URL = "/api/board/";

export function index() {
 const options = {
     method: "GET",
 };
 return fetch(BASE_URL, options)
 .then((res) => res.json());
};