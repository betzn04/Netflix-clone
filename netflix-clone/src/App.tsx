import React, { useState, useEffect } from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import Row from './components/Row/Row';
import Banner from './components/Banner/Banner';
import MovieDetails from './pages/MovieDetail/MovieDetails';
import Loading from './assets/images/misc/loading.gif';
import { fetchTrendingMovies, fetchPopularMovies, fetchTopRatedMovies } from './utils/fetchMovies';
import { Movie } from './types/movies';
import { Navbar } from './components/Navbar/Navbar';

const AppContent: React.FC<{ trendingMovies: Movie[], popularMovies: Movie[], topRatedMovies: Movie[] }> = ({ trendingMovies, popularMovies, topRatedMovies }) => {

  const routes = [
    {
      path: '/',
      element: (
        <div>
          <Banner movie={trendingMovies[0]} />
          <Row title="Trending Now" movies={trendingMovies} />
          <Row title="Popular Movies" movies={popularMovies} />
          <Row title="Top Rated" movies={topRatedMovies} />
        </div>
      ),
    },
    {
      path: '/movie/:id',
      element: <MovieDetails />,
    },
  ];

  return useRoutes(routes);
};

const App: React.FC = () => {
  const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const trending = await fetchTrendingMovies();
        const popular = await fetchPopularMovies();
        const topRated = await fetchTopRatedMovies();

        setTrendingMovies(trending);
        setPopularMovies(popular);
        setTopRatedMovies(topRated);
      } catch (err) {
        setError('Failed to fetch movies');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <div><img src={Loading} alt="Loading" /></div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <BrowserRouter future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }}>
      <Navbar/>
      <AppContent
        trendingMovies={trendingMovies}
        popularMovies={popularMovies}
        topRatedMovies={topRatedMovies}
      />
    </BrowserRouter>
  );
};

export default App;
