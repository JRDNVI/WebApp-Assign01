import React from "react";
import { useParams } from "react-router-dom"; // Import useParams to access URL parameters
import { getActorDetails } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import ActorDetails from "../components/actorDetails";

const ActorDetailsPage = () => {
  const { name } = useParams();
  const nameParts = name.split(" ");
  const apiName = nameParts.join("+");

  const { data, error, isLoading, isError } = useQuery(
    ["actor", { id: apiName }], // Use 'name' as the parameter for the query
    getActorDetails
  );

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }
  console.log(data.results)
  return (
    <ActorDetails actor={data.results[0]} />
  );
};

export default ActorDetailsPage;