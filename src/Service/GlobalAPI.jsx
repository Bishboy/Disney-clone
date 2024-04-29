import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3"
const api_key='b9c667f172701eb3c82b6130385ff00d'

const URL=`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`

  //https://api.themoviedb.org/3/trending/all/day?api_key=b9c667f172701eb3c82b6130385ff00d';

  const getTrendingVideos = axios.get(`${movieBaseUrl}/trending/all/day?api_key=${api_key}`);
  const getMovieByGenreId=(id)=> axios.get(`${URL}&with_genres= +${id}`)

  
  export default {getTrendingVideos, getMovieByGenreId}