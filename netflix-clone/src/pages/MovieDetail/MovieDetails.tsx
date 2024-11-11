import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Movie } from '../../types/movies';

interface MovieDetailsProps {
    movieId: number;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movieId }) => {
    const [movie, setMovie] = useState<Movie | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchMovieDetails = async () => {
        try {
          const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
            params: {
              api_key: 'YOUR_API_KEY',
              language: 'en-US',
            },
          });
          setMovie(response.data);
          setIsLoading(false);
        } catch (err) {
          setError('Failed to fetch movie details.');
          setIsLoading(false);
        }
      };
  
      fetchMovieDetails();
    }, [movieId]);
  
    // Handle loading and error states
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
  
    if (!movie) return <div>No movie data available.</div>;
  
    return (
        <div className="movie-detail">
            <div
                className="movie-banner"
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                }}
            >
                <div className="movie-info">
                    <h1>{movie.title}</h1>
                    <p className="release-date">Release Date: {movie.release_date}</p>
                    <p className="rating">Rating: {movie.vote_average}/10</p>
                    <p className="overview">{movie.overview}</p>
                </div>
            </div>
            <div className="movie-poster">
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                />
            </div>
        </div>
    )
}
export default MovieDetails;