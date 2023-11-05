import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { getFullActorProfile } from "../../api/tmdb-api";
import  Spinner from "../spinner"
import { useQuery } from "react-query";

const ActorDetails = ({ actor }) => {
  const { data, error, isLoading, isError } = useQuery(
    ["actorFull", { id: actor }], // Use 'name' as the parameter for the query
    getFullActorProfile
  );

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }

  console.log(data)
  return (
    <div>
      <Card style={{ maxWidth: 300, margin: 10 }}>
        <CardMedia
          component="img"
          height="500"
          image={`https://image.tmdb.org/t/p/w500${data.profile_path}`}
          alt={data.name}
        />
        <CardContent>
          <Typography variant="h6" component="p">
            Actor: {data.name}
          </Typography>
          <Typography variant="body2" component="p">
            Birthday: {data.birthday}
          </Typography>
          <Typography variant="body2" component="p">
            Place of Birth: {data.place_of_birth}
          </Typography>
          <Typography variant="body2" component="p">
            Popularity: {data.popularity}
          </Typography>
        </CardContent>
        </Card>
        <p>{data.biography}</p>
      </div>
  );
};

export default ActorDetails;