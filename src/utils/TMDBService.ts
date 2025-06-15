import axios from 'axios';
import {TMDB_URL, TMDB_ACCESS_TOKEN} from '@env';
import { PopularMovie } from '../types/PopularMovie';

export const getPopularMovies = async () => {
  try {
    const response = await axios.get(`${TMDB_URL}/movie/popular`, {
      headers: {
        Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
        Accept: 'application/json',
      },
      params: {
        language: 'en-US',
        page: 1,
      },
    });

    return response.data.results as Array<PopularMovie>;
  } catch (error) {
    console.error(`there was an error in getPopularMovies ${error}`);
    return [];
  }
};

export const getMarvelMovies = async () => {
  try {
    const response = await axios.get(`${TMDB_URL}/discover/movie`, {
      headers: {
        Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
        Accept: 'application/json',
      },
      params: {
        language: 'en-US',
        page: 1,
        sort_by: 'popularity.desc',
        with_companies: 420,
      },
    });
    return response.data.results;
  } catch (error: any) {
    console.error(`there was an error in getPopularMovies ${error}`);
    return null;
  }
};

export const getTopRatedMovies = async () => {
  try {
    const response = await axios.get(
      `${TMDB_URL}/tv/top_rated?language=en-US&page=1`,
      {
        headers: {
          Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
          Accept: 'application/json',
        },
        params: {
          language: 'en-US',
          page: 1,
        },
      },
    );
    return response.data.results;
  } catch (error: any) {
    console.error(`there was an error in getTopRatedMovies ${error}`);
    return null;
  }
};
