import tmdb from '../services/tmdb';
import { Movie, MovieListResponse } from '../types/movies';

// Fetch trending movies
export const fetchTrendingMovies = async (): Promise<Movie[]> => {
  const response = await tmdb.get<MovieListResponse>('/trending/movie/week');
  return response.data.results;
};

// Fetch popular movies
export const fetchPopularMovies = async (): Promise<Movie[]> => {
  const response = await tmdb.get<MovieListResponse>('/movie/popular');
  return response.data.results;
};

// Fetch top-rated movies
export const fetchTopRatedMovies = async (): Promise<Movie[]> => {
  const response = await tmdb.get<MovieListResponse>('/movie/top_rated');
  return response.data.results;
};

// Fetch upcoming movies
export const fetchUpcomingMovies = async (): Promise<Movie[]> => {
  const response = await tmdb.get<MovieListResponse>('/movie/upcoming');
  return response.data.results;
};
