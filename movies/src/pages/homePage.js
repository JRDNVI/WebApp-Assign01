import React from "react";
import { getMovies } from "../api/tmdb-api";
import { getLatestMovie } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';
import LatestTemplete from '../components/latestMovie';

const HomePage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('discover', getMovies)
  const { data:latestMovie, error: latestError, isLoading: latestIsLoading, isError: latestIsError  } = useQuery('latest', getLatestMovie )

  if (isLoading || latestIsLoading) {
    return <Spinner />
  }

  if (isError || latestIsError) {
    return <h1>{error.message || latestError.message}</h1>
  }  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (movieId) => true 

  return (
    <>
    <div>
    <LatestTemplete latest={latestMovie}/>
    </div>
    <PageTemplate
      title="Discover Movies"
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />;
      }}
    />
    
  </>
  );
};
export default HomePage;