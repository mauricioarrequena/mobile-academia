import {useEffect, useState} from 'react';
import axios from 'axios';
import {TMDB_ACCESS_TOKEN, TMDB_URL} from '@env';
import {MovieDetail} from '../types/Movie';

type Video = {
  id: string;
  key: string;
  name: string;
  site: 'YouTube' | 'Vimeo';
  type: 'Trailer' | 'Teaser' | 'Clip';
};

const useTMDBById = (id: number) => {
  const [movie, setMovie] = useState<MovieDetail | null>(null);
  const [trailerUrl, setTrailerUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchMovieAndTrailer = async () => {
      try {
        const [movieRes, videosRes] = await Promise.all([
          axios.get(`${TMDB_URL}/movie/${id}`, {
            headers: {
              Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
              Accept: 'application/json',
            },
            params: {language: 'en-US'},
          }),
          axios.get(`${TMDB_URL}/movie/${id}/videos`, {
            headers: {
              Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
              Accept: 'application/json',
            },
            params: {language: 'en-US'},
          }),
        ]);

        setMovie(movieRes.data);

        const trailers: Video[] = videosRes.data.results;
        const youtubeTrailer = trailers.find(
          vid => vid.site === 'YouTube' && vid.type === 'Trailer',
        );

        if (youtubeTrailer) {
          setTrailerUrl(
            `https://www.youtube.com/watch?v=${youtubeTrailer.key}`,
          );
        }
      } catch (error) {
        console.error('Error fetching movie or trailer:', error);
      }
    };

    fetchMovieAndTrailer();
  }, [id]);

  return {movie, trailerUrl};
};

export default useTMDBById;
