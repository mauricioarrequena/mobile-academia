export interface Movie {
  id: number;
  overview?: string;
  release_date: string;
  title: string;
  poster_path: string;
  name: string;
}

export interface MovieDetail extends Movie {
  backdrop_path?: string;
  genres?: {id: number; name: string}[];
  runtime?: number;
  vote_average?: number;
}
