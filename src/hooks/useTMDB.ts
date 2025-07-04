import {useEffect, useState} from 'react';
import {TMDB_ACCESS_TOKEN, TMDB_URL} from '@env';
import axios from 'axios';
import {Movie} from '../types/Movie';

type Params = Record<string, any>;

const useTMDB = (endpoint: string, extraParams: Params = {}) => {
  const [movies, setMovies] = useState<Array<Movie>>([]);
  const stringExtraParams = JSON.stringify(extraParams);

  useEffect(() => {
    const getMovies = async () => {
      if (!endpoint) {
        setMovies([]);
        return;
      }

      const baseParams = {language: 'en-US', page: 1};
      const response = await axios.get(`${TMDB_URL}/${endpoint}`, {
        headers: {
          Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
          Accept: 'application/json',
        },
        params: {...baseParams, ...JSON.parse(stringExtraParams)},
      });

      setMovies(response.data.results);
    };

    getMovies();
  }, [endpoint, stringExtraParams]);

  return {movies};
};

export default useTMDB;
