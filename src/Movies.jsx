import React from "react";
import Movie from "./Movie";

export default function Movies({ movies, handleMovieSelect }) {
  return (
    <div className="movie-list">
      <h2>Movie List</h2>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          image={movie.image}
          title={movie.title}
          onClickHandler={() => {
            handleMovieSelect(movie);
          }}
        />
      ))}
    </div>
  );
}
