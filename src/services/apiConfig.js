import axios from "axios";

let apiUrl;

const apiUrls = {
  production: "https://ddj-budget-hub-app-ac59ef042ed9.herokuapp.com/api",
  development: "https://ddj-budget-hub-app-ac59ef042ed9.herokuapp.com/api",
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

const api = axios.create({
  baseURL: apiUrl,
});

export default api;
