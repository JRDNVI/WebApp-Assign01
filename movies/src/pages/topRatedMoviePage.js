import React from "react";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import PageTemplate from "../components/templateMovieListPage";
import { getTopRatedMovies } from "../api/tmdb-api";

const ActorDetailsPage = () => {
    const { data, error, isLoading, isError } = useQuery('Top Rated', getTopRatedMovies )

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }
  
  return (
    <PageTemplate
      title="Top Rated Movies"
      movies={data.results}
      action={(movie) => {
        return null;
      }}
    />
  );
};

export default ActorDetailsPage;