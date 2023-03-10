import {
    Card,
    CardContent,
    CardMedia,
    Rating,
    Typography,
  } from "@mui/material";
  import React from "react";
  
  const MovieCard = ({ movie }) => {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 300 }}
          image={movie.posterURL}
        />
        <CardContent className="CardContent">
          <Typography gutterBottom variant="h5" component="div">
            {movie.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="descript">
            {movie.description}
          </Typography>
          <Rating 
              name="read-only"
              value={movie.rating}
              readOnly
            />
        </CardContent>
      </Card>
    );
  };
  
  export default MovieCard;