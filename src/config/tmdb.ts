const {
  REACT_APP_TMDB_API_KEY: tmdbAPIKey = "",
  REACT_APP_TMDB_API_URL: tmdbAPIURL = "",
  REACT_APP_TMDB_IMAGE_BASE_URL: tmdbImageBaseUrl = "",
} = process.env;

export { tmdbAPIKey, tmdbAPIURL, tmdbImageBaseUrl };
