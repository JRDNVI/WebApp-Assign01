import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const ActorDetails = ({ actor }) => {
  return (
    <div>
      <h2>Actor: {actor.name}</h2>
      <h3>Known For:</h3>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {actor.known_for.map((movie) => (
          <Card key={movie.id} style={{ maxWidth: 400, margin: 10 }}>
            <CardMedia
              component="img"
              height="500"
              image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.original_title}
            />
            <CardContent>
              <Typography variant="h6" component="p">
                {movie.title}
              </Typography>
              <Typography variant="body2" component="p">
                Release Date: {movie.release_date}
              </Typography>
              <Typography variant="body2" component="p">
                Vote Average: {movie.vote_average}
              </Typography>
              <Typography variant="body2" component="p">
                Overview: {movie.overview}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ActorDetails;