import {TMDB_API_KEY, TMDB_URL} from '@env';
import axios from 'axios';

export const getPopularMovies = async () => {
  try {
    const response = await axios.get(
      `${TMDB_URL}/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`,
    );

    return response.data;
  } catch (error) {
    console.error(`there was an error in getPopularMovies ${error}`);
  }
};
