import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Movie } from '../../types/movies';
import axios from 'axios';
import Loading from '../../assets/images/misc/loading.gif';
import './MovieDetails.css';

const API_KEY = 'd9f284c50873cebf94b7debdfa2e75ab';
const API_BASE_URL = 'https://api.themoviedb.org/3/movie';

const MovieDetails: React.FC = () => {
  const { id } = useParams(); 
  const [movieDetails, setMovieDetails] = useState<Movie | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/${id}?api_key=${API_KEY}&language=en-US`);
        setMovieDetails(response.data);
      } catch (err) {
        setError('Failed to fetch movie details');
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);  // Fetch movie details when movie ID changes

  if (loading) {
    return <div className="loading"><img src={Loading} alt="Loading..." /></div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!movieDetails) {
    return <div>No details available</div>;
  }

  return (
    <div className="movie-details">
      {/* Banner */}
      <div 
        className="movie-banner" 
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movieDetails.backdrop_path})`,
        }}
      >
        <div className="movie-info">
          <h1>{movieDetails.title}</h1>
          <p className="release-date">Release Date: {movieDetails.release_date}</p>
          <p className="rating">Rating: {movieDetails.vote_average}/10</p>
          <p className="overview">{movieDetails.overview}</p>
        </div>
      </div>

      {/* Movie Poster */}
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
          alt={movieDetails.title}
        />
      </div>

      {/* Additional Movie Details */}
      <div className="movie-details-info">
        <div className="movie-genres">
          <strong>Genres: </strong>
          {movieDetails.genres.map((genre) => genre.name).join(', ')}
        </div>
        <div className="movie-runtime">
          <strong>Runtime: </strong>{movieDetails.runtime} min
        </div>
        <div className="movie-tagline">
          <strong>Tagline: </strong>{movieDetails.tagline}
        </div>
        <div className="movie-language">
          <strong>Language: </strong>{movieDetails.original_language}
        </div>
        <div className="movie-budget">
          <strong>Budget: </strong>${movieDetails.budget.toLocaleString()}
        </div>
        <div className="movie-revenue">
          <strong>Revenue: </strong>${movieDetails.revenue.toLocaleString()}
        </div>
        <div className="movie-production-companies">
          <strong>Production Companies: </strong>
          {movieDetails.production_companies.map((company) => company.name).join(', ')}
        </div>
        <div className="movie-status">
          <strong>Status: </strong>{movieDetails.status}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
