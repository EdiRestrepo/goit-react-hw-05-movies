import axios from "axios";
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '9ef1eff025718d98ad0048890235eeb2';

const categories = {
  trending: '/trending/all/week',
  querySearch: '/search/movie',
  genre: '/genre/movie/list',
  basic: '&language=en-US',
};

export const getMoviesTrending = async (page=1) => {
    const response = await axios.get(
        `${categories.trending}?api_key=${API_KEY}&page=${page}`);
    return  response.data;
}

export const searchMoviesQuery = async (query, page=1) =>{
    const response = await axios.get(
        `${categories.querySearch}?api_key=${API_KEY}${categories.basic}&query=${query}&page=${page}&include_adult=false`
    )
    return response.data;
}

export const getMovieDetails = async id => {
    const response = await axios.get(
        `movie/${id}?api_key=${API_KEY}${categories.basic}`
    );
    return response.data
}

export const fakePromise = (time) => new Promise((resolve)=>setTimeout(resolve,time));

export default {
    getMoviesTrending,
    searchMoviesQuery,
    getMovieDetails,
    fakePromise
};