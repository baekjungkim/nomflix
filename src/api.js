import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "36e03cb014020e57d1cae244d54455cd",
    language: "ko"
  }
});

export const tvApi = {
  topRated: () => api.get("tv/top_rated"),
  airingToday: () => api.get("tv/airing_today"),
  popular: () => api.get("tv/popular")
};

export const moviesApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upComing: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular")
};
