import React from 'react';
import './Banner.css'; // Optional: For styling the banner
import { Movie } from '../../types/movies';
import { useNavigate } from 'react-router-dom';


interface BannerProps {
  movie: Movie | undefined;
}

const Banner: React.FC<BannerProps> = ({ movie }) => {
  const navigate = useNavigate();
  if (!movie) return null;

  const imageBaseUrl = 'https://image.tmdb.org/t/p/original/';
  const backgroundImageUrl = `${imageBaseUrl}${movie.backdrop_path}`;

  const handlePlayClick = () => {
    // Navigate to the movie's detail page or play the movie
    navigate(`/movie/${movie.id}`);
  };

  return (
    <header
      className="banner"
      style={{
        background: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 2.7) 100%), url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        height: '430px', 
        color: 'white', 
        top:'0px',
        padding: '20px ',
        position: 'relative',
      }}
    >
      <div className="banner-contents ">
        <h1 className="banner-title">{movie.title || movie.name}</h1>
        <div className="banner-buttons">
          <button className="banner-button" onClick={handlePlayClick}>Play</button>
          <button className="banner-button">My List</button>
        </div>
        <h1 className="banner-description">{movie.overview}</h1>
      </div>
    </header>
  );
}

export default Banner;