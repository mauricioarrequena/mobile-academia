import {Movie} from '../types/Movie';

export const mockMovies: Movie[] = [
  {
    id: '1',
    title: 'Inception',
    poster: 'https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg',
    description:
      'A thief who steals corporate secrets through dream-sharing tech.',
  },
  {
    id: '2',
    title: 'The Matrix',
    poster: 'https://image.tmdb.org/t/p/w500/aOIuZAjPaRIE6CMzbazvcHuHXDc.jpg',
    description:
      'A computer hacker learns about the true nature of his reality.',
  },
  {
    id: '3',
    title: 'Interstellar',
    poster: 'https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg',
    description: 'A team of explorers travel through a wormhole in space.',
  },
];
