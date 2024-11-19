// Define the structure of movie objects

  export interface Movie {
    id: number;
    title: string;
    overview: string;
    release_date: string;
    name: string;
    runtime: number;  // Movie runtime in minutes
    vote_average: number;
    vote_count: number;
    genres: { id: number; name: string }[];
    production_companies: { id: number; name: string }[];
    backdrop_path: string;
    poster_path: string;
    status: string;
    tagline: string;
    original_language: string;
    budget: number;
    revenue: number;
  }
  
  
  export interface MovieListResponse {
    results: Movie[];
  }
  