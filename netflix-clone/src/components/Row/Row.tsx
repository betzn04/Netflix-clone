import React from 'react';
import './Row.css'; 
import { useNavigate } from 'react-router-dom';
import { Movie } from '../../types/movies';

interface RowProps {
  title: string;
  movies: Movie[];
}

const Row: React.FC<RowProps> = ({ title, movies }) => {
  const imageBaseUrl = process.env.REACT_APP_IMAGE_BASE_URL;
  const navigate = useNavigate();
  
  const handleImageClick = (movieId: number) => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {movies.map((movie) => (
          <div className="content" key={movie.id}>
            <img
              className="row-poster"
              src={`${imageBaseUrl}${movie.poster_path}`}
              alt={movie.title || movie.name}
              onClick={() => handleImageClick(movie.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Row;
