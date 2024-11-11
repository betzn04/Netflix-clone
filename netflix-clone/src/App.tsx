import { StrictMode } from 'react'
import { useEffect, useState } from 'react'
import { Home } from './pages/Home/Home'
import { fetchTrendingMovies, fetchPopularMovies, fetchTopRatedMovies } from './utils/fetchMovies';
import Row from './components/Row/Row';
import Banner from './components/Banner/Banner';
import { Movie } from './types/movies';

StrictMode
const App = () => {
  const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);
  useEffect(() => {
    const getMoviesData = async () => {
      const trending = await fetchTrendingMovies();
      const popular = await fetchPopularMovies();
      const topRated = await fetchTopRatedMovies();

      setTrendingMovies(trending);
      setPopularMovies(popular);
      setTopRatedMovies(topRated);
    };

    getMoviesData();
  }, []);
  return (
    <div>
      <Home/>
      <Banner movie={trendingMovies[0]} />
      <Row title="Trending Now" movies={trendingMovies} />
      <Row title="Popular Movies" movies={popularMovies} />
      <Row title="Top Rated" movies={topRatedMovies} />
    </div>
  )
}

export default App