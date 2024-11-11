// import React, { useState } from 'react';
// import './Row.css'; // Optional: If you want to style your rows
// import { Movie } from '../../types/movies';
// import MovieDetail from '../MovieDetail/MovieDetails';

// interface RowProps {
//   title: string;
//   movies: Movie[];
// }

// const Row: React.FC<RowProps> = ({ title, movies }) => {
//   const imageBaseUrl = "https://image.tmdb.org/t/p/w500/";
//   const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null);

//   return (
//     <div className="row">
//       <h2>{title}</h2>
//       <div className="row-posters">
//         {movies.map((movie) => (
//           <div className="content">
//             <img
//               key={movie.id}
//               className="row-poster"
//               src={`${imageBaseUrl}${movie.poster_path}`}
//               alt={movie.title || movie.name}
//             />
//             <button onClick={() => setSelectedMovieId(movie.id)}>Show Movie Details</button>
//             {selectedMovieId && <MovieDetail movieId={selectedMovieId} />}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Row;


import React, { useState } from 'react';
import './Row.css'; // Import the updated CSS file
import { Movie } from '../../types/movies';
import MovieDetail from '../../pages/MovieDetail/MovieDetails';

interface RowProps {
  title: string;
  movies: Movie[];
}

const Row: React.FC<RowProps> = ({ title, movies }) => {
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500/";
  const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null);

  // When a poster image is clicked, set the selected movie
  const handleImageClick = (movieId: number) => {
    setSelectedMovieId(movieId);
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
              onClick={() => handleImageClick(movie.id)}  // Make the image clickable
            />
            {selectedMovieId === movie.id && <MovieDetail movieId={selectedMovieId} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Row;
