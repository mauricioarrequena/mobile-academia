// src/hooks/useTMDBMovieById.ts
import {useEffect, useState} from 'react';
import axios from 'axios';
import {TMDB_ACCESS_TOKEN, TMDB_URL} from '@env';
import {MovieDetail} from '../types/Movie';

const useTMDBById = (id: number) => {
  const [movie, setMovie] = useState<MovieDetail | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchMovie = async () => {
      try {
        const response = await axios.get(`${TMDB_URL}/movie/${id}`, {
          headers: {
            Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
            Accept: 'application/json',
          },
          params: {
            language: 'en-US',
          },
        });
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovie();
  }, [id]);

  return {movie};
};

export default useTMDBById;
