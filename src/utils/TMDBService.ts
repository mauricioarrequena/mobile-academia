import {API_KEY} from '@env';
import axios from 'axios';

export const getPopularMovies = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    );

    return response.data;
  } catch (error) {
    console.error(`there was an error in getPopularMovies ${error}`);
  }
};
