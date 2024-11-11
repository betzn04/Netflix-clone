// Define the structure of movie objects
export interface Movie {
    id: number;
    title: string;
    name: string;
    overview: string;
    poster_path: string;
    backdrop_path: string;
    release_date:string;
    vote_average:string;
  }
  
  export interface MovieListResponse {
    results: Movie[];
  }
  