import axios from 'axios';
import {TMDB_URL, TMDB_ACCESS_TOKEN} from '@env';

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

    return response.data.results;
  } catch (error) {
    console.error(`there was an error in getPopularMovies ${error}`);
    return null;
  }
};
