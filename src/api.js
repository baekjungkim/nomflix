import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "36e03cb014020e57d1cae244d54455cd",
    language: "ko"
  }
});

export default api;
