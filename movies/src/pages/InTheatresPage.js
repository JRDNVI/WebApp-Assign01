import React from "react";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import PageTemplate from "../components/templateMovieListPage";
import { getNowPlayingMovies } from "../api/tmdb-api";

const InTheatresPage = () => {
    const { data, error, isLoading, isError } = useQuery('Now Playing', getNowPlayingMovies )

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

export default InTheatresPage;